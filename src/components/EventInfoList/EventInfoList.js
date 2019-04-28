import React from 'react';
import EventInfo from './EventInfo/EventInfo';

import './EventInfoList.scss';

const eventInfoList = (props) => {
  return (
    <div className="EventInfoList-list-container">
      <ul className="event-info-list">
        {props.events.map((event, index) => {
          const eventType = event.type.split('_')[0];
          const parentCompetition = event.parent.name;
          const teams = event.name.split(' vs. ');
          console.log('TCL: eventInfoList -> teams', teams);
          return (
            <EventInfo isTall={index === 0} key={event.id} sport={eventType} competition={parentCompetition}
              teams={teams}/>
          );
        })}
      </ul>
    </div>
  );
};

export default eventInfoList;
