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

async function getPopularEventData(sport) {
  const eventIds = await getPopularEventIds(sport);
  const popularEvents = await getEventsFromIds(eventIds);

  // Complete the event data by adding the parent competition data
  const parentIds = popularEvents.map(event => event.parent_id);
  const parentEvents = await getEventsFromIds(parentIds);
  return popularEvents.map((event, index) => {
    event.parent = parentEvents[index];
    return event;
  });
}

const requestor = {
  getPopularEventData
};

export default requestor;
