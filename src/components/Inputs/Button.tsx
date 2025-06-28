import styled from 'styled-components'

import { CONSTANTS } from '@/utils/constants.ts'

type TableButtonProps = {
  disabled?: boolean
}

export const Button = styled.button<TableButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1.2rem;
  height: 3.2rem;
  font-size: 1.6rem;
  line-height: 1;
  color: ${CONSTANTS.uiColors.textInverted};
  background-color: ${({ disabled }) => (disabled ? 'rgba(0, 0, 0, 0.4)' : CONSTANTS.uiColors.primary)};
  border: none;
  border-radius: 0.2rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.2s ease;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`
