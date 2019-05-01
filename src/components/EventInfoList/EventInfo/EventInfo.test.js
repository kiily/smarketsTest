import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import EventInfo from './EventInfo';

const event = {
  id: 1,
  sport: 'Football',
  teams: ['Real Madrid', 'Barcelona'],
  startTime: '30/01/2019 18:30'
};
describe('EventInfo component', () => {
  it('should match the snapshot when rendered with props', () => {
    const component = create(<BrowserRouter><EventInfo isTall={false} event={event} /></BrowserRouter>);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should should have the tall class if isTall is true', () => {
    const component = create(<BrowserRouter><EventInfo isTall={true} event={event} /></BrowserRouter>);
    const rootInstance = component.root;
    const favoriteButton = rootInstance.findByType('li');
    expect(favoriteButton.props.className).toBe('EventInfo-tile tall');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
