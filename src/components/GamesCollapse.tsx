import { Card, Collapse, Container } from "@nextui-org/react";
import { Pokemon } from "../interfaces/pokemon-list";

interface Props {
  pokemon?: Pokemon;
}

export const GamesCollapse = ({ pokemon }: Props) => {
  return (
    <Collapse title="Games:">
      <Container css={{ display: "flex", padding: "$0" }}>
        {pokemon?.game_indices.map((move) => (
          <Card
            key={move.version.name}
            css={{ width: "auto", padding: "$1 $5" }}
            variant="bordered"
          >
            {move.version.name}
          </Card>
        ))}
      </Container>
    </Collapse>
  );
};
