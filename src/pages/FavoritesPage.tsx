import { Container, Grid, Loading, Text } from "@nextui-org/react";
import { useContext } from "react";
import { Link } from "wouter";
import { PokemonItem } from "../components/PokemonCard";
import { FavoritesContext } from "../context/FavoritesContext";

export const FavoritesPage = () => {
  const { pokemons } = useContext(FavoritesContext);

  // if (isLoading) {
  //   return (
  //     <Container css={{ textAlign: "center", marginTop: "$20" }}>
  //       <Loading size="xl" color="warning" type="points" />
  //     </Container>
  //   );
  // }

  if (pokemons.length < 1) {
    return (
      <Container css={{ textAlign: "center", marginTop: "$20" }}>
        <div>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png"
            alt="poke"
            height={200}
          />
          <Text h2>This list is empty :O</Text>
          <Link to={`/`}>
            <a className="favorites-link" style={{ justifyContent: "center" }}>
              <Text color="primary" h4>
                Return
              </Text>
            </a>
          </Link>
        </div>
      </Container>
    );
  } else {
    return (
      <div style={{ minHeight: "85.7vh" }}>
        <ul>
          <Grid.Container className="pokemons" gap={2} justify="center">
            {pokemons.map((pokemon) => (
              <PokemonItem key={pokemon.name} pokemon={pokemon} />
            ))}
          </Grid.Container>
        </ul>
      </div>
    );
  }
};
