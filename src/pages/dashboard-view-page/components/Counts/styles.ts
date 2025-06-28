import styled from 'styled-components'

import { CONSTANTS } from '@/utils/constants.ts'

export const CountContainer = styled.div`
  min-height: 20rem;
  height: 30rem;
  width: 100%;
  border: 1px solid ${CONSTANTS.uiColors.border};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`

export const ChartWrapper = styled.div`
  flex: 1;
  min-height: 0;
`
