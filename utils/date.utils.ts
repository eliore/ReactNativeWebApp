import moment, { Moment, unitOfTime } from "moment";

export const RADIX = 10;

export const HOURS_IN_DAY = 24;
export const SECONDS_IN_MINUTE = 60;
export const MINUTES_IN_HOUR = 60;

export const DATE_FORMATS = {
  DAY_NAME: "dddd",
  SHORT_DAY_NAME: "ddd",
  SHORT_MONTH_NAME: "MMM",
  MONTH_NUMBER: "M",
  DAY_OF_MONTH: "D",
  DAY_OF_WEEK_FULL: "dddd",
  MONTH_DATE: "MMM DD",
  DAY_OF_WEEK_NUMBER: "e",
  FULL_DATE_TIME: "YYYY-MM-DD HH:mm:ss",
  TIME: "HH:mm a",
  TIME24: "HH:mm",
  DEFAULT_DATE_TIME: "MM/DD/YYYY",
  DATE_WITHOUT_TIME: "YYYY-MM-DD",
  LONG_DATE_TIME_WITH_DAY_NAME: "dddd, MMM DD",
  LONG_DATE_TIME_WITH_DAY_NAME_INCLUDE_TIME: "MMM DD, HH:mm",
  YEAR: "YYYY"
};
export const TIME_UNITS: any = {
  years: "years",
  year: "year",
  months: "months",
  month: "month",
  weeks: "weeks",
  week: "week",
  isoWeek: "isoWeek",
  days: "days",
  day: "day",
  hours: "hours",
  hour: "hour",
  minutes: "minutes",
  seconds: "seconds",
  milliseconds: "milliseconds"
};

// do not export this, create function in this file to help for you and not return moment object!
export function getDate(
  date?: string,
  utc = true,
  defaultFormat?: boolean
): Moment {
  const args = [date ? date : new Date()];
  if (defaultFormat) {
    args.push(DATE_FORMATS.FULL_DATE_TIME);
  }
  if (utc) {
    return moment.utc(...args);
  }

  return moment(...args);
}

export function getTimezoneDate(offset: number) {
  return moment.utc().add(offset, TIME_UNITS.milliseconds);
}

export function getDateFromTime(time: string) {
  return moment(time, DATE_FORMATS.TIME).toDate();
}

export function getDateFormatedFromTime(
  time: string,
  date?: string,
  dateFormat: string = DATE_FORMATS.FULL_DATE_TIME
) {
  if (date) {
    const dateTime = `${date} ${time}`;
    return moment(dateTime).format(dateFormat);
  }

  return moment(time, DATE_FORMATS.TIME).format(dateFormat);
}

export function format(
  date: string | undefined,
  dateFormat: string,
  utc = true
): string {
  const dateObj = getDate(date, utc);

  return dateObj.format(dateFormat);
}

export function isPastDate(
  date: string,
  timeUnit?: unitOfTime.StartOf,
  todayDate?: Moment,
  isUtc: boolean = false
) {
  const today = (todayDate || getDate(undefined, isUtc)).format(
    DATE_FORMATS.FULL_DATE_TIME
  );

  return isBefore(
    date,
    today,
    false,
    todayDate ? true : isUtc,
    timeUnit || TIME_UNITS.day
  );
}

export function isFutureDate(date: string, todayDate?: Moment) {
  const today = (todayDate || getDate(undefined, false)).format(
    DATE_FORMATS.FULL_DATE_TIME
  );

  return isAfter(date, today, false, !!todayDate, TIME_UNITS.day);
}

export function isTodayDate(date: string, todayDate?: Moment) {
  const now = todayDate || getDate(undefined, false, true);
  return getDate(date, !!todayDate).isSame(now, TIME_UNITS.day);
}

export function isSameDay(date1: string, date2: string, utc: boolean = false) {
  return isSame(date1, date2, utc, TIME_UNITS.day);
}

export function getDayNumber(date: string) {
  const dayNumber = format(date, DATE_FORMATS.DAY_OF_WEEK_NUMBER, false);
  return parseInt(dayNumber, RADIX);
}

export function getCurrentWeek(
  timezoneOffSet?: number,
  todayDate?: string,
  dateFormat?: string
) {
  const start = timezoneOffSet
    ? getTimezoneDate(timezoneOffSet)
    : getDate(todayDate);

  const startDate = start
    .isoWeekday(1)
    .format(dateFormat || DATE_FORMATS.DEFAULT_DATE_TIME);
  const endDate = start
    .isoWeekday(7)
    .format(dateFormat || DATE_FORMATS.DEFAULT_DATE_TIME);

  return {
    startDate,
    endDate
  };
}

