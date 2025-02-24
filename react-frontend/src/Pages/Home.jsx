// pages/Home.jsx
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "#1E1E1E", minHeight: "100vh", color: "#FFF" }}>
      <h1 style={{ color: "#FFCC00" }}>Willkommen beim Pokémon-Projekt!</h1>
      <p style={{ color: "#FF0000" }}>Entdecke alle Pokémon und ihre Details.</p>
      <Link 
        to="/pokemon" 
        style={{ 
          backgroundColor: "#FF0000", 
          color: "#FFF", 
          padding: "0.5rem 1rem", 
          borderRadius: "4px", 
          textDecoration: "none",
          display: "inline-block",
          marginTop: "1rem"
        }}
      >
        Zur Pokémon-Liste
      </Link>
    </div>
  );
};

export default Home;