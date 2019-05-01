import axios from 'axios';

async function getPopularEventIds(sport) {
  const popularEventRes = await axios.get(`/popular/event_ids/sport/${sport}/`);
  const popularEventIds = popularEventRes.data.popular_event_ids;
  return popularEventIds;
}

/**
 * Potentially to be used to get the event that should be classed as tall
 */
// async function getHomeEvents() {
//   const homeEventsRes = await axios.get(`/popular/home/`);
//   const homeEvents = homeEventsRes.data;
// }

async function getEventsFromIds(idArr) {
  const eventsRes = await axios.get(`/events/${idArr.join(',')}/`);
  const events = eventsRes.data.events;
  return events;
}

async function getEventFromId(id) {
  const eventRes = await axios.get(`/events/${id}/`);
  const event = eventRes.data.events[0];
  return event;
}

async function getEventState(id) {
  const stateRes = await axios.get(`/events/${id}/states/`);
  const state = stateRes.data.event_states[0];
  return state;
}

async function getPopularEventData(sport) {
  const eventIds = await getPopularEventIds(sport);
  const popularEvents = await getEventsFromIds(eventIds);
  return Promise.all(popularEvents.map(async(event) => {
    // TODO: this makes calls really slow - is there a faster way
    const eventState = await getEventState(event.id);
    event.state = eventState.state;
    event.parent = await getEventFromId(event.parent_id);
    return event;
  }));
}

const requestor = {
  getPopularEventData,
  getEventState,
  getEventFromId
};

export default requestor;
