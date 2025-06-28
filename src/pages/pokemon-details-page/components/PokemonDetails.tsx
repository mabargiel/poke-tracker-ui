import { ChipList } from '@/components/Data/ChipList.tsx'
import {
  DetailsSection,
  DetailsWrapper,
  ImageWrapper,
  InfoGroup,
  InfoSection,
  Label,
  Name,
  PokemonImage,
  StatName,
  StatsSection,
  StatTile,
  StatValue,
  Value,
} from '@/pages/pokemon-details-page/components/styles.ts'
import type { GetPokemonResponse } from '@/state/rtk-query/models'
import { CONSTANTS } from '@/utils/constants.ts'

type Props = {
  pokemon: GetPokemonResponse
}

export const PokemonDetails = ({ pokemon }: Props) => {
  return (
    <DetailsWrapper>
      <ImageWrapper>
        <PokemonImage src={pokemon.image} alt={`${pokemon.name} image`} />
        <Name>{pokemon.name}</Name>
      </ImageWrapper>

      <InfoSection>
        <StatsSection>
          {pokemon.stats.map(({ name, value }) => (
            <StatTile key={name} backgroundColor={CONSTANTS.statColors[name]}>
              <StatName>{name}</StatName>
              <StatValue>{value}</StatValue>
            </StatTile>
          ))}
        </StatsSection>
        <DetailsSection>
          <InfoGroup>
            <Label>Generation:</Label>
            <Value>{pokemon.generation}</Value>
          </InfoGroup>
          <InfoGroup>
            <Label>Height:</Label>
            <Value>{(pokemon.height / 10).toFixed(1)} m</Value>
          </InfoGroup>
          <InfoGroup>
            <Label>Weight:</Label>
            <Value>{(pokemon.weight / 10).toFixed(1)} kg</Value>
          </InfoGroup>
          <InfoGroup>
            <Label>Types:</Label>
            <ChipList types={pokemon.types} />
          </InfoGroup>
          <InfoGroup>
            <Label>Abilities:</Label>
            <Value>{pokemon.abilities.join(', ')}</Value>
          </InfoGroup>
          <InfoGroup>
            <Label>Evolves into:</Label>
            <Value>
              {pokemon.evolution.from} &rarr; {pokemon.evolution.to}
            </Value>
          </InfoGroup>
          <InfoGroup>
            <Label>Moves:</Label>
            <Value>{pokemon.moves.join(', ')}</Value>
          </InfoGroup>
        </DetailsSection>
      </InfoSection>
    </DetailsWrapper>
  )
}
