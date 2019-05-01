import React from 'react';
import { create } from 'react-test-renderer';
import SportsLanding from './SportsLanding';
import { events } from '../../mock-data/event-data';

describe('SportsLanding component', () => {
  it('should match the snapshot when rendered', () => {
    const component = create(<SportsLanding currentSport="football" popularEvents={events} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
