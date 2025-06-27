import { useEffect, useState } from 'react'

import { ErrorPage, Spinner } from '@/components'
import { useLazyGetPokemonsQuery } from '@/state/rtk-query/apiSlice.ts'

import { PokemonTable } from './PokemonTable.tsx'

export const PokemonTableContainer = () => {
  const [page, setPage] = useState(1)
  const [trigger, { data: response, error, isError, isFetching }] = useLazyGetPokemonsQuery()

  useEffect(() => {
    // eslint-disable-next-line camelcase
    trigger({ page_number: page, page_size: 25 })
  }, [page, trigger])

  if (isError) {
    return <ErrorPage error={error} />
  }

  if (isFetching) {
    return <Spinner />
  }

  console.log(response)

  return (
    response?.items && (
      <PokemonTable
        data={response.items}
        page={page}
        onPageChange={setPage}
        canGoNext={page < response.pagination.totalPages}
        canGoPrev={page > 1}
      />
    )
  )
}
