import React from 'react';
import { create, act } from 'react-test-renderer';
import Header from './Header';

describe('Header component', () => {
  let component;
  let rootInstance;
  const mock = jest.fn();
  beforeEach(() => {
    component = create(<Header toggleLinks={mock} />);
    rootInstance = component.root;
  });

  it('should match the snapshot when rendered with props', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should call the toggleLinks method passed as a prop when the bars button is clicked', () => {
    const barsButton = rootInstance.findByType('button');
    act(() => {
      barsButton.props.onClick();
    });
    expect(mock).toHaveBeenCalled();
  });
});
