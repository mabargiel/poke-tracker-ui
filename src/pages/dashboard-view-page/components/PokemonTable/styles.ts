import styled from 'styled-components'

import { CONSTANTS } from '@/utils/constants.ts'

//TODO could not figure out how to make tBody occupy 100% of height and not overflow, seems like a known limitation
const headerHeight = 4.4
const tableHeight = 34

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-x: auto;
  overflow-y: clip;
  border-radius: 0.8rem;
  border: 1px solid ${CONSTANTS.uiColors.border};
`

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: auto;
  width: 100%;

  thead,
  tbody {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  thead tr:first-child {
    background-color: ${CONSTANTS.uiColors.primary};
    color: ${CONSTANTS.uiColors.textInverted};
  }

  th,
  td {
    padding: 1rem;
    border-bottom: 1px dotted ${CONSTANTS.uiColors.border};
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  tbody {
    display: block;
    overflow-y: auto;
    height: calc(${tableHeight}rem - ${headerHeight}rem);

    tr {
      display: table;
      width: 100%;
      table-layout: fixed;
      transition:
        background-color 0.3s ease,
        transform 0.1s ease;

      &:hover {
        background-color: ${CONSTANTS.uiColors.secondary};
        cursor: pointer;
        color: ${CONSTANTS.uiColors.textInverted};
      }

      &:active {
        background-color: ${CONSTANTS.uiColors.secondaryDark};
        color: ${CONSTANTS.uiColors.textInverted};
        transform: scale(0.98);
      }
    }
  }

  input,
  select {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding: 0.5rem;
  }
`

export const PageInfoContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  padding: 0.2rem;
`

export const TableButtonsContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`

type TableButtonProps = {
  disabled?: boolean
}

export const TableButton = styled.button<TableButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 1.2rem;
  height: 3.2rem;
  font-size: 1.6rem;
  line-height: 1;
  color: ${CONSTANTS.uiColors.textInverted};
  background-color: ${({ disabled }) => (disabled ? CONSTANTS.uiColors.disabled : CONSTANTS.uiColors.primary)};
  border: none;
  border-radius: 0.8rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.2s ease;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`
