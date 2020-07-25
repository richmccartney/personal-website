import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const Container = styled.header`
  display: grid;
  grid-column-start: 2;
  width: 100%;
  padding: 40px 0;
`

const Logo = styled.a`
  font-size: var(--rem-size-1-5);
  text-decoration: none;
  color: var(--color-charcoal);
`

const Header: FunctionComponent = () => {
  return (
    <Container>
      <Logo href="/">Richard McCartney</Logo>
    </Container>
  )
}

export default Header
