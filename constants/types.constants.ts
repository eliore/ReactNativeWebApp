import {
  TOptionStateKeys,
  TOptionStates
} from "typescript/types";

export const FETCH_STATES: Record<string, string> = {
  PENDING: "pending",
  ERROR: "error",
  DONE: "done"
};

export const OPTION_STATES: Record<TOptionStateKeys, TOptionStates> = {
  REGULAR: "regular",
  SELECTED: "selected",
  DISABLED: "disabled"
};
