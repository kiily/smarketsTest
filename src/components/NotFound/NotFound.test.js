import React from 'react';
import { create } from 'react-test-renderer';
import NotFound from './NotFound';

describe('NotFound component', () => {
  it('should match the snapshot when rendered', () => {
    const component = create(<NotFound />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
