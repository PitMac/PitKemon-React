import {
  Card,
  Collapse,
  Container,
  Grid,
  Loading,
  Text,
} from "@nextui-org/react";
import { GamesCollapse } from "../components/GamesCollapse";
import { MovesCollapse } from "../components/MovesCollapse";
import { SpritesList } from "../components/SpritesList";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {
  const { isLoading, image, pokemon } = usePokemon();

  if (isLoading) {
    return (
      <Container css={{ textAlign: "center", marginTop: "$20" }}>
        <Loading size="xl" color="primary" type="points" />
      </Container>
    );
  }

  return (
    <Card css={{ textAlign: "center", marginTop: "$20", marginBottom: "$20" }}>
      <Grid.Container>
        <Grid>
          <img src={image} alt={pokemon?.name} />
        </Grid>
        <Grid xs>
          <Container
            css={{
              textAlign: "center",
              marginTop: "$5",
            }}
          >
            <Text h2>{pokemon?.name.toUpperCase()}</Text>
            <Collapse.Group css={{ padding: "$0" }} accordion={false}>
              <MovesCollapse pokemon={pokemon} />
              <GamesCollapse pokemon={pokemon} />
            </Collapse.Group>
            <SpritesList pokemon={pokemon} />
          </Container>
        </Grid>
      </Grid.Container>
    </Card>
  );
};
