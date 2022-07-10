import { useContext, useEffect, useState } from "react";
import { useRoute } from "wouter";
import { getOnePokemon } from "../api/fetchPokemon";
import { FavoritesContext } from "../context/FavoritesContext";
import { Pokemon } from "../interfaces/pokemon-list";

export const usePokemon = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [image, setImage] = useState("");
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [isLoading, setIsLoading] = useState(true);
  const { pokemons } = useContext(FavoritesContext);

  const [match, params] = useRoute("/pokemon/:name");

  const getData = async () => {
    setIsLoading(true);
    const res = await getOnePokemon(params!.name);
    const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${res.id}.png`;
    setImage(picture);
    setPokemon(res);
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].name === res.name) {
        if (pokemons[i].isFavorite == true) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [isFavorite]);

  return { isLoading, image, pokemon, isFavorite, setIsFavorite };
};
