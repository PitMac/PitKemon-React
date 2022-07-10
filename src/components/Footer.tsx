import { useTheme } from "@nextui-org/react";

export const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
        alt="pokemonImage"
        width={70}
        height={70}
      />
    </footer>
  );
};
