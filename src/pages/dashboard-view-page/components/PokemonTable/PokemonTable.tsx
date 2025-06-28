import { Button } from '@/components/Inputs/Button.tsx'
import type { GetPokemonResponse } from '@/state/rtk-query/models/GetPokemonResponse.ts'

import { PageInfoContainer, StyledTable, TableButtonsContainer, TableWrapper } from './styles'
import type { Column } from './types'

type Props = {
  data: GetPokemonResponse[]
  page: number
  onPageChange: (page: number) => void
  canGoNext: boolean
  canGoPrev: boolean
  columns: Column[]
  onFilterChange?: (column: string, value: string) => void
  filters?: Record<string, string>
  isFetching: boolean
  onRowClick: (number: number) => void
  onSortClick: (column: string) => void
  sort?: { column: string; direction: 'asc' | 'desc' } | undefined
}

export const PokemonTable = ({
  data,
  page,
  onPageChange,
  canGoPrev,
  canGoNext,
  columns,
  onFilterChange,
  filters,
  isFetching,
  onRowClick,
  onSortClick,
  sort,
}: Props) => {
  const handlePageChange = (page: number) => {
    onPageChange(page)
  }

  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} onClick={() => onSortClick(column.key)}>
                {column.label}
                {sort?.column === column.key && (sort.direction === 'asc' ? ' ▲' : ' ▼')}
              </th>
            ))}
          </tr>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>
                {column.filterable ? (
                  column.renderFilter ? (
                    column.renderFilter({
                      onChange: (val: string) => onFilterChange?.(column.key, val),
                      value: filters?.[column.key] ?? '',
                    })
                  ) : (
                    <input
                      type="text"
                      placeholder="filter..."
                      value={filters?.[column.key] ?? ''}
                      onChange={(e) => onFilterChange?.(column.key, e.target.value)}
                    />
                  )
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isFetching ? (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: 'center', padding: '2rem' }}>
                Loading...
              </td>
            </tr>
          ) : (
            data.map((pokemon) => (
              <tr key={pokemon.number} onClick={() => onRowClick(pokemon.number)}>
                {columns.map((column) => (
                  <td key={column.key}>
                    {column.render
                      ? column.render(pokemon)
                      : // @ts-ignore
                        pokemon[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </StyledTable>

      <PageInfoContainer>
        <span>Page {page}</span>
        <TableButtonsContainer>
          <Button onClick={() => handlePageChange(page - 1)} disabled={!canGoPrev}>
            &lt;
          </Button>
          <Button onClick={() => handlePageChange(page + 1)} disabled={!canGoNext}>
            &gt;
          </Button>
        </TableButtonsContainer>
      </PageInfoContainer>
    </TableWrapper>
  )
}
