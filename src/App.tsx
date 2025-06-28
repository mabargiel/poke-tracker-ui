import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PokemonDetailsPage from '@/pages/pokemon-details-page/PokemonDetailsPage.tsx'

import DashboardViewPage from './pages/dashboard-view-page/DashboardViewPage.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardViewPage />} />
          <Route path="/pokemons/:id" element={<PokemonDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
