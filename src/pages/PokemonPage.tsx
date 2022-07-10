import {
  Button,
  Card,
  Collapse,
  Container,
  Grid,
  Loading,
  Spacer,
  Text,
} from "@nextui-org/react";
import { useContext } from "react";
import { GamesCollapse } from "../components/GamesCollapse";
import { MovesCollapse } from "../components/MovesCollapse";
import { SpritesList } from "../components/SpritesList";
import { FavoritesContext } from "../context/FavoritesContext";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {
  const { isLoading, image, pokemon, isFavorite, setIsFavorite } = usePokemon();
  const { addFavorites, removeFavorite } = useContext(FavoritesContext);

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
            <Spacer css={{ flex: 1 }} />
            <Container display="flex" justify="flex-end">
              {isFavorite ? (
                <Button
                  color="error"
                  css={{ marginBottom: "$6" }}
                  bordered
                  auto
                  onClick={() => {
                    setIsFavorite(false);
                    removeFavorite(pokemon!.name);
                  }}
                >
                  Remove to Favorite
                </Button>
              ) : (
                <Button
                  color="primary"
                  css={{ marginBottom: "$6" }}
                  bordered
                  auto
                  onClick={() => {
                    setIsFavorite(true);
                    addFavorites(pokemon!.name, image, pokemon!.species.url);
                  }}
                >
                  Add to Favorite
                </Button>
              )}
            </Container>
          </Container>
        </Grid>
      </Grid.Container>
    </Card>
  );
};
