import { Button } from '@/components/Inputs/Button.tsx'
import type { Pagination } from '@/state/models/api-models.ts'
import type { GetPokemonResponse } from '@/state/rtk-query/models/GetPokemonResponse.ts'

import {
  PageInfoContainer,
  PokemonTableFooter,
  StyledTable,
  StyledTableContainer,
  TableButtonsContainer,
  TableWrapper,
} from './styles'
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
  sort?: { key: string; direction: 'asc' | 'desc' } | undefined
  pagination?: Pagination
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
  pagination,
}: Props) => {
  const handlePageChange = (page: number) => {
    onPageChange(page)
  }

  return (
    <TableWrapper>
      <StyledTableContainer>
        <StyledTable>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} onClick={() => onSortClick(column.key)}>
                  {column.label}
                  {sort?.key === column.key && (sort.direction === 'asc' ? ' ▲' : ' ▼')}
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
                        rawValue: filters?.[column.key],
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
      </StyledTableContainer>

      {pagination && (
        <PokemonTableFooter>
          <div>
            <span>Total items:</span>
            <span>{pagination.totalItems}</span>
          </div>
          <PageInfoContainer>
            <span>
              Page {pagination.pageNumber} / {pagination.totalPages}
            </span>
            <TableButtonsContainer>
              <Button onClick={() => handlePageChange(page - 1)} disabled={!canGoPrev || isFetching}>
                &lt;
              </Button>
              <Button onClick={() => handlePageChange(page + 1)} disabled={!canGoNext || isFetching}>
                &gt;
              </Button>
            </TableButtonsContainer>
          </PageInfoContainer>
        </PokemonTableFooter>
      )}
    </TableWrapper>
  )
}
