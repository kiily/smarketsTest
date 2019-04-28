import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.scss';

const sidebar = (props) => {
  const TagType = props.side === 'left' ? 'nav' : 'aside';
  const rootClass = `Sidebar-${props.side}`;

  let content = (
    <ol className="left-menu-quick-links">
      <div className="links-title">Quick Links</div>
      <li className="menu-item">Football</li>
      <li className="menu-item">Table Tennis</li>
      <li className="menu-item">Horse Racing</li>
      <li className="menu-item">Politics</li>
    </ol>
  );
  if (props.side === 'right') {
    content = (
      <div className="popular-events">
        <div className="right-nav-header"><span>Popular Events</span></div>
        <div className="right-nav-content">
            {/* ADD EVENTCARDLIST HERE */}
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
  side: PropTypes.string
};

export default sidebar;