import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { ListResponse, QueryParams } from '../models/api-models.ts'
import type { GetPokemonsResponse } from './models/GetPokemonsResponse.ts'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    getPokemons: builder.query<ListResponse<GetPokemonsResponse>, QueryParams>({
      // eslint-disable-next-line camelcase
      query: ({ page_size = 25, page_number = 1 }) => ({
        url: '/pokemons',
        // eslint-disable-next-line camelcase
        params: { page_size, page_number },
      }),
    }),
  }),
})

export const { useLazyGetPokemonsQuery } = pokemonApi
