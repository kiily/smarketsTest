import React, { Fragment } from 'react';
import EventInfo from './EventInfo/EventInfo';
import { format } from 'date-fns';

import './EventInfoList.scss';

const eventInfoList = (props) => {
  return (
    <Fragment>
      <ul className="EventInfoList-list-container">
        {props.events.map((event, index) => {
          const eventType = event.type.split('_')[0];
          const parentCompetition = event.parent.name;
          const teams = event.name.split(' vs. ');
          const startTime = new Date(event.start_datetime);
          return (
            <EventInfo isTall={index === 0} key={event.id} sport={eventType} competition={parentCompetition}
              teams={teams} startTime={format(startTime, 'DD/MM/YYYY HH:mm')}/>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default eventInfoList;
