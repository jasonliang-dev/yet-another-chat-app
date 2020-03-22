import React from 'react';
import { mount } from 'enzyme';
import DottedBackground from './index';

describe('<DottedBackground />', () => {
  it('should match snapshot', () => {
    const wrapper = mount(<DottedBackground />);
    expect(wrapper).toMatchSnapshot();
  });
});
