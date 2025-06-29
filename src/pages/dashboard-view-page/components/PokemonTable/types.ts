import * as React from 'react'

import type { GetPokemonResponse } from '@/state/rtk-query/models/GetPokemonResponse.ts'

export type Column = {
  key: string
  label: string
  sortable?: boolean
  filterable?: boolean
  render?: (item: GetPokemonResponse) => React.ReactNode
  renderFilter?: (props: { value: string; onChange: (value: string) => void; rawValue?: unknown }) => React.ReactNode
}
