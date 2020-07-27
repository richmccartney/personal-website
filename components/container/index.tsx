import styled from '@emotion/styled'

type ContainerProps = {
  fullWidth?: boolean
}

const Container = styled('div')<ContainerProps>(
  {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, [col] 1fr)',
    gridColumnGap: 'var(--px-size-24)',
    width: '100%',
  },
  (props) => ({
    gridColumnStart: props.fullWidth ? '1' : '2',
    gridColumnEnd: props.fullWidth ? '4' : '2',
  })
)

export default Container
