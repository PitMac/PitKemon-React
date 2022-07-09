import { Container, Grid, Input, Loading } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { getAllPokemon } from "../api/fetchPokemon";
import { PokemonItem } from "../components/PokemonCard";
import { usePokemons } from "../hooks/usePokemons";
import { SmallPokemon } from "../interfaces/pokemon-list";

export const PokemonList = () => {
  const { setQuery, isLoading, pokemons } = usePokemons();

  return (
    <div>
      <Container css={{ textAlign: "center", marginTop: "$10" }}>
        <Input
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
          clearable
          bordered
          color="primary"
          placeholder="Search a Pokemon"
        />
      </Container>
      {isLoading ? (
        <Container css={{ textAlign: "center", marginTop: "$20" }}>
          <Loading size="xl" color="warning" type="points" />
        </Container>
      ) : (
        <ul>
          <Grid.Container gap={2} justify="center">
            {pokemons.map((pokemon) => (
              <PokemonItem key={pokemon.name} pokemon={pokemon} />
            ))}
          </Grid.Container>
        </ul>
      )}
    </div>
  );
};
