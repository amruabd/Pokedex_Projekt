// components/PokemonDetail.jsx
import { useState } from "react";

const PokemonDetail = ({ pokemon }) => {
  const [currentImage, setCurrentImage] = useState(pokemon.image);

  const handleImageChange = (direction) => {
    if (direction === "next") {
      setCurrentImage(pokemon.image2);
    } else {
      setCurrentImage(pokemon.image);
    }
  };

  return (
    <div style={{ textAlign: "center", backgroundColor: "#2C2C2C", color: "#FFF", padding: "2rem", borderRadius: "8px" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <button
          onClick={() => handleImageChange("prev")}
          style={{
            backgroundColor: "#FF0000",
            color: "#FFF",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            marginRight: "1rem",
          }}
        >
          &lt;
        </button>
        <img
          src={currentImage}
          alt={pokemon.name}
          style={{ width: "200px", height: "200px", cursor: "pointer" }}
        />
        <button
          onClick={() => handleImageChange("next")}
          style={{
            backgroundColor: "#FF0000",
            color: "#FFF",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            marginLeft: "1rem",
          }}
        >
          &gt;
        </button>
      </div>
      <h2>{pokemon.name}</h2>
      <p>Typen: {pokemon.types.join(", ")}</p>
      <p>WP: {pokemon.maxWp} | HP: {pokemon.maxHp}</p>
      <p>Attack: {pokemon.attack} | Defense: {pokemon.defense}</p>
    </div>
  );
};

export default PokemonDetail;