export function getWeekArray(date: string, dateFormat?: string) {
  const weekArray = [];

  for (let i = 1; i <= 7; i++) {
    const isoWeekday = getDate(date, false)
      .isoWeekday(i)
      .format(dateFormat || DATE_FORMATS.DEFAULT_DATE_TIME);

    weekArray.push(isoWeekday);
  }

  return weekArray;
}
export function getNextWeekGeneral(
  currentWeekStartDate: string,
  weekJump?: number
) {
  const startDateMoment = weekJump
    ? getDate(add(currentWeekStartDate, weekJump, TIME_UNITS.weeks))
    : getDate(currentWeekStartDate);

  return {
    startDate: startDateMoment
      .isoWeekday(1)
      .format(DATE_FORMATS.DEFAULT_DATE_TIME),
    endDate: startDateMoment
      .isoWeekday(7)
      .format(DATE_FORMATS.DEFAULT_DATE_TIME)
  };
}
export function getNextWeek(currentWeekStartDate: string, weekJump?: number) {
  const weekDayJumpStart = weekJump ? 7 * weekJump + 1 : 8;
  const weekDayJumpEnd = weekJump ? 7 * weekJump + 6 : 14;

  return {
    startDate: getDate(currentWeekStartDate, false)
      .isoWeekday(weekDayJumpStart)
      .format(DATE_FORMATS.DEFAULT_DATE_TIME),
    endDate: getDate(currentWeekStartDate, false)
      .isoWeekday(weekDayJumpEnd)
      .format(DATE_FORMATS.DEFAULT_DATE_TIME)
  };
}

export function getPreviousWeek(
  currentWeekStartDate: string,
  weekJump?: number
) {
  const weekDayJumpStart = weekJump ? 1 - weekJump * 7 : -6;
  const weekDayJumpEnd = weekJump ? 1 - weekJump * 7 + 6 : 0;
  return {
    startDate: getDate(currentWeekStartDate, false)
      .isoWeekday(weekDayJumpStart)
      .format(DATE_FORMATS.DEFAULT_DATE_TIME),
    endDate: getDate(currentWeekStartDate, false)
      .isoWeekday(weekDayJumpEnd)
      .format(DATE_FORMATS.DEFAULT_DATE_TIME)
  };
}

export function getCurrentWeekDay(timezoneOffSet?: number) {
  return (timezoneOffSet
      ? getTimezoneDate(timezoneOffSet)
      : getDate(undefined, false, true)
  ).isoWeekday();
}

export function getDayOfWeekFormatOneLetter(
  dayOfWeek: number,
  timezoneOffSet?: number
) {
  return dayOfWeek >= 0 && dayOfWeek <= 6
    ? (timezoneOffSet
        ? getTimezoneDate(timezoneOffSet)
        : getDate(undefined, false, true)
    )
      .isoWeekday(dayOfWeek + 1)
      .format(DATE_FORMATS.DAY_OF_WEEK_FULL)[0]
    : null;
}

export function getCurrentMonth() {
  return getDate(undefined, true, true).format(DATE_FORMATS.MONTH_NUMBER);
}

export function getMonthFormat(monthNumber: number, dateFormat: string) {
  return getDate(undefined, true, true)
    .month(monthNumber - 1)
    .format(dateFormat);
}

export function convertHoursNumberToHoursTime(
  hours: number,
  toFixed: boolean = false
): string {
  let numOfHours = parseInt(hours.toString(), RADIX);
  let numOfMinutes = parseInt(
    ((hours - numOfHours) * MINUTES_IN_HOUR).toFixed(), RADIX
  );

  if (toFixed) {
    const div10 = Number((numOfMinutes / 10).toFixed());
    const mod10 = Number((numOfMinutes % 10).toFixed());
    numOfMinutes =
      mod10 <= 5
        ? numOfMinutes - mod10
        : div10 < 5
        ? numOfMinutes + 10 - mod10
        : 0;

    numOfHours = mod10 > 5 && div10 >= 5 ? numOfHours + 1 : numOfHours;
  }

  return numOfMinutes === 0
    ? `${numOfHours}`
    : `${numOfHours}:${(toFixed
        ? numOfMinutes.toFixed()
        : parseInt(numOfMinutes.toString(), RADIX).toString()
    ).padStart(2, "0")}`;
}

export function convertHoursTimeToHoursNumber(time: string) {
  const [hours, min] = time.split(":");
  const oneMin = 1 / 60;
  return parseInt(hours, RADIX) + parseInt(min, RADIX) * oneMin;
}

export function getUnits(
  dateTime: string,
  unit: "months" | "weeks" | "days" | "minutes" | "hours",
  utc = true
): number {
  return getDate(dateTime, utc)[unit]();
}

export function startOf(
  dateTime: string,
  unit: "year" | "month" | "week" | "isoWeek" | "day" | "hour",
  utc = true
): string {
  return getDate(dateTime, utc)
    .startOf(unit)
    .format("YYYY-MM-DD HH:mm:ss");
}

