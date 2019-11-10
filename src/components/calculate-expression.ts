interface MinutesTabUpdatedEvent {
  type: "minutes";
  minutes: number;
}
interface HourlyTabUpdatedEvent {
  type: "hourly";
  minutes: number;
  hours: number;
}
interface DailyTabUpdatedEvent {
  type: "daily";
  minutes: number;
  hours: number;
  dayInterval: number;
}

type TabUpdatedEvent =
  | MinutesTabUpdatedEvent
  | HourlyTabUpdatedEvent
  | DailyTabUpdatedEvent;

export const calculateExpression = (event : TabUpdatedEvent) => {
  if (event.type === "minutes") {
    return `0/${event.minutes} * 1/1 * ?`;
  } else if (event.type === "hourly") {
    return `${event.hours} 0/${event.minutes} 1/1 * ?`;
  } else if (event.type === "daily") {
    return `${event.minutes} ${event.hours} 1/${event.dayInterval} * ?`;
  }
};

export const tabFromExpression = (expression : string) => {
  expression;
  throw "not implemented";
};
