import React from 'react';
import { create } from 'react-test-renderer';
import Spinner from './Spinner';

describe('Spinner component', () => {
  it('should match the snapshot when rendered', () => {
    const component = create(<Spinner />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
