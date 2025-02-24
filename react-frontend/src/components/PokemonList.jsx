// components/PokemonList.jsx
import React, { useEffect, useState } from "react";
import { getAllPokemon } from "../services/api";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllPokemon()
      .then((data) => setPokemonList(data))
      .catch((err) => {
        console.error("Fehler beim Abrufen der Pokémon-Daten:", err);
        setError("Fehler beim Abrufen der Pokémon-Daten");
      });
  }, []);

  if (error) {
    return <div style={{ color: "#FFF", textAlign: "center" }}>{error}</div>;
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center', 
      gap: '1rem', 
      padding: '1rem',
      backgroundColor: "#1E1E1E"
    }}>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;