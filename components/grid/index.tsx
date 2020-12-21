import styled from '@emotion/styled'

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--grid-columns), [col] 1fr)',
  gridColumnGap: 'var(--grid-column-gap)',
  gridRowGap: 'var(--grid-row-gap)',
  width: '100%',
  '@media (minWidth: 768px)': {
    gridRowGap: '0',
  },
})

export default Grid
