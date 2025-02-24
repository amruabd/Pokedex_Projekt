import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import { getAllPokemon } from "../services/api";

const PokemonListPage = () => {
  const [pokemonList, setPokemonList] = useState([]); // Gesamte Pokémon-Liste
  const [filteredList, setFilteredList] = useState([]); // Gefilterte und sortierte Pokémon-Liste
  const [types, setTypes] = useState([]); // Alle verfügbaren Pokémon-Typen
  const [selectedType, setSelectedType] = useState(""); // Ausgewählter Typ für Filter
  const [sortBy, setSortBy] = useState(""); // Sortierkriterium (maxWp, maxHp, attack, defense)
  const [sortOrder, setSortOrder] = useState("asc"); // Sortierreihenfolge (asc, desc)
  const [currentPage, setCurrentPage] = useState(1); // Aktuelle Seite
  const [pokemonPerPage] = useState(30); // Anzahl Pokémon pro Seite
  const [searchQuery, setSearchQuery] = useState(""); // Suchbegriff

  // Lade alle Pokémon beim ersten Rendern der Seite
  useEffect(() => {
    getAllPokemon().then((data) => {
      setPokemonList(data);
      setFilteredList(data);
      // Extrahiere alle einzigartigen Typen
      const allTypes = data.flatMap((pokemon) => pokemon.types);
      const uniqueTypes = [...new Set(allTypes)];
      setTypes(uniqueTypes);
    });
  }, []);

  // Filtere und sortiere die Pokémon-Liste
  useEffect(() => {
    let filtered = pokemonList;

    // Filter nach Typ
    if (selectedType) {
      filtered = filtered.filter((pokemon) => pokemon.types.includes(selectedType));
    }

    // Suche nach Name oder ID
    if (searchQuery) {
      const id = parseInt(searchQuery, 10);
      if (!isNaN(id)) {
        filtered = filtered.filter((pokemon) => pokemon.id === id);
      } else {
        filtered = filtered.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }
    }

    // Sortierung
    if (sortBy) {
      const order = sortOrder === "asc" ? 1 : -1;
      filtered.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1 * order;
        if (a[sortBy] > b[sortBy]) return 1 * order;
        return 0;
      });
    }

    setFilteredList(filtered);
    setCurrentPage(1); // Zurück zur ersten Seite nach Filter/Sortierung/Suche
  }, [pokemonList, selectedType, searchQuery, sortBy, sortOrder]);

  // Pagination: Berechne die anzuzeigenden Pokémon
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = filteredList.slice(indexOfFirstPokemon, indexOfLastPokemon);

  // Wechsle die Seite
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Suche nach Name oder ID
  const handleSearch = () => {
    // Die Suche wird automatisch durch den useEffect ausgelöst, wenn sich searchQuery ändert
  };

  // Event-Listener für die Enter-Taste
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#1E1E1E", minHeight: "100vh" }}>
      {/*<h1 style={{ color: "#FFCC00", textAlign: "center" }}>Pokémon-Liste</h1>*/}

      {/* Suche */}
      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Suche nach Name oder ID..."
          style={{
            padding: "0.5rem",
            borderRadius: "4px",
            border: "1px solid #444",
            backgroundColor: "#2C2C2C",
            color: "#FFF",
            marginRight: "0.5rem",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#FF0000",
            color: "#FFF",
            cursor: "pointer",
          }}
        >
          Suchen
        </button>
      </div>

      {/* Filter nach Typ */}
      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        <label htmlFor="typeFilter" style={{ color: "#FFF", marginRight: "0.5rem" }}>Filter nach Typ:</label>
        <select
          id="typeFilter"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          style={{ padding: "0.5rem", borderRadius: "4px", backgroundColor: "#2C2C2C", color: "#FFF" }}
        >
          <option value="">Alle</option>
          {types.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Sortier-Buttons */}
      <div style={{ marginBottom: "1rem", textAlign: "center" }}>
        <button
          onClick={() => {
            setSortBy("maxWp");
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
          style={{
            marginRight: "0.5rem",
            backgroundColor: sortBy === "maxWp" ? "#FF0000" : "#2C2C2C",
            color: "#FFF",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sort by WP {sortBy === "maxWp" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
        </button>
        <button
          onClick={() => {
            setSortBy("maxHp");
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
          style={{
            marginRight: "0.5rem",
            backgroundColor: sortBy === "maxHp" ? "#FF0000" : "#2C2C2C",
            color: "#FFF",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sort by HP {sortBy === "maxHp" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
        </button>
        <button
          onClick={() => {
            setSortBy("attack");
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
          style={{
            marginRight: "0.5rem",
            backgroundColor: sortBy === "attack" ? "#FF0000" : "#2C2C2C",
            color: "#FFF",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sort by Attack {sortBy === "attack" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
        </button>
        <button
          onClick={() => {
            setSortBy("defense");
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
          style={{
            backgroundColor: sortBy === "defense" ? "#FF0000" : "#2C2C2C",
            color: "#FFF",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sort by Defense {sortBy === "defense" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
        </button>
      </div>

      {/* Pokémon-Liste anzeigen */}
      <PokemonList pokemonList={currentPokemon} />

      {/* Pagination */}
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        {Array.from({ length: Math.ceil(filteredList.length / pokemonPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            style={{
              margin: "0 0.25rem",
              padding: "0.5rem 1rem",
              backgroundColor: currentPage === index + 1 ? "#FF0000" : "#2C2C2C",
              color: "#FFF",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PokemonListPage;