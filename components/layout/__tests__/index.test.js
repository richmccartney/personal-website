import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Layout from '../index'

describe('Layout:', () => {
  const wrapper = mount(<Layout>Hello</Layout>)

  test('renders snapshot as expected', () => {
    const component = renderer.create(<Layout />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders as <div> as expected', () => {
    const container = wrapper.find('div')
    expect(container.is('div')).toBe(true)
  })

  it('renders with <header> as expected', () => {
    const header = wrapper.find('header')
    expect(header.is('header')).toBe(true)
  })
})
