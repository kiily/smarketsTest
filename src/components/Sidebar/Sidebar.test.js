import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './Sidebar';
import { events } from '../../mock-data/event-data';

describe('Sidebar component left side', () => {
  let component;
  let rootInstance;
  beforeEach(() => {
    component = create(<BrowserRouter><Sidebar side="left" show={true} /></BrowserRouter>);
    rootInstance = component.root;
  });

  it('should match the snapshot when rendered with props', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('should render a nav if left sidebar and show is true', () => {
    const nav = rootInstance.findByType('nav');
    expect(nav.props.className).toBe('Sidebar-left in');
  });

  it('should hide the left sidebar if show is false', () => {
    component = create(<BrowserRouter><Sidebar side="left" show={false} /></BrowserRouter>);
    rootInstance = component.root;
    const nav = rootInstance.findByType('nav');
    expect(nav.props.className).toBe('Sidebar-left out');
  });
});

describe('Sidebar component right side', () => {
  let component;
  beforeEach(() => {
    component = create(<BrowserRouter><Sidebar side="right" popularEvents={events}/></BrowserRouter>);
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
