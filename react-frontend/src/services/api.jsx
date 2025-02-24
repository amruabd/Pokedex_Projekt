// services/api.jsx
const API_BASE_URL = "http://localhost:8080/api/pokemon";

export const getAllPokemon = () => {
  return fetch(API_BASE_URL).then((response) => response.json());
};

export const getPokemonById = (id) => {
  return fetch(`${API_BASE_URL}/${id}`).then((response) => response.json());
};

export const searchPokemonByName = (name) => {
  return fetch(`${API_BASE_URL}/search/name?name=${name}`).then((response) => response.json());
};
