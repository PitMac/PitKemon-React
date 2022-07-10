import { Container, Grid, Input, Loading } from "@nextui-org/react";
import { PokemonItem } from "../components/PokemonCard";
import { usePokemons } from "../hooks/usePokemons";

export const PokemonList = () => {
  const { setQuery, isLoading, pokemons } = usePokemons();

  return (
    <div style={{ minHeight: "83.2vh" }}>
      <Container
        css={{ textAlign: "center", marginTop: "$10", marginBottom: "$10" }}
      >
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
          <Grid.Container className="pokemons" gap={2} justify="center">
            {pokemons.map((pokemon) => (
              <PokemonItem key={pokemon.name} pokemon={pokemon} />
            ))}
          </Grid.Container>
        </ul>
      )}
    </div>
  );
};
