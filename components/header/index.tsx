import React, { FunctionComponent, useRef, useState, useEffect } from 'react'
import styled from '@emotion/styled'

interface ToggleProps {
  /** Specify whether toggle is true or false */
  toggle: boolean
}

const Container = styled.header`
  display: flex;
  align-items: center;
  grid-column: 1 / span 3;
  margin: 0 auto;
  width: 100%;
  max-width: 1680px;
  padding: var(--px-size-16) 0;
  border-bottom: 1px solid var(--color-lighter-grey);

  @media (min-width: 768px) {
    padding: 40px 0;
  }
`

const Logo = styled.span`
  width: 17px;
  height: 17px;
  background: url(assets/plus.svg) no-repeat;
  margin-top: -2px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`

const LogoTitle = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: var(--color-charcoal);
  line-height: var(--px-size-16);
  margin-left: var(--px-size-32);
  margin-top: var(--px-size-1);

  @media (min-width: 768px) {
    font-size: var(--rem-size-1-5);
    margin-left: calc(14.097222222222221% + var(--spacing-md));
    margin-top: 0;
  }
`

const Nav = styled.nav<ToggleProps>`
  margin-left: auto;
  position: fixed;
  background: var(--color-white);
  top: 73px;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${(props) => (props.toggle ? 'flex' : 'none')};
  flex-direction: column;
  padding: 0 var(--spacing-md);

  @media (min-width: 768px) {
    position: relative;
    gap: var(--px-size-64);
    display: flex;
    flex-direction: row;
    top: initial;
    padding: 0;
  }

  & a {
    --border-color: #f7f7f7;

    color: var(--color-charcoal);
    text-decoration: none;
    border-bottom: var(--px-size-2) solid var(--border-color);
    margin-top: var(--px-size-2);
    text-align: center;
    display: inline-flex;
    padding: var(--px-size-16) 0;

    @media (min-width: 768px) {
      --border-color: var(--color-transparent);
      padding: 0;

      :hover {
        --border-color: var(--color-charcoal);
      }
    }
  }
`

const ToggleButton = styled.button<ToggleProps>`
  text-indent: -9999em;
  background: ${(props) =>
    props.toggle
      ? 'url("assets/close.svg") no-repeat'
      : 'url("assets/menu.svg") no-repeat'};
  background-position: center;
  width: 40px;
  height: 40px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  appearance: none;
  border: 0;
  margin-left: auto;
  margin-right: -8px;

  @media (min-width: 768px) {
    display: none;
  }
`

/**
 * Header component.
 *
 * @component
 * @example
 * return (
 *   <Header />
 * )
 */
const Header: FunctionComponent = () => {
  const isClient = typeof window === 'object'
  const menuRef = useRef(null)
  const [toggle, setToggle] = useState(false)
  const [windowSize, setWindowSize] = useState(getSize)

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }
  }

  useEffect(() => {
    if (!isClient) {
      return
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (windowSize.width > 768) {
      setToggle(false)
    }
  }, [])

  return (
    <Container>
      <Logo hidden={toggle} />
      <LogoTitle hidden={toggle} href="/">
        Richard McCartney
      </LogoTitle>
      <ToggleButton
        aria-expanded={toggle}
        aria-controls="menu"
        onClick={() => setToggle(!toggle)}
        toggle={toggle}
      >
        <span hidden={toggle}>Menu</span>
        <span hidden={!toggle}>Close menu</span>
      </ToggleButton>
      <Nav id="menu" ref={menuRef} toggle={toggle}>
        <a href="#">Projects</a>
        <a href="#">Articles</a>
        <a href="mailto:richard%40m&#99;%63a%72tn%65y.%69&#111;?subject=Hello%20Richard">
          Contact
        </a>
      </Nav>
    </Container>
  )
}

export default Header
