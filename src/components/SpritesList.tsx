import { Grid, Text } from "@nextui-org/react";
import { Pokemon } from "../interfaces/pokemon-list";
interface Props {
  pokemon?: Pokemon;
}
export const SpritesList = ({ pokemon }: Props) => {
  return (
    <>
      <Text css={{ textAlign: "start" }} h3>
        Sprites:
      </Text>
      <Grid.Container className="sprites-list">
        <Grid
          xs
          css={{
            justifyContent: "center",
          }}
        >
          <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
        </Grid>
        <Grid
          xs
          css={{
            justifyContent: "center",
          }}
        >
          <img src={pokemon?.sprites.back_default} alt={pokemon?.name} />
        </Grid>
        <Grid
          xs
          css={{
            justifyContent: "center",
          }}
        >
          <img src={pokemon?.sprites.front_shiny} alt={pokemon?.name} />
        </Grid>
        <Grid
          xs
          css={{
            justifyContent: "center",
          }}
        >
          <img src={pokemon?.sprites.back_shiny} alt={pokemon?.name} />
        </Grid>
      </Grid.Container>
    </>
  );
};
