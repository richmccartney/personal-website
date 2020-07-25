import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Header from '../index'

describe('Header:', () => {
  const wrapper = mount(<Header />)

  test('renders snapshot as expected', () => {
    const component = renderer.create(<Header />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders as <header> as expected', () => {
    const container = wrapper.find('header')
    expect(container.is('header')).toBe(true)
  })
})
