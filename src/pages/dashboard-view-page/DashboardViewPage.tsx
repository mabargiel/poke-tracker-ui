import {
  PokemonsCountPerGeneration,
  PokemonsCountPerType,
  PokemonTableContainer,
} from '@/pages/dashboard-view-page/components'
import { ChartColumn, ChartRow, PageLayout, TableContainer } from '@/pages/dashboard-view-page/styles.ts'

const DashboardViewPage = () => {
  return (
    <PageLayout>
      <ChartRow>
        <ChartColumn>
          <PokemonsCountPerType />
        </ChartColumn>
        <ChartColumn>
          <PokemonsCountPerGeneration />
        </ChartColumn>
      </ChartRow>
      <TableContainer>
        <PokemonTableContainer />
      </TableContainer>
    </PageLayout>
  )
}

export default DashboardViewPage
