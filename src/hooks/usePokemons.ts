import { useEffect, useState } from "react";
import { getAllPokemon } from "../api/fetchPokemon";
import { SmallPokemon } from "../interfaces/pokemon-list";

export const usePokemons = () => {
  const [pokemons, setpokemons] = useState<SmallPokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  const getData = async () => {
    setIsLoading(true);
    const res = await getAllPokemon();
    const resA = res.results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setpokemons(resA);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [query]);

  return {
    pokemons,
    isLoading,
    setQuery,
  };
};
