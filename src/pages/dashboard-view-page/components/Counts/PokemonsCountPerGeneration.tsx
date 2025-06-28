import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { ErrorPage, Spinner } from '@/components'
import { ChartWrapper, CountContainer } from '@/pages/dashboard-view-page/components/Counts/styles.ts'
import { useGetPokemonsCountPerGenerationQuery } from '@/state/rtk-query/apiSlice.ts'
import { CONSTANTS } from '@/utils/constants.ts'

export const PokemonsCountPerGeneration = () => {
  const { data, isError, error, isFetching } = useGetPokemonsCountPerGenerationQuery()

  if (isError) return <ErrorPage error={error} />

  return (
    <CountContainer>
      <h4>Count per generation</h4>
      {data &&
        (isFetching ? (
          <Spinner />
        ) : (
          <ChartWrapper>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="generation"
                  interval={0}
                  tickFormatter={(value: string) => value.replace('Generation', 'Gen')}
                />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" activeBar={<Rectangle fill={CONSTANTS.uiColors.primary} />}>
                  <LabelList dataKey="count" position="insideTop" fill="#fff" />
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={CONSTANTS.pokeGenerationColors[entry.generation] ?? '#ccc'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartWrapper>
        ))}
    </CountContainer>
  )
}