export function endOf(
  dateTime: string,
  unit: "year" | "month" | "week" | "isoWeek" | "day" | "hour",
  utc = true
): string {
  return getDate(dateTime, utc)
    .endOf(unit)
    .format("YYYY-MM-DD HH:mm:ss");
}

export function add(
  dateTime: string,
  amount: number,
  unit: "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds",
  utc = true
): string {
  return getDate(dateTime, utc)
    .add(amount, unit)
    .format("YYYY-MM-DD HH:mm:ss");
}

export function diff(
  startDate: string,
  endDate: string,
  unit: any,
  utc = true,
  precise?: boolean
): number {
  const momentStartDate = getDate(startDate, utc);
  const momentEndDate = getDate(endDate, utc);

  return momentEndDate.diff(momentStartDate, unit, precise);
}
export function isSame(
  date1: string,
  date2: string,
  utc: boolean = true,
  timeUnit?: unitOfTime.StartOf
) {
  const momentDate1 = getDate(date1, utc);
  const momentDate2 = getDate(date2, utc);

  return momentDate1.isSame(momentDate2, timeUnit);
}

export function isBefore(
  baseDate: string,
  parameterDate: string,
  alsoSame: boolean = false,
  utc: boolean = true,
  timeUnit?: unitOfTime.StartOf
): boolean {
  const momentStartDate = getDate(baseDate, utc);
  const momentEndDate = getDate(parameterDate, utc);
  if (timeUnit) {
    return alsoSame
      ? momentStartDate.isSameOrBefore(momentEndDate, timeUnit)
      : momentStartDate.isBefore(momentEndDate, timeUnit);
  }
  return alsoSame
    ? momentStartDate.isSameOrBefore(momentEndDate)
    : momentStartDate.isBefore(momentEndDate);
}

export function isBetween(
  baseDate: string,
  parameterDate1: string,
  parameterDate2: string,
  utc: boolean = true,
  timeUnit?: unitOfTime.StartOf,
  inclusivity?: "()" | "[)" | "(]" | "[]"
) {
  const momentBaseDate = getDate(baseDate, utc);
  const momentStartDate = getDate(parameterDate1, utc);
  const momentEndDate = getDate(parameterDate2, utc);

  return momentBaseDate.isBetween(
    momentStartDate,
    momentEndDate,
    timeUnit,
    inclusivity
  );
}

export function isAfter(
  baseDate: string,
  parameterDate: string,
  alsoSame: boolean = false,
  utc: boolean = true,
  timeUnit?: unitOfTime.StartOf
): boolean {
  const momentStartDate = getDate(baseDate, utc);
  const momentEndDate = getDate(parameterDate, utc);
  if (timeUnit) {
    return alsoSame
      ? momentStartDate.isSameOrAfter(momentEndDate, timeUnit)
      : momentStartDate.isAfter(momentEndDate, timeUnit);
  }
  return alsoSame
    ? momentStartDate.isSameOrAfter(momentEndDate)
    : momentStartDate.isAfter(momentEndDate);
}

export function toFixedTenMinutes(dateTime: string, utc: boolean = true) {
  const minutes = getUnits(dateTime, "minutes", utc);
  const mod10 = minutes % 10;

  return add(dateTime, mod10 <= 5 ? -mod10 : 10 - mod10, "minutes", utc);
}

export function nextMonth(currentMonth: number, currentYear: number) {
  const nextMonthDate = getDate(`${currentMonth}/01/${currentYear}`, true, true)
    .add(1, TIME_UNITS.months)
    .clone();
  const year = nextMonthDate.format(DATE_FORMATS.YEAR);
  const month = nextMonthDate.format(DATE_FORMATS.MONTH_NUMBER);
  return {
    month: parseInt(month, RADIX),
    year: parseInt(year, RADIX)
  };
}

export function nextYear(currentYearMoment: string | any) {
  return getDate(currentYearMoment, true, true)
    .add(1, TIME_UNITS.years)
    .clone();
}

export function previousYear(currentYearMoment: string | any) {
  return getDate(currentYearMoment, true, true)
    .add(-1, TIME_UNITS.years)
    .clone();
}

export function isNextFutureYear(year: string | any) {
  const currentYear = getDate(undefined, true, true)
    .clone()
    .format(DATE_FORMATS.YEAR);

  year = typeof year === "string" ? getDate(`01/01/${year}`) : year;

  return nextYear(year).diff(currentYear, TIME_UNITS.years) > 0;
}

export function formatDateToHrMinuteAmPm(date: Date) {
  let hour: any = date.getHours();
  let minute: any = date.getMinutes();

  const amPM = hour > 11 ? "pm" : "am";

  if (hour > 12) {
    hour -= 12;
  } else if (hour == 0) {
    hour = "12";
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  return hour + ":" + minute + amPM;
}
