import React from 'react';
import { mount } from 'enzyme';
import DecoratedContainer from './index';

describe('<DecoratedContainer />', () => {
  it('should match snapshot', () => {
    const wrapper = mount(<DecoratedContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
