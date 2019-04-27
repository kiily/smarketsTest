import axios from 'axios';

const baseURL = 'https://cors-anywhere.herokuapp.com/https://api.smarkets.com/v3';

async function getPopularEventIds(sport) {
  const popularEventData = await axios.get(`${baseURL}/popular/event_ids/sport/${sport}`);
  const popularEventIds = popularEventData.data.popular_event_ids;
  return popularEventIds;
}

async function getEventDataById(id) {
  const eventData = await axios.get(`${baseURL}/events/${id}/`);
  return eventData;
}

async function getPopularEventData(sport) {
  const popularEventIds = await getPopularEventIds(sport);
  const popularEventsData = await Promise.all(popularEventIds.map(eventId => getEventDataById(eventId)));
  return popularEventsData;
}

const requestor = {
  getPopularEventData
};

export default requestor;
