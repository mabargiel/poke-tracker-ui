import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { GetPokemonResponse } from '@/state/rtk-query/models'
import type { GetPokemonsCountPerGenerationResponse, GetPokemonsCountPerTypeResponse } from '@/state/rtk-query/models'

import type { ListResponse, QueryParams } from '../models/api-models.ts'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getPokemons: builder.query<ListResponse<GetPokemonResponse>, QueryParams>({
      query: (params) => ({
        url: '/pokemons',
        params,
      }),
    }),
    getPokemonById: builder.query<GetPokemonResponse, string>({
      query: (id) => ({
        url: `/pokemons/${id}`,
      }),
    }),
    getPokemonsCountPerType: builder.query<GetPokemonsCountPerTypeResponse, void>({
      query: () => '/pokemon/stats/type',
    }),
    getPokemonsCountPerGeneration: builder.query<GetPokemonsCountPerGenerationResponse, void>({
      query: () => '/pokemon/stats/generation',
    }),
  }),
})

export const {
  useLazyGetPokemonsQuery,
  useGetPokemonsCountPerTypeQuery,
  useGetPokemonsCountPerGenerationQuery,
  useGetPokemonByIdQuery,
} = pokemonApi
