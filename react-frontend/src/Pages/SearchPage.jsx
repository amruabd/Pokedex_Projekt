// pages/SearchPage.jsx
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PokemonList from "../components/PokemonList";
import { searchPokemonByName, getPokemonById } from "../services/api";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      // Versuche, nach ID zu suchen
      const id = parseInt(query, 10);
      if (!isNaN(id)) {
        const pokemon = await getPokemonById(id);
        setSearchResults([pokemon]);
      } else {
        // Suche nach Name
        const results = await searchPokemonByName(query);
        setSearchResults(results);
      }
    } catch (error) {
      console.error("Fehler bei der Suche:", error);
      setSearchResults([]);
    }
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#1E1E1E", minHeight: "100vh" }}>
      {/*<h1 style={{ color: "#FFCC00", textAlign: "center" }}>Suche</h1>*/}
      <SearchBar onSearch={handleSearch} />
      <PokemonList pokemonList={searchResults} />
    </div>
  );
};

export default SearchPage;
