import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'

import Header from '../header'

type LayoutProps = {
  /** Specify the content of your Layout */
  children?: ReactNode
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(268px, 1440px) 1fr;
  gap: 0 var(--grid-column-gap);
  grid-template-areas: '. . .';
`

/**
 * Layout component.
 *
 * @component
 * @example
 * return (
 *   <Layout>Hello world!</Layout>
 * )
 */
const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}

export default Layout
