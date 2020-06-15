import reduce from "lodash/reduce";
import values from "lodash/values";

export function arrayMax(arr: any[]) {
  return Math.max(...arr);
}

export function arrayMin(arr: any[]) {
  return Math.min(...arr);
}

export function arrayToMap(array: any[], by: string = "id") {
  return reduce(
    array,
    (result: any, value: any) => {
      if (value) {
        result[value[by]] = value;
      }

      return result;
    },
    {}
  );
}

export function mapToArray(map: any) {
  return values(map);
}

export function roundToNearestMultipleOfX(
  val: number,
  x: number,
  direction: "up" | "down"
) {
  const roundingFunc = direction === "up" ? Math.ceil : Math.floor;

  return roundingFunc(val / x) * x;
}

export function roundToXDecimalPlaces(val: number, x: number) {
  return Math.round(val * Math.pow(10, x)) / Math.pow(10, x);
}

export function sortByString(a: string, b: string) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}
