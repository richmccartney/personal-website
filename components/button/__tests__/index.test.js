import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import Button from '../index'

describe('Button:', () => {
  const wrapper = shallow(<Button>Click me!</Button>)

  test('renders snapshot as expected', () => {
    const component = renderer.create(<Button />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders as <button> as expected', () => {
    expect(wrapper.is('button')).toBe(true)
  })

  it('renders with default props as expected', () => {
    expect(wrapper.props().disabled).toEqual(false)
    expect(wrapper.props().type).toEqual('button')
  })
})
