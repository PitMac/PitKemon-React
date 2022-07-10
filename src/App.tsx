import { useState } from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { PokemonList } from "./pages/PokemonListPage";
import { Route } from "wouter";
import { PokemonPage } from "./pages/PokemonPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <Layout>
        <Route path="/" component={PokemonList} />
        <Route path="/pokemon/:name" component={PokemonPage} />
        <Route path="/favorites" component={FavoritesPage} />
      </Layout>
    </FavoritesProvider>
  );
}

export default App;
