import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Main from '../../src/pages/Main';

describe('Main', () => {
  it('Renders', () => {
    const wrapper = shallow(
      <Main/>
    );

    expect(wrapper.find('h1').length).toBe(1);
  });
});

