// components/SearchBar.jsx
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", backgroundColor: "#2C2C2C", padding: "1rem", borderRadius: "8px" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Suche nach Name oder ID..."
        style={{ 
          padding: "0.5rem", 
          borderRadius: "4px", 
          border: "1px solid #444", 
          backgroundColor: "#1E1E1E", 
          color: "#FFF", 
          marginRight: "0.5rem" 
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
          cursor: "pointer" 
        }}
      >
        Suchen
      </button>
    </div>
  );
};

export default SearchBar;