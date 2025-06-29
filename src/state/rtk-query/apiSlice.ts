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
        url: '/pokemon',
        params,
      }),
    }),
    getPokemonById: builder.query<GetPokemonResponse, string>({
      query: (number) => ({
        url: `/pokemon/${number}`,
      }),
    }),
    getPokemonsCountPerType: builder.query<GetPokemonsCountPerTypeResponse, void>({
      query: () => '/pokemonCounts/type',
    }),
    getPokemonsCountPerGeneration: builder.query<GetPokemonsCountPerGenerationResponse, void>({
      query: () => '/pokemonCounts/generation',
    }),
  }),
})

export const {
  useLazyGetPokemonsQuery,
  useGetPokemonsCountPerTypeQuery,
  useGetPokemonsCountPerGenerationQuery,
  useGetPokemonByIdQuery,
} = pokemonApi
