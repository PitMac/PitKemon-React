import { Spacer, Text, useTheme } from "@nextui-org/react";
import { Link } from "wouter";

export const NavBar = () => {
  const { theme } = useTheme();
  return (
    <nav
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        height: "7vh",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        alt="pokemonImage"
        width={70}
        height={70}
      />
      <Link to="/">
        <a>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            it
          </Text>
          <Text color="white" h2>
            K
          </Text>
          <Text color="white" h3>
            emon
          </Text>
        </a>
      </Link>

      <Spacer css={{ flex: 1 }} />
      <Link to="/">
        <a>
          <Text className="favorites-link" color="white">
            Favorites
          </Text>
        </a>
      </Link>
    </nav>
  );
};
