import styled from '@emotion/styled'

type ContainerProps = {
  fullWidth?: boolean
}

const Container = styled('div')<ContainerProps>(
  {
    display: 'grid',
    width: '100%',
  },
  (props) => ({
    gridColumnStart: props.fullWidth ? '1' : '2',
    gridColumnEnd: props.fullWidth ? '4' : '2',
  })
)

export default Container
