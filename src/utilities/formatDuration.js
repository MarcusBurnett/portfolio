import { intervalToDuration } from 'date-fns';

export default (date) => {
  const duration = intervalToDuration({ start: date, end: new Date() });

  return {
    years:
      duration.years < 10 ? `0${duration.years}` : duration.years.toString(),
    months:
      duration.months < 10 ? `0${duration.months}` : duration.months.toString(),
    days: duration.days < 10 ? `0${duration.days}` : duration.days.toString(),
    hours:
      duration.hours < 10 ? `0${duration.hours}` : duration.hours.toString(),
    minutes:
      duration.minutes < 10
        ? `0${duration.minutes}`
        : duration.minutes.toString(),
    seconds:
      duration.seconds < 10
        ? `0${duration.seconds}`
        : duration.seconds.toString(),
  };
};
