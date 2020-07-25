import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { matchers } from 'jest-emotion'

import Container from '../index'

expect.extend(matchers)

describe('Container:', () => {
  const wrapper = mount(<Container>Hello world!</Container>)

  test('renders snapshot as expected', () => {
    const component = renderer.create(<Container />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('grid-column-start', '2')
    expect(tree).toHaveStyleRule('grid-column-start', '2')
  })

  it('renders as <div> as expected', () => {
    const container = wrapper.find('div')
    expect(container.is('div')).toBe(true)
  })
})
