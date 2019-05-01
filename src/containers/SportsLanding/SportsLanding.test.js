import React from 'react';
import { create } from 'react-test-renderer';
import SportsLanding from './SportsLanding';
import { BrowserRouter } from 'react-router-dom';
import { events } from '../../mock-data/event-data';

describe('SportsLanding component', () => {
  it('should match the snapshot when rendered before events load', () => {
    const component = create(<SportsLanding currentSport="football" eventsLoaded={false} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should match the snapshot when rendered after events load', () => {
    const component = create(<BrowserRouter><SportsLanding currentSport="football" popularEvents={events} eventsLoaded={true} /></BrowserRouter>);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
