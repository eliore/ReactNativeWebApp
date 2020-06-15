export type TLoginStatuses = "idle" | "pending" | "confirm";

export type TFetchStates = "pending" | "done" | "error" | null;

export type TOptionStates = "regular" | "selected" | "disabled";

export type TOptionStateKeys = "REGULAR" | "SELECTED" | "DISABLED";

export type TAuthType = "token" | "jwt" | undefined;

export type TLabelOption =
  | {
    label: string;
    value: string | number;
  }
  | any;
