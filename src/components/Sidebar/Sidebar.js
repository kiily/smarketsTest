import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Sidebar.scss';

import { createMinimalEvent } from '../../utils/helpers';

const sidebar = (props) => {
  const TagType = props.side === 'left' ? 'nav' : 'aside';
  let rootClass = `Sidebar-${props.side}`;

  if (props.side === 'left') {
    if (props.show) {
      rootClass = `${rootClass} in`;
    } else {
      rootClass = `${rootClass} out`;
    }
  }

  let content = (
    <ol className="left-menu-quick-links">
      <div className="links-title">Quick Links</div>
      <li className="menu-item"><NavLink to="/" exact>Football</NavLink></li>
      <li className="menu-item"><NavLink to="/tennis">Tennis</NavLink></li>
      <li className="menu-item"><NavLink to="/horse">Horse Racing</NavLink></li>
      <li className="menu-item"><NavLink to="/politics">Politics</NavLink></li>
    </ol>
  );
  if (props.side === 'right') {
    content = (
      <div className="popular-events">
        <div className="right-nav-header"><span>Popular Events</span></div>
        <div className="right-nav-content">
          <ul className="popular-events-list">
            {props.popularEvents.map((event) => {
              const minimalEvent = createMinimalEvent(event);
              return (
                <li key={event.id}>
                  <Link to={`/event-detail/${minimalEvent.id}`}>
                    <span className="event-link-content">
                      <div className="event-name">{`${minimalEvent.teams[0]} vs. ${minimalEvent.teams[1]}`}</div>
                      <div className="event-info">{minimalEvent.startTime}</div>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <TagType className={rootClass}>
      <div className="sidebar-container">
        {content}
      </div>
    </TagType>
  );
};

sidebar.propTypes = {
  side: PropTypes.string,
  popularEvents: PropTypes.array,
  show: PropTypes.bool
};

export default sidebar;
