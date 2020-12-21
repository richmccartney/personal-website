import styled from '@emotion/styled'

type ContainerProps = {
  fullWidth?: boolean
}

const Container = styled('div')<ContainerProps>(
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(var(--grid-max-columns), [col] 1fr)',
    gridColumnGap: 'var(--grid-column-gap)',
    width: '100%',
  },
  (props) => ({
    gridColumnStart: props.fullWidth ? '1' : '2',
    gridColumnEnd: props.fullWidth ? '4' : '2',
  })
)

export default Container
