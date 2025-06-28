import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { GetPokemonsResponse } from '@/state/rtk-query/models'
import type { GetPokemonsCountPerGenerationResponse, GetPokemonsCountPerTypeResponse } from '@/state/rtk-query/models'

import type { ListResponse, QueryParams } from '../models/api-models.ts'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getPokemons: builder.query<ListResponse<GetPokemonsResponse>, QueryParams>({
      query: (params) => ({
        url: '/pokemon',
        params,
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

export const { useLazyGetPokemonsQuery, useGetPokemonsCountPerTypeQuery, useGetPokemonsCountPerGenerationQuery } =
  pokemonApi
