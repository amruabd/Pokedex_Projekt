// components/PokemonCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <div 
      onClick={handleCardClick} 
      style={{ 
        border: "1px solid #444", 
        borderRadius: "8px", 
        padding: "1rem", 
        margin: "1rem", 
        width: "200px", 
        textAlign: "center", 
        cursor: "pointer",
        transition: "transform 0.2s",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#2C2C2C",
        color: "#FFF"
      }}
      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <img src={pokemon.image} alt={pokemon.name} style={{ width: "100px", height: "100px" }} />
      <h3>{pokemon.name}</h3>
      <p>Typen: {pokemon.types.join(", ")}</p>
      <p>WP: {pokemon.maxWp} | HP: {pokemon.maxHp}</p>
    </div>
  );
};

export default PokemonCard;