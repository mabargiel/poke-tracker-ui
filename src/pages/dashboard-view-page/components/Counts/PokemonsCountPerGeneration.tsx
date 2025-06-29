import { useMediaQuery } from 'react-responsive'
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
  const isMobile = useMediaQuery({ maxWidth: CONSTANTS.breakpoints.mobile })

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
              <BarChart
                data={data}
                layout={isMobile ? 'vertical' : 'horizontal'}
                margin={{ bottom: isMobile ? 0 : 30, right: isMobile ? 30 : 0, left: isMobile ? -10 : 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                {isMobile ? (
                  <>
                    <XAxis />
                    <YAxis type="category" dataKey="generation" width={100} tick={{ fontSize: 12 }} />
                  </>
                ) : (
                  <>
                    <XAxis
                      dataKey="generation"
                      interval={0}
                      tickFormatter={(value: string) => value.replace('Generation', 'Gen')}
                    />
                    <YAxis />
                  </>
                )}
                <Tooltip />
                <Bar dataKey="count" activeBar={<Rectangle fill={CONSTANTS.uiColors.primary} />}>
                  <LabelList
                    dataKey="count"
                    position={isMobile ? 'right' : 'insideTop'}
                    fill={CONSTANTS.uiColors.textPrimary}
                  />
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
