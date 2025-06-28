import styled from 'styled-components'

import { CONSTANTS } from '@/utils/constants.ts'

export const DetailsWrapper = styled.div`
  height: 100vh;
  max-height: 100vh;
  max-width: 80rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
`

export const ImageWrapper = styled.div`
  text-align: center;
`

export const PokemonImage = styled.img`
  max-width: 200px;
  height: auto;
  display: block;
  margin: 0 auto;
`

export const Name = styled.h2`
  font-size: 2.4rem;
  margin-top: 1rem;
`

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const DetailsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
`

export const InfoGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.4rem;
  border: 1px solid ${CONSTANTS.uiColors.border};
  padding: 0.5rem;
  max-height: 100%;
  overflow: scroll;
`

export const Label = styled.span`
  font-weight: bold;
  font-size: 1.6rem;
`

export const Value = styled.span`
  font-size: 1.6rem;
`

export const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 2rem;
  justify-items: center;
  justify-content: center;
`

export const StatTile = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 12rem;
  aspect-ratio: 1 / 1;
  border-radius: 1rem;
  border: 1px solid ${CONSTANTS.uiColors.border};
  padding: 1rem;
  font-size: 1.4rem;
  color: white;
  background-color: ${({ backgroundColor }) => backgroundColor ?? CONSTANTS.uiColors.secondary};
`

export const StatName = styled.span`
  font-weight: 500;
`

export const StatValue = styled.span`
  font-weight: bold;
`
