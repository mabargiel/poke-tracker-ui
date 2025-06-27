import type { GetPokemonsResponse } from '../../../../state/rtk-query/models/GetPokemonsResponse.ts'

type Props = {
  data: GetPokemonsResponse[]
  page: number
  onPageChange: (page: number) => void
  canGoNext: boolean
  canGoPrev: boolean
}

export const PokemonTable = ({ data, page, onPageChange, canGoPrev, canGoNext }: Props) => {
  const handlePageChange = (page: number) => {
    onPageChange(page)
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Generation</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Type 1</th>
            <th>Type 2</th>
            <th>Moves</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((pokemon: GetPokemonsResponse) => (
            <tr key={pokemon.number}>
              <td>{pokemon.number}</td>
              <td>{pokemon.name}</td>
              <td>{pokemon.generation}</td>
              <td>{(pokemon.height / 10).toFixed(1)} m</td>
              <td>{(pokemon.weight / 10).toFixed(1)} kg</td>
              <td>{pokemon.types[0]}</td>
              <td>{pokemon.types[1] ?? '-'}</td>
              <td>{pokemon.moves.length}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => handlePageChange(page - 1)} disabled={canGoPrev}>
          Prev
        </button>
        <span style={{ margin: '0 1rem' }}>Page {page}</span>
        <button onClick={() => handlePageChange(page + 1)} disabled={canGoNext}>
          Next
        </button>
      </div>
    </div>
  )
}
