import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { getOnePokemon } from "../api/fetchPokemon";
import { Pokemon } from "../interfaces/pokemon-list";

export const usePokemon = () => {
  const [image, setImage] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(true);

  const [match, params] = useRoute("/pokemon/:name");

  const getData = async () => {
    setIsLoading(true);
    const res = await getOnePokemon(params!.name);
    const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${res.id}.png`;
    setImage(picture);
    setPokemon(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return { isLoading, image, pokemon };
};
