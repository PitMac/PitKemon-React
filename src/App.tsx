import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./components/Layout";
import { PokemonList } from "./pages/PokemonListPage";
import { Route } from "wouter";
import { PokemonPage } from "./pages/PokemonPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Route path="/" component={PokemonList} />
      <Route path="/pokemon/:name" component={PokemonPage} />
    </Layout>
  );
}

export default App;
