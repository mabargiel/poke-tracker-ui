import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { ListResponse, QueryParams } from '../models/api-models.ts'
import type { GetPokemonsResponse } from './models/GetPokemonsResponse.ts'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getPokemons: builder.query<ListResponse<GetPokemonsResponse>, QueryParams>({
      query: (params) => ({
        url: '/pokemons',
        params,
      }),
    }),
  }),
})

export const { useLazyGetPokemonsQuery } = pokemonApi
