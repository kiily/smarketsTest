import React from 'react';
import { create, act } from 'react-test-renderer';
import ContentHeader from './ContentHeader';

describe('ContentHeader component', () => {
  let component;
  let rootInstance;
  beforeEach(() => {
    component = create(<ContentHeader currentSport="football" />);
    rootInstance = component.root;
  });

  it('should match the snapshot when rendered with props', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should toggle the favorite class after the favorite button is clicked', () => {
    const favoriteButton = rootInstance.findByType('button');
    act(() => {
      favoriteButton.props.onClick();
    });
    expect(favoriteButton.props.className).toBe('button-custom favorite');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
