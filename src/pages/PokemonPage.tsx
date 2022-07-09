import { Card, Container, Grid, Loading } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { getOnePokemon } from "../api/fetchPokemon";
import { Pokemon } from "../interfaces/pokemon-list";

export const PokemonPage = () => {
  const [image, setImage] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  );
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

  if (isLoading) {
    return (
      <Container css={{ textAlign: "center", marginTop: "$20" }}>
        <Loading size="xl" color="primary" type="points" />
      </Container>
    );
  }

  return (
    <Card>
      <Grid.Container>
        <Grid>
          <img src={image} alt={pokemon?.name} />
        </Grid>
        <Grid>{pokemon?.name}</Grid>
      </Grid.Container>
    </Card>
  );
};
