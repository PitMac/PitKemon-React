import { Pokemon, PokemonListResult } from "../interfaces/pokemon-list";

const url = "https://pokeapi.co/api/v2/pokemon";

export const getAllPokemon = async (): Promise<PokemonListResult> => {
  const response = await fetch(url + "/?limit=151");
  const res: Promise<PokemonListResult> = response.json();
  return res;
};

export const getOnePokemon = async (name: string): Promise<Pokemon> => {
  const response = await fetch(url + `/${name}`);
  const res: Promise<Pokemon> = response.json();
  return res;
};
