import styled from 'styled-components'

import { CONSTANTS } from '@/utils/constants.ts'

//TODO could not figure out how to make tBody occupy 100% of height and not overflow, seems like a known limitation
const headerHeight = 4.4
const tableHeight = 50

export const TableWrapper = styled.div`
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${CONSTANTS.uiColors.border};
  border-spacing: 0;
  table-layout: fixed;

  thead {
    display: table;
    width: 100%;
    table-layout: fixed;

    tr:first-child {
      color: ${CONSTANTS.uiColors.textInverted};
      background-color: ${CONSTANTS.uiColors.primary};
    }

    th {
      padding: 1rem;
      border-bottom: 1px solid ${CONSTANTS.uiColors.border};
      position: sticky;
      top: 0;
      z-index: 2;
      text-align: left;
    }
  }

  tbody {
    display: block;
    overflow-y: auto;
    height: calc(${tableHeight}rem - ${headerHeight}rem);
    width: 100%;

    tr {
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

  tr {
    display: table;
    table-layout: fixed;
    width: 100%;
  }

  td {
    padding: 1rem;
    border-bottom: 1px solid ${CONSTANTS.uiColors.border};
  }

  input,
  select {
    max-width: 100%;
    width: 100%;
    padding: 0.5rem;
  }
`

export const PageInfoContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
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
