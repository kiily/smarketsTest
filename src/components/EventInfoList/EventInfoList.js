import React, { Fragment } from 'react';
import EventInfo from './EventInfo/EventInfo';
import { createMinimalEvent } from '../../utils/helpers';
import './EventInfoList.scss';

const eventInfoList = (props) => {
  return (
    <Fragment>
      <ul className="EventInfoList-list-container">
        {props.events.map((event, index) => {
          const minimalEvent = createMinimalEvent(event);
          return (
            <EventInfo isTall={index === 0} key={event.id} event={minimalEvent}/>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default eventInfoList;
