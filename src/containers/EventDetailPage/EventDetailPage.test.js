import React from 'react';
import { create } from 'react-test-renderer';
import EventDetailPage from './EventDetailPage';
import { BrowserRouter } from 'react-router-dom';
import { events } from '../../mock-data/event-data';

describe('EventDetailPage component', () => {
  it('should match the snapshot when rendered before events load', () => {
    const component = create(<BrowserRouter><EventDetailPage match={{ params: { id: 1925896 } }} popularEvents={events} /></BrowserRouter>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
