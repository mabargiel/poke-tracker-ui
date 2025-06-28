import styled from 'styled-components'

import { Chip } from '@/components/Data/Chip.tsx'

const ChipListContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

type Props = {
  types?: string[]
}

export const ChipList = ({ types }: Props) => {
  return (
    <ChipListContainer>
      {types &&
        types.map((type, i) => (
          <Chip key={i} type={type}>
            {type}
          </Chip>
        ))}
    </ChipListContainer>
  )
}
