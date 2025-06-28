import { PokemonTableContainer } from './components/PokemonTable/PokemonTableContainer.tsx'

const DashboardViewPage = () => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PokemonTableContainer />
    </div>
  )
}

export default DashboardViewPage
