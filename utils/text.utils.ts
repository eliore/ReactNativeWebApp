import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import lowerCase from "lodash/lowerCase";
import upperCase from "lodash/upperCase";

import {
  FIRST_NON_NUMBER,
  FIRST_NUMBER_IN_STRING,
  NON_LETTER_OR_NUMBERS,
  START_WITH_NUMBERS
} from "../constants/text.constants";

export function upper(string: string): string {
  return upperCase(string);
}

export function lower(string: string): string {
  return lowerCase(string);
}

export function cutLongText(string: string, maxCount: number): string {
  return string.length > maxCount
    ? `${string.substr(0, maxCount - 1)}...`
    : string;
}

export function textNumberOrABC(text: string) {
  const numericPart = get(text.match(START_WITH_NUMBERS), 0);

  // string does not start with number
  if (isEmpty(numericPart)) {
    const charPart = get(text.match(FIRST_NON_NUMBER), 0, "");

    return charPart.toLowerCase().replace(NON_LETTER_OR_NUMBERS, "");
  }

  return Number(numericPart);
}

export function containChar(char: string, string: string) {
  for (const current of string) {
    if (current === char) {
      return true;
    }
  }

  return false;
}

export function textNumericPart(text: string) {
  // start of name if number
  const numericPart = get(text.match(START_WITH_NUMBERS), 0);

  // string starts with a number, no need for sub sort
  if (!isEmpty(numericPart)) {
    return null;
  }

  const firstNumber = get(text.match(FIRST_NUMBER_IN_STRING), 0);

  // if no numbers in string, nothing to sub sort by
  if (isEmpty(firstNumber)) {
    return null;
  }

  return Number(firstNumber);
}

export const fixedNumber = (number: number, fixedNumberParam?: number) => {
  if (number % 1 === 0) return number;
  if (fixedNumberParam) return number.toFixed(fixedNumberParam);

  const numbersAfterDot = number.toString().split(".")[1];
  return numbersAfterDot.length === 1 ? number.toFixed(1) : number.toFixed(2);
};

export const charRepeater = (char: string, amount: number) => {
  let string = "";

  for (let i = 0; i < amount; i++) {
    string += char;
  }

  return string;
};
