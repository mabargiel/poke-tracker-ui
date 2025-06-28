import { useNavigate, useParams } from 'react-router-dom'

import { ErrorPage, Spinner } from '@/components'
import { Button } from '@/components/Inputs/Button.tsx'
import { PokemonDetails } from '@/pages/pokemon-details-page/components/PokemonDetails.tsx'
import { PageLayout } from '@/pages/pokemon-details-page/styles.ts'
import { useGetPokemonByIdQuery } from '@/state/rtk-query/apiSlice.ts'

const PokemonDetailsPage = () => {
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const { data, isError, isFetching, error } = useGetPokemonByIdQuery(id ?? '')

  if (!id || isError) {
    return <ErrorPage error={error} />
  }

  if (isFetching) return <Spinner />

  return (
    data && (
      <PageLayout>
        <Button onClick={() => navigate('/')}>&lt; Back</Button>
        <PokemonDetails pokemon={data} />
      </PageLayout>
    )
  )
}

export default PokemonDetailsPage
