import React from 'react';
import EventInfo from './EventInfo/EventInfo';
import { format } from 'date-fns';

import './EventInfoList.scss';

const eventInfoList = (props) => {
  return (
    <div className="EventInfoList-list-container">
      <ul className="event-info-list">
        {props.events.map((event, index) => {
          const eventType = event.type.split('_')[0];
          const parentCompetition = event.parent.name;
          const teams = event.name.split(' vs. ');
          const startTime = new Date(event.start_datetime);
          console.log("TCL: eventInfoList -> startTime", startTime)
          return (
            <EventInfo isTall={index === 0} key={event.id} sport={eventType} competition={parentCompetition}
              teams={teams} startTime={format(startTime, 'DD/MM/YYYY hh:mm')}/>
          );
        })}
      </ul>
    </div>
  );
};

export default eventInfoList;
