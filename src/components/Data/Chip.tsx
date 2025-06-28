import styled from 'styled-components'

import { CONSTANTS } from '@/utils/constants.ts'

type ChipProps = {
  type: keyof typeof CONSTANTS.pokeColors
}

export const Chip = styled.div<ChipProps>`
  padding: 0.4rem 1rem;
  background-color: ${({ type }) => CONSTANTS.pokeColors[type]};
  border-radius: 0.3rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
  text-align: center;
  line-height: 1.2;
  font-weight: 400;
  color: ${CONSTANTS.uiColors.textPrimary};
`
