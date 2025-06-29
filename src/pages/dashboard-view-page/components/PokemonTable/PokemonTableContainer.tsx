import debounce from 'lodash/debounce'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ErrorPage } from '@/components'
import { ChipList } from '@/components/Data/ChipList.tsx'
import type { Column } from '@/pages/dashboard-view-page/components/PokemonTable/types.ts'
import type { QueryParams } from '@/state/models/api-models.ts'
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
  const [sort, setSort] = useState<{ key: string; direction: 'asc' | 'desc' }>()
  const navigate = useNavigate()

  const debouncedTrigger = useMemo(
    () => debounce((params: QueryParams) => trigger(params), 500, { leading: true, trailing: true }),
    [trigger],
  )

  //TODO I am sending filters and sort as serialized object, but better approach would be using odata query string
  useEffect(() => {
    debouncedTrigger({
      // eslint-disable-next-line camelcase
      page_number: page,
      // eslint-disable-next-line camelcase
      page_size: 25,
      filter: filters ? JSON.stringify(filters) : undefined,
      sort: sort ? JSON.stringify(sort) : undefined,
    })
  }, [page, filters, debouncedTrigger, sort])

  useEffect(() => {
    return () => debouncedTrigger.cancel()
  }, [debouncedTrigger])

  useEffect(() => {
    setPage(1)
  }, [filters, sort])

  const handleFilterChange = useCallback((column: string, value: string) => {
    setFilters((prev) => {
      const updated = { ...prev }
      if (!value) {
        delete updated[column]
      } else {
        updated[column] = value
      }
      return updated
    })
  }, [])

  function handleSortClick(column: string) {
    setSort((prev) => {
      if (!prev || prev.key !== column) {
        return { key: column, direction: 'asc' }
      }
      return {
        key: column,
        direction: prev.direction === 'asc' ? 'desc' : 'asc',
      }
    })
  }

  const columns: Column[] = useMemo(
    () => [
      {
        key: 'number',
        label: '#',
        sortable: true,
        filterable: true,
        renderFilter: ({ value, onChange }) => (
          <input
            onChange={(e) => {
              const val = e.target.value
              if (/^\d*$/.test(val)) {
                onChange?.(val)
              }
            }}
            inputMode="numeric"
            pattern="\d*"
            value={value}
            placeholder="filter..."
          />
        ),
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
        render: (pokemon) => <ChipList types={pokemon.types} />,
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
      onRowClick={(num: number) => {
        navigate('/pokemon/' + num)
      }}
      onSortClick={handleSortClick}
      sort={sort}
      pagination={response?.pagination}
    />
  )
}
