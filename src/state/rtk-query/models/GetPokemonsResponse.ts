export interface PokemonStat {
  name: string
  value: number
}

export interface PokemonEvolution {
  from: string | null
  to: string[]
}

export interface GetPokemonsResponse {
  number: number
  name: string
  generation: string
  height: number
  weight: number
  types: string[]
  stats: PokemonStat[]
  moves: string[]
  abilities: string[]
  evolution: PokemonEvolution
  image: string
}
