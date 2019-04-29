import { format } from 'date-fns';

export function createMinimalEvent(event, dateFormat = 'dd/MM/yyyy HH:mm') {
  const sport = event.type.split('_')[0];
  const parentCompetition = event.parent.name;
  const teams = event.name.split(' vs. ');
  const startTime = new Date(event.start_datetime);
  const minimalEvent = {
    id: event.id,
    sport,
    competition: parentCompetition,
    teams,
    startTime: format(startTime, dateFormat)
  };
  return minimalEvent;
}
