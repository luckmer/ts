import fetch from "node-fetch"
  const api : string = "https://pokeapi.co/api/v2/pokemon?limit=10

interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}


