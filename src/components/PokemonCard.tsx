import { Card, Container, Grid, Loading, Text } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { SmallPokemon } from "../interfaces/pokemon-list";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonItem = ({ pokemon }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState<string>("");

  const getImage = async () => {
    setIsLoading(true);
    const urlParts = pokemon.url.split("/");
    const id = urlParts[urlParts.length - 2];
    const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    setImage(picture);
    setIsLoading(false);
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
            css={{
              mw: "600px",
              cursor: "pointer",
              boxShadow: "2px 2px #ee8329",
            }}
          >
            <Card.Body>
              {isLoading ? (
                <Container
                  css={{
                    textAlign: "center",
                    marginTop: "$20",
                    width: "200px",
                    height: "100px",
                  }}
                >
                  <Loading size="xl" color="warning" type="points" />
                </Container>
              ) : (
                <img
                  src={image}
                  style={{ objectFit: "contain" }}
                  width={300}
                  height={300}
                />
              )}

              <Text
                css={{
                  textAlign: "center",
                }}
                h3
              >
                {pokemon.name.toUpperCase()}
              </Text>
            </Card.Body>
          </Card>
        </a>
      </Link>
    </Grid>
  );
};
