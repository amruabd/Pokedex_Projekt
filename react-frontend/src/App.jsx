import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import PokemonListPage from "./Pages/PokemonListPage";
import PokemonDetailPage from "./Pages/PokemonDetailPage";
import SearchPage from "./Pages/SearchPage";
import CreatPokemonPage from "./Pages/CreatPokemonPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#1E1E1E", minHeight: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={<PokemonListPage />} />
          <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/createpokemon" element={<CreatPokemonPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;