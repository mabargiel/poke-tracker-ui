import { Bar, BarChart, CartesianGrid, Cell, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { ErrorPage, Spinner } from '@/components'
import { ChartWrapper, CountContainer } from '@/pages/dashboard-view-page/components/Counts/styles.ts'
import { useGetPokemonsCountPerTypeQuery } from '@/state/rtk-query/apiSlice.ts'
import { CONSTANTS } from '@/utils/constants.ts'

export const PokemonsCountPerType = () => {
  const { data, isError, error, isFetching } = useGetPokemonsCountPerTypeQuery()

  if (isError) return <ErrorPage error={error} />

  return (
    <CountContainer>
      <h3>Pokemons per type</h3>
      {data &&
        (isFetching ? (
          <Spinner />
        ) : (
          <ChartWrapper>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" angle={-45} textAnchor="end" interval={0} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" activeBar={<Rectangle fill={CONSTANTS.uiColors.primary} />}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CONSTANTS.pokeColors[entry.type.toLowerCase()] ?? '#ccc'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartWrapper>
        ))}
    </CountContainer>
  )
}
