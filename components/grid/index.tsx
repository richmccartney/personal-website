import styled from '@emotion/styled'

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, [col] 1fr)',
  gridColumnGap: 'var(--px-size-24)',
  gridRowGap: 'var(--px-size-16)',
  width: '100%',
  '@media (minWidth: 768px)': {
    gridRowGap: '0',
  },
})

export default Grid
