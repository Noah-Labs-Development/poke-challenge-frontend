import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Pokemon } from "../types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
      transformResponse: (response: any) => ({
        name: response.name,
        image_url: response.sprites.front_default,
      }),
    }),
    getPokemonNames: builder.query<string[], number | undefined>({
      query: (limit = 1292) => `pokemon?limit=${limit}`,
      transformResponse: (response: { results: { name: string }[] }) =>
        response.results.map((pokemon) => pokemon.name),
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonNamesQuery } = pokemonApi;
