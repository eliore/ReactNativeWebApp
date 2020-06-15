"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateToHrMinuteAmPm = exports.isNextFutureYear = exports.previousYear = exports.nextYear = exports.nextMonth = exports.toFixedTenMinutes = exports.isAfter = exports.isBetween = exports.isBefore = exports.isSame = exports.diff = exports.add = exports.endOf = exports.startOf = exports.getUnits = exports.convertHoursTimeToHoursNumber = exports.convertHoursNumberToHoursTime = exports.getMonthFormat = exports.getCurrentMonth = exports.getDayOfWeekFormatOneLetter = exports.getCurrentWeekDay = exports.getPreviousWeek = exports.getNextWeek = exports.getNextWeekGeneral = exports.getWeekArray = exports.getCurrentWeek = exports.getDayNumber = exports.isSameDay = exports.isTodayDate = exports.isFutureDate = exports.isPastDate = exports.format = exports.getDateFormatedFromTime = exports.getDateFromTime = exports.getTimezoneDate = exports.getDate = exports.TIME_UNITS = exports.DATE_FORMATS = exports.MINUTES_IN_HOUR = exports.SECONDS_IN_MINUTE = exports.HOURS_IN_DAY = exports.RADIX = void 0;
const moment_1 = __importDefault(require("moment"));
exports.RADIX = 10;
exports.HOURS_IN_DAY = 24;
exports.SECONDS_IN_MINUTE = 60;
exports.MINUTES_IN_HOUR = 60;
exports.DATE_FORMATS = {
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
exports.TIME_UNITS = {
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
function getDate(date, utc = true, defaultFormat) {
    const args = [date ? date : new Date()];
    if (defaultFormat) {
        args.push(exports.DATE_FORMATS.FULL_DATE_TIME);
    }
    if (utc) {
        return moment_1.default.utc(...args);
    }
    return moment_1.default(...args);
}
exports.getDate = getDate;
function getTimezoneDate(offset) {
    return moment_1.default.utc().add(offset, exports.TIME_UNITS.milliseconds);
}
exports.getTimezoneDate = getTimezoneDate;
function getDateFromTime(time) {
    return moment_1.default(time, exports.DATE_FORMATS.TIME).toDate();
}
exports.getDateFromTime = getDateFromTime;
function getDateFormatedFromTime(time, date, dateFormat = exports.DATE_FORMATS.FULL_DATE_TIME) {
    if (date) {
        const dateTime = `${date} ${time}`;
        return moment_1.default(dateTime).format(dateFormat);
    }
    return moment_1.default(time, exports.DATE_FORMATS.TIME).format(dateFormat);
}
exports.getDateFormatedFromTime = getDateFormatedFromTime;
function format(date, dateFormat, utc = true) {
    const dateObj = getDate(date, utc);
    return dateObj.format(dateFormat);
}
exports.format = format;
function isPastDate(date, timeUnit, todayDate, isUtc = false) {
    const today = (todayDate || getDate(undefined, isUtc)).format(exports.DATE_FORMATS.FULL_DATE_TIME);
    return isBefore(date, today, false, todayDate ? true : isUtc, timeUnit || exports.TIME_UNITS.day);
}
exports.isPastDate = isPastDate;
function isFutureDate(date, todayDate) {
    const today = (todayDate || getDate(undefined, false)).format(exports.DATE_FORMATS.FULL_DATE_TIME);
    return isAfter(date, today, false, !!todayDate, exports.TIME_UNITS.day);
}
exports.isFutureDate = isFutureDate;
function isTodayDate(date, todayDate) {
    const now = todayDate || getDate(undefined, false, true);
    return getDate(date, !!todayDate).isSame(now, exports.TIME_UNITS.day);
}
exports.isTodayDate = isTodayDate;
function isSameDay(date1, date2, utc = false) {
    return isSame(date1, date2, utc, exports.TIME_UNITS.day);
}
exports.isSameDay = isSameDay;
function getDayNumber(date) {
    const dayNumber = format(date, exports.DATE_FORMATS.DAY_OF_WEEK_NUMBER, false);
    return parseInt(dayNumber, exports.RADIX);
}
exports.getDayNumber = getDayNumber;
function getCurrentWeek(timezoneOffSet, todayDate, dateFormat) {
    const start = timezoneOffSet
        ? getTimezoneDate(timezoneOffSet)
        : getDate(todayDate);
    const startDate = start
        .isoWeekday(1)
        .format(dateFormat || exports.DATE_FORMATS.DEFAULT_DATE_TIME);
    const endDate = start
        .isoWeekday(7)
        .format(dateFormat || exports.DATE_FORMATS.DEFAULT_DATE_TIME);
    return {
        startDate,
        endDate
    };
}
exports.getCurrentWeek = getCurrentWeek;
function getWeekArray(date, dateFormat) {
    const weekArray = [];
    for (let i = 1; i <= 7; i++) {
        const isoWeekday = getDate(date, false)
            .isoWeekday(i)
            .format(dateFormat || exports.DATE_FORMATS.DEFAULT_DATE_TIME);
        weekArray.push(isoWeekday);
    }
    return weekArray;
}
exports.getWeekArray = getWeekArray;
function getNextWeekGeneral(currentWeekStartDate, weekJump) {
    const startDateMoment = weekJump
        ? getDate(add(currentWeekStartDate, weekJump, exports.TIME_UNITS.weeks))
        : getDate(currentWeekStartDate);
    return {
        startDate: startDateMoment
            .isoWeekday(1)
            .format(exports.DATE_FORMATS.DEFAULT_DATE_TIME),
        endDate: startDateMoment
            .isoWeekday(7)
            .format(exports.DATE_FORMATS.DEFAULT_DATE_TIME)
    };
}
exports.getNextWeekGeneral = getNextWeekGeneral;
function getNextWeek(currentWeekStartDate, weekJump) {
    const weekDayJumpStart = weekJump ? 7 * weekJump + 1 : 8;
    const weekDayJumpEnd = weekJump ? 7 * weekJump + 6 : 14;
    return {
        startDate: getDate(currentWeekStartDate, false)
            .isoWeekday(weekDayJumpStart)
            .format(exports.DATE_FORMATS.DEFAULT_DATE_TIME),
        endDate: getDate(currentWeekStartDate, false)
            .isoWeekday(weekDayJumpEnd)
            .format(exports.DATE_FORMATS.DEFAULT_DATE_TIME)
    };
}
exports.getNextWeek = getNextWeek;
function getPreviousWeek(currentWeekStartDate, weekJump) {
    const weekDayJumpStart = weekJump ? 1 - weekJump * 7 : -6;
    const weekDayJumpEnd = weekJump ? 1 - weekJump * 7 + 6 : 0;
    return {
        startDate: getDate(currentWeekStartDate, false)
            .isoWeekday(weekDayJumpStart)
            .format(exports.DATE_FORMATS.DEFAULT_DATE_TIME),
        endDate: getDate(currentWeekStartDate, false)
            .isoWeekday(weekDayJumpEnd)
            .format(exports.DATE_FORMATS.DEFAULT_DATE_TIME)
    };
}
exports.getPreviousWeek = getPreviousWeek;
function getCurrentWeekDay(timezoneOffSet) {
    return (timezoneOffSet
        ? getTimezoneDate(timezoneOffSet)
        : getDate(undefined, false, true)).isoWeekday();
}
exports.getCurrentWeekDay = getCurrentWeekDay;
function getDayOfWeekFormatOneLetter(dayOfWeek, timezoneOffSet) {
    return dayOfWeek >= 0 && dayOfWeek <= 6
        ? (timezoneOffSet
            ? getTimezoneDate(timezoneOffSet)
            : getDate(undefined, false, true))
            .isoWeekday(dayOfWeek + 1)
            .format(exports.DATE_FORMATS.DAY_OF_WEEK_FULL)[0]
        : null;
}
exports.getDayOfWeekFormatOneLetter = getDayOfWeekFormatOneLetter;
function getCurrentMonth() {
    return getDate(undefined, true, true).format(exports.DATE_FORMATS.MONTH_NUMBER);
}
exports.getCurrentMonth = getCurrentMonth;
function getMonthFormat(monthNumber, dateFormat) {
    return getDate(undefined, true, true)
        .month(monthNumber - 1)
        .format(dateFormat);
}
exports.getMonthFormat = getMonthFormat;
function convertHoursNumberToHoursTime(hours, toFixed = false) {
    let numOfHours = parseInt(hours.toString(), exports.RADIX);
    let numOfMinutes = parseInt(((hours - numOfHours) * exports.MINUTES_IN_HOUR).toFixed(), exports.RADIX);
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
            : parseInt(numOfMinutes.toString(), exports.RADIX).toString()).padStart(2, "0")}`;
}
exports.convertHoursNumberToHoursTime = convertHoursNumberToHoursTime;
function convertHoursTimeToHoursNumber(time) {
    const [hours, min] = time.split(":");
    const oneMin = 1 / 60;
    return parseInt(hours, exports.RADIX) + parseInt(min, exports.RADIX) * oneMin;
}
exports.convertHoursTimeToHoursNumber = convertHoursTimeToHoursNumber;
function getUnits(dateTime, unit, utc = true) {
    return getDate(dateTime, utc)[unit]();
}
exports.getUnits = getUnits;
function startOf(dateTime, unit, utc = true) {
    return getDate(dateTime, utc)
        .startOf(unit)
        .format("YYYY-MM-DD HH:mm:ss");
}
exports.startOf = startOf;
function endOf(dateTime, unit, utc = true) {
    return getDate(dateTime, utc)
        .endOf(unit)
        .format("YYYY-MM-DD HH:mm:ss");
}
exports.endOf = endOf;
function add(dateTime, amount, unit, utc = true) {
    return getDate(dateTime, utc)
        .add(amount, unit)
        .format("YYYY-MM-DD HH:mm:ss");
}
exports.add = add;
function diff(startDate, endDate, unit, utc = true, precise) {
    const momentStartDate = getDate(startDate, utc);
    const momentEndDate = getDate(endDate, utc);
    return momentEndDate.diff(momentStartDate, unit, precise);
}
exports.diff = diff;
function isSame(date1, date2, utc = true, timeUnit) {
    const momentDate1 = getDate(date1, utc);
    const momentDate2 = getDate(date2, utc);
    return momentDate1.isSame(momentDate2, timeUnit);
}
exports.isSame = isSame;
function isBefore(baseDate, parameterDate, alsoSame = false, utc = true, timeUnit) {
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
exports.isBefore = isBefore;
function isBetween(baseDate, parameterDate1, parameterDate2, utc = true, timeUnit, inclusivity) {
    const momentBaseDate = getDate(baseDate, utc);
    const momentStartDate = getDate(parameterDate1, utc);
    const momentEndDate = getDate(parameterDate2, utc);
    return momentBaseDate.isBetween(momentStartDate, momentEndDate, timeUnit, inclusivity);
}
exports.isBetween = isBetween;
function isAfter(baseDate, parameterDate, alsoSame = false, utc = true, timeUnit) {
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
exports.isAfter = isAfter;
function toFixedTenMinutes(dateTime, utc = true) {
    const minutes = getUnits(dateTime, "minutes", utc);
    const mod10 = minutes % 10;
    return add(dateTime, mod10 <= 5 ? -mod10 : 10 - mod10, "minutes", utc);
}
exports.toFixedTenMinutes = toFixedTenMinutes;
function nextMonth(currentMonth, currentYear) {
    const nextMonthDate = getDate(`${currentMonth}/01/${currentYear}`, true, true)
        .add(1, exports.TIME_UNITS.months)
        .clone();
    const year = nextMonthDate.format(exports.DATE_FORMATS.YEAR);
    const month = nextMonthDate.format(exports.DATE_FORMATS.MONTH_NUMBER);
    return {
        month: parseInt(month, exports.RADIX),
        year: parseInt(year, exports.RADIX)
    };
}
exports.nextMonth = nextMonth;
function nextYear(currentYearMoment) {
    return getDate(currentYearMoment, true, true)
        .add(1, exports.TIME_UNITS.years)
        .clone();
}
exports.nextYear = nextYear;
function previousYear(currentYearMoment) {
    return getDate(currentYearMoment, true, true)
        .add(-1, exports.TIME_UNITS.years)
        .clone();
}
exports.previousYear = previousYear;
function isNextFutureYear(year) {
    const currentYear = getDate(undefined, true, true)
        .clone()
        .format(exports.DATE_FORMATS.YEAR);
    year = typeof year === "string" ? getDate(`01/01/${year}`) : year;
    return nextYear(year).diff(currentYear, exports.TIME_UNITS.years) > 0;
}
exports.isNextFutureYear = isNextFutureYear;
function formatDateToHrMinuteAmPm(date) {
    let hour = date.getHours();
    let minute = date.getMinutes();
    const amPM = hour > 11 ? "pm" : "am";
    if (hour > 12) {
        hour -= 12;
    }
    else if (hour == 0) {
        hour = "12";
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    return hour + ":" + minute + amPM;
}
exports.formatDateToHrMinuteAmPm = formatDateToHrMinuteAmPm;
