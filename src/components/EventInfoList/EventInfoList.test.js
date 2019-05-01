import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import EventInfoList from './EventInfoList';
import { events } from '../../mock-data/event-data';

describe('EventInfoList component', () => {
  let component;
  beforeEach(() => {
    component = create(<BrowserRouter><EventInfoList events={events} /></BrowserRouter>);
  });

  it('should match the snapshot when rendered with props', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render a list item tag (li) per event (5) events', () => {
    const rootInstance = component.root;
    const list = rootInstance.findByType('ul');
    expect(list.children).toHaveLength(5);
  });
});
