import styled from '@emotion/styled'

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(12, [col] 1fr);
  gap: var(--px-size-24);
  grid-column: span 12;
  width: 100%;
  padding: var(--px-size-64) 0;

  @media (min-width: 768px) {
    padding: var(--px-size-128) 0;
  }
`

export default Section
