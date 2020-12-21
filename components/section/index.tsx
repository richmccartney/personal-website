import styled from '@emotion/styled'

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(var(--grid-columns), [col] 1fr);
  gap: var(--grid-column-gap);
  grid-column: span 12;
  width: 100%;
  padding: var(--space-xl) 0;

  @media (min-width: 768px) {
    padding: var(--space-xxl) 0;
  }
`

export default Section
