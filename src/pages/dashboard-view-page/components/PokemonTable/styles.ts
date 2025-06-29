import styled from 'styled-components'

import { CONSTANTS } from '@/utils/constants.ts'

//TODO could not figure out how to make tBody occupy 100% of height and not overflow, seems like a known limitation
const headerHeight = 4.4
const tableHeight = 34

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${CONSTANTS.uiColors.border};
  border-radius: 0.8rem;
  overflow: hidden;
  max-height: 100%;
`

export const StyledTableContainer = styled.div`
  max-height: ${tableHeight}rem;
  overflow: auto hidden;
`

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: auto;
  width: 100%;
  min-width: fit-content;

  thead,
  tbody {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  tbody {
    display: block;
    overflow: auto;
    height: calc(${tableHeight}rem - ${headerHeight}rem);
  }

  tbody tr {
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

  thead {
    tr:first-child {
      background-color: ${CONSTANTS.uiColors.primary};
      color: ${CONSTANTS.uiColors.textInverted};
      cursor: pointer;
    }
  }

  th,
  td {
    padding: 1rem;
    border-bottom: 1px dotted ${CONSTANTS.uiColors.border};
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 120px;
    min-width: 120px;
    max-width: 1px; /* a very weird hack, but works with table-layout: fixed */
  }
`

export const PokemonTableFooter = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background: ${CONSTANTS.uiColors.background};
  border-top: 1px solid ${CONSTANTS.uiColors.border};
  position: sticky;
  bottom: 0;
  z-index: 2;

  div:first-child {
    display: flex;
    gap: 0.5rem;
    align-items: center;
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
