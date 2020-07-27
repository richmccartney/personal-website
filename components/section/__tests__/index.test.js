import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { matchers } from 'jest-emotion'

import section from '../index'

expect.extend(matchers)

describe('section:', () => {
  const wrapper = mount(<section>Hello world!</section>)

  test('renders default snapshot as expected', () => {
    const component = renderer.create(<section />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders as <section> as expected', () => {
    const container = wrapper.find('section')
    expect(container.is('section')).toBe(true)
  })
})
