import styled from '@emotion/styled'

const Grid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, [col] 1fr)',
  gridColumnGap: 'var(--px-size-24)',
  width: '100%',
})

export default Grid
