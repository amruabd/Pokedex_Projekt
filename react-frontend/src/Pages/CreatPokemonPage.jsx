// Pages/CreatPokemonPage.jsx

import React from "react";
import Card from "../components/Card";

const CreatPokemonPage = () => {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#1E1E1E", minHeight: "100vh" }}>
      <h1 style={{ color: "#FFF", textAlign: "center" }}>Erstelle dein eigenes Pokémon</h1>
      <Card />
    </div>
  );
};

export default CreatPokemonPage;