import {
  PokemonsCountPerGeneration,
  PokemonsCountPerType,
  PokemonTableContainer,
} from '@/pages/dashboard-view-page/components'

const DashboardViewPage = () => {
  return (
    <div
      style={{
        maxHeight: '100vh',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      <PokemonsCountPerType />
      <PokemonsCountPerGeneration />
      <PokemonTableContainer />
    </div>
  )
}

export default DashboardViewPage
