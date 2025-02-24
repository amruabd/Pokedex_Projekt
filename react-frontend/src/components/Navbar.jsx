// components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Aktuelle URL

  // Stil für aktive Links
  // const activeStyle = {
  //   color: "#FFCC00",
  //   fontWeight: "bold",
  // };

  return (
    <nav style={{ backgroundColor: "#FF0000", padding: "0.5rem", color: "#FFF", display: "flex", justifyContent: "center" }}>
      <Link
        to="/"
        style={{
          color: location.pathname === "/" ? "#FFCC00" : "#FFF",
          textDecoration: "none",
          marginRight: "5rem",
          fontWeight: location.pathname === "/" ? "bold" : "normal",
        }}
      >
        Home
      </Link>
      <Link
        to="/pokemon"
        style={{
          color: location.pathname === "/pokemon" ? "#FFCC00" : "#FFF",
          textDecoration: "none",
          marginRight: "5rem",
          fontWeight: location.pathname === "/pokemon" ? "bold" : "normal",
        }}
      >
        Pokémon-Liste
      </Link>
      <Link
        to="/search"
        style={{
          color: location.pathname === "/search" ? "#FFCC00" : "#FFF",
          textDecoration: "none",
          marginRight: "5rem",
          fontWeight: location.pathname === "/search" ? "bold" : "normal",
        }}
      >
        Suche
      </Link>
      <Link
        to="/createpokemon"
        style={{
          color: location.pathname === "/createpokemon" ? "#FFCC00" : "#FFF",
          textDecoration: "none",
          fontWeight: location.pathname === "/createpokemon" ? "bold" : "normal",
        }}
      >
        Eigene Pokémon erstellen
      </Link>
    </nav>
  );
};

export default Navbar;