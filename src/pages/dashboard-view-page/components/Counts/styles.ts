import styled from 'styled-components'

import { media } from '@/utils/breakpoints.ts'
import { CONSTANTS } from '@/utils/constants.ts'

export const CountContainer = styled.div`
  min-height: 200px;
  height: 30rem;
  width: 100%;
  min-width: 550px;
  border: 1px solid ${CONSTANTS.uiColors.border};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  ${media.down('mobile')} {
    height: 60rem;
    min-width: 100%;
  }
`

export const ChartWrapper = styled.div`
  flex: 1;
  min-height: 0;
`
