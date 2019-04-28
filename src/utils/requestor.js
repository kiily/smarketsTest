import axios from 'axios';

const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3';

async function getPopularEventIds(sport) {
  const popularEventData = await axios.get(`${baseURL}/popular/event_ids/sport/${sport}`);
  const popularEventIds = popularEventData.data.popular_event_ids;
  return popularEventIds;
}

async function getEventsFromIds(idArr) {
  const eventsRes = await axios.get(`${baseURL}/events/${idArr.join(',')}/`);
  const events = eventsRes.data.events;
  return events;
}

async function getEventFromId(id) {
  const eventRes = await axios.get(`${baseURL}/events/${id}/`);
  const event = eventRes.data.events[0];
  return event;

}

async function getPopularEventData(sport) {
  const eventIds = await getPopularEventIds(sport);
  const popularEvents = await getEventsFromIds(eventIds);
  console.log("TCL: getPopularEventData -> popularEvents", popularEvents);

  return Promise.all(popularEvents.map(async(event) => {
    event.parent = await getEventFromId(event.parent_id);
    return event;
  }));
}

const requestor = {
  getPopularEventData
};

export default requestor;
