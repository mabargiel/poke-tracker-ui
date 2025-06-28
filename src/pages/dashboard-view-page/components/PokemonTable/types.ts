import * as React from 'react'

import type { GetPokemonsResponse } from '@/state/rtk-query/models/GetPokemonsResponse.ts'

export type Column = {
  key: string
  label: string
  sortable?: boolean
  filterable?: boolean
  render?: (item: GetPokemonsResponse) => React.ReactNode
  renderFilter?: (props: { value: string; onChange: (value: string) => void }) => React.ReactNode
}
