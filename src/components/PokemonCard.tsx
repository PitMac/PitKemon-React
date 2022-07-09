import { Card, Grid, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { SmallPokemon } from "../interfaces/pokemon-list";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonItem = ({ pokemon }: Props) => {
  const [image, setImage] = useState<string>(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  );

  const getImage = () => {
    const urlParts = pokemon.url.split("/");
    const id = urlParts[urlParts.length - 2];
    const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    setImage(picture);
  };

  useEffect(() => {
    getImage();
  }, []);

  return (
    <Grid xs={9} sm={4} md={3} lg={2} justify="center">
      <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
        <a>
          <Card
            className="pokemon-card"
            isHoverable
            variant="bordered"
            css={{ mw: "600px", cursor: "pointer" }}
          >
            <Card.Body>
              <img
                src={image}
                style={{ objectFit: "contain" }}
                width={300}
                height={300}
              />
              <Text
                css={{
                  textAlign: "center",
                }}
                h2
              >
                {pokemon.name}
              </Text>
            </Card.Body>
          </Card>
        </a>
      </Link>
    </Grid>
  );
};
