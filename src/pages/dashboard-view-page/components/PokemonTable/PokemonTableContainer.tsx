import debounce from 'lodash/debounce'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { ErrorPage } from '@/components'
import type { Column } from '@/pages/dashboard-view-page/components/PokemonTable/types.ts'
import { useLazyGetPokemonsQuery } from '@/state/rtk-query/apiSlice.ts'

import { PokemonTable } from './PokemonTable.tsx'

//TODO fetch from server
const TYPE_OPTIONS = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
]

const GENERATION_OPTIONS = [
  'Generation I',
  'Generation II',
  'Generation III',
  'Generation IV',
  'Generation V',
  'Generation VI',
  'Generation VII',
  'Generation VIII',
  'Generation IX',
]

export const PokemonTableContainer = () => {
  const [trigger, { data: response, error, isError, isFetching }] = useLazyGetPokemonsQuery()
  const [page, setPage] = useState<number>(1)
  const [filters, setFilters] = useState<Record<string, string>>()

  const debouncedTrigger = useMemo(() => debounce((params) => trigger(params), 500), [trigger])

  //TODO I am sending filters as serialized object, but better approach would be using odata query string
  useEffect(() => {
    debouncedTrigger({
      // eslint-disable-next-line camelcase
      page_number: page,
      // eslint-disable-next-line camelcase
      page_size: 25,
      filter: filters ? JSON.stringify(filters) : undefined,
    })
  }, [page, filters, debouncedTrigger])

  useEffect(() => {
    return () => debouncedTrigger.cancel()
  }, [debouncedTrigger])

  const handleFilterChange = useCallback((column: string, value: string) => {
    setFilters((prev) => ({ ...prev, [column]: value }))
  }, [])

  const columns: Column[] = useMemo(
    () => [
      {
        key: 'number',
        label: '#',
        sortable: true,
        filterable: true,
      },
      {
        key: 'name',
        label: 'Name',
        sortable: true,
        filterable: true,
      },
      {
        key: 'generation',
        label: 'Generation',
        filterable: true,
        renderFilter: ({ value, onChange }) => (
          <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="">All</option>
            {GENERATION_OPTIONS.map((gen) => (
              <option key={gen} value={gen}>
                {gen}
              </option>
            ))}
          </select>
        ),
      },
      {
        key: 'height',
        label: 'Height',
        render: (pokemon) => `${(pokemon.height / 10).toFixed(1)} m`,
      },
      {
        key: 'weight',
        label: 'Weight',
        render: (pokemon) => `${(pokemon.weight / 10).toFixed(1)} kg`,
      },
      {
        key: 'type',
        label: 'Type',
        filterable: true,
        render: (pokemon) => pokemon.types.join(', '),
        renderFilter: ({ value, onChange }) => (
          <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option value="">All</option>
            {TYPE_OPTIONS.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        ),
      },
      {
        key: 'moves',
        label: 'Moves',
        render: (pokemon) => pokemon.moves.length,
        filterable: true,
      },
    ],
    [],
  )

  if (isError) return <ErrorPage error={error} />

  return (
    <PokemonTable
      columns={columns}
      data={response?.items || []}
      page={page}
      onPageChange={setPage}
      filters={filters}
      onFilterChange={handleFilterChange}
      canGoNext={page < (response?.pagination.totalPages ?? 1)}
      canGoPrev={page > 1}
      isFetching={isFetching}
    />
  )
}
