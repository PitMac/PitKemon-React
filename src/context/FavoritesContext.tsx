import {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";

export type FavoritesContextProps = {
  pokemons: Pokemon[];
  removeFavorite: (name: string) => void;
  addFavorites: (name: string, image: string, url: string) => void;
};

export const FavoritesContext = createContext<FavoritesContextProps>(
  {} as FavoritesContextProps
);

interface Props {
  children: ReactNode;
}

interface Pokemon {
  name: string;
  image: string;
  url: string;
  isFavorite: boolean;
}

export const FavoritesProvider: FC<Props> = ({ children }) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const removeFavorite = (name: string) => {
    if (pokemons.length > 0) {
      for (var i = 0; i < pokemons.length; i++) {
        if (pokemons[i].name == name) {
          pokemons.splice(i, 1);
          setPokemons(pokemons);
          localStorage.setItem("pokemons", JSON.stringify([...pokemons]));
        }
      }
    }
  };

  const addFavorites = (name: string, image: string, url: string) => {
    if (!pokemons.some((poke) => poke.name === name)) {
      localStorage.setItem(
        "pokemons",
        JSON.stringify([...pokemons, { name, image, isFavorite: true, url }])
      );
      // @ts-ignore
      const items = JSON.parse(localStorage.getItem("pokemons")) || [];
      setPokemons(items);
    }
  };

  useEffect(() => {
    // @ts-ignore
    const items = JSON.parse(localStorage.getItem("pokemons")) || [];
    setPokemons(items);
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        pokemons,
        removeFavorite,
        addFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
