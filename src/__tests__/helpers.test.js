import { createMinimalEvent, getTimeTo } from '../utils/helpers';
import { format } from 'date-fns';

describe('Helper functions - createMinimalEvents', () => {
  const date = new Date('2019-01-30T12:00:00');
  beforeAll(() => {
    global.Date = class extends Date {
      constructor() {
        return date;
      }
    };
  });
  it('should return a minimal event object with the default date format', () => {
    const minimalEvent = createMinimalEvent({
      id: 1,
      type: 'football',
      name: 'Real Madrid vs. Barcelona',
      parent: { name: 'LaLiga' },
      start_datetime: new Date(),
      fakeProp: 'Hey',
      anotherFakeProp: 'test'
    });
    console.log(minimalEvent);
    const defaultDateFormat = 'dd/MM/yyyy HH:mm';
    const today = format(new Date(), defaultDateFormat);
    expect(minimalEvent).toEqual({
      id: 1,
      sport: 'football',
      teams: [
        'Real Madrid',
        'Barcelona'
      ],
      competition: 'LaLiga',
      startTime: today,
      timeTo: 'In 0 hour(s)'
    });
  });

  it('should return a minimal event object with a custom date format', () => {
    const detailDateFormat = 'EEEE, LLLL d, h:mm aa';
    const minimalEvent = createMinimalEvent({
      id: 1,
      type: 'football',
      name: 'Real Madrid vs. Barcelona',
      parent: { name: 'LaLiga' },
      start_datetime: new Date(),
      fakeProp: 'Hey',
      anotherFakeProp: 'test'
    }, detailDateFormat);
    const today = format(new Date(), detailDateFormat);
    expect(minimalEvent).toEqual({
      id: 1,
      sport: 'football',
      teams: [
        'Real Madrid',
        'Barcelona'
      ],
      competition: 'LaLiga',
      startTime: today,
      timeTo: 'In 0 hour(s)'
    });
  });
});

describe('Helper functions - getTimeTo', () => {
  const _Date = global.Date;
  const date = new Date('2019-01-30T12:00:00');
  // TODO: consider only having one before all method
  beforeAll(() => {
    global.Date = class extends Date {
      constructor(...args) {
        if (args.length === 1) {
          return new _Date(args[0]);
        }
        return date;
      }
    };
  });
  it('should return the time to a given date in the future (in days)', () => {
    const date2Days = new Date('2019-02-01T12:00:00');
    const timeTo = getTimeTo(date2Days);
    expect(timeTo).toEqual('In 2 day(s)');
  });

  it('should return the time to a given date in the future (in hours)', () => {
    const date2Hours = new Date('2019-01-30T14:00:00');
    const timeTo = getTimeTo(date2Hours);
    expect(timeTo).toEqual('In 2 hour(s)');
  });

});
