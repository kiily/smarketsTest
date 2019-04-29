import { format } from 'date-fns';

export function createMinimalEvent(event) {
  const sport = event.type.split('_')[0];
  const parentCompetition = event.parent.name;
  const teams = event.name.split(' vs. ');
  const startTime = new Date(event.start_datetime);
  const minimalEvent = {
    id: event.id,
    sport,
    parentCompetition,
    teams,
    startTime: format(startTime, 'DD/MM/YYYY HH:mm')
  };
  return minimalEvent;
}
