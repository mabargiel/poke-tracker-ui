import type { GetPokemonsResponse } from '@/state/rtk-query/models/GetPokemonsResponse'

import { PageInfoContainer, StyledTable, TableButton, TableButtonsContainer, TableWrapper } from './styles'
import type { Column } from './types'

type Props = {
  data: GetPokemonsResponse[]
  page: number
  onPageChange: (page: number) => void
  canGoNext: boolean
  canGoPrev: boolean
  columns: Column[]
  onFilterChange?: (column: string, value: string) => void
  filters?: Record<string, string>
  isFetching: boolean
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
              <th key={column.key}>{column.label}</th>
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
              <tr key={pokemon.number}>
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
          <TableButton onClick={() => handlePageChange(page - 1)} disabled={!canGoPrev}>
            &lt;
          </TableButton>
          <TableButton onClick={() => handlePageChange(page + 1)} disabled={!canGoNext}>
            &gt;
          </TableButton>
        </TableButtonsContainer>
      </PageInfoContainer>
    </TableWrapper>
  )
}
