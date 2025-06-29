import styled from 'styled-components'

import { media } from '@/utils/breakpoints.ts'

export const PageLayout = styled.div`
  max-height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`

export const ChartRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  ${media.down('mobile')} {
    flex-flow: column nowrap;
  }
`

export const ChartColumn = styled.div`
  flex: 1;
`

export const TableContainer = styled.div`
  flex-wrap: wrap;
`
