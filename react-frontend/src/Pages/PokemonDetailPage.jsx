// pages/PokemonDetailPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonDetail from "../components/PokemonDetail";
import { getPokemonById } from '../services/api';

const PokemonDetailPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getPokemonById(id).then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) return <div style={{ color: "#FFF", textAlign: "center" }}>Loading...</div>;

  return (
    <div style={{ padding: "2rem", backgroundColor: "#1E1E1E", minHeight: "100vh" }}>
      <h1 style={{ color: "#FFF", textAlign: "center" }}>Pokémon-Details</h1>
      <PokemonDetail pokemon={pokemon} />
    </div>
  );
};

export default PokemonDetailPage;