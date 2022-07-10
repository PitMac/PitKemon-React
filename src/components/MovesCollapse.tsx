import { Card, Collapse, Container } from "@nextui-org/react";
import { Pokemon } from "../interfaces/pokemon-list";

interface Props {
  pokemon?: Pokemon;
}

export const MovesCollapse = ({ pokemon }: Props) => {
  return (
    <Collapse title="Moves:">
      <Container css={{ display: "flex", padding: "$0" }}>
        {pokemon?.moves.map((move) => (
          <Card
            key={move.move.name}
            css={{ width: "auto", padding: "$1 $5" }}
            variant="bordered"
          >
            {move.move.name}
          </Card>
        ))}
      </Container>
    </Collapse>
  );
};
