import { format } from 'date-fns';

// eslint-disable-next-line camelcase
export function createMinimalEvent({ id, type, name, parent, start_datetime }, dateFormat = 'dd/MM/yyyy HH:mm') {
  const sport = type.split('_')[0];
  const parentCompetition = parent.name;
  const teams = name.split(' vs. ');
  const startTime = new Date(start_datetime);
  const timeTo = getTimeTo(startTime);
  const minimalEvent = {
    id: id,
    sport,
    competition: parentCompetition,
    teams,
    startTime: format(startTime, dateFormat),
    timeTo
  };
  return minimalEvent;
}

function getTimeTo(startTime) {
  const millisecondDiff = Math.abs(new Date() - startTime);
  const hoursTo = Math.ceil((millisecondDiff / 1000) / 3600);
  let timeTo = hoursTo;
  let timeSpan = 'hour(s)';
  if (timeTo >= 24) {
    timeTo = Math.floor(timeTo / 24);
    timeSpan = 'day(s)';
  }
  return `In ${timeTo} ${timeSpan}`;
}
