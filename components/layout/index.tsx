import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import Header from '../header'

type LayoutProps = {
  children?: ReactNode
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(320px, 1440px) 1fr;
  gap: 0 24px;
  grid-template-areas: '. . .';
`

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

export default Layout
