import { GestureResponderEvent } from "react-native";
import { TOptionStates } from "../types";

export interface IOnPressTouchable<T> {
  pressEvent?: GestureResponderEvent;
  bindParameter?: T;
}

export interface ISortOption {
  id: string;
  text: { value: string; styleByState: Record<TOptionStates, any> };
  icon: { sourceByState: Record<TOptionStates, any>; style: any };
  state: TOptionStates;
  selectedIcon: any;
  fields: string[];
  defaultDirection: string[];
  onPress?: any;
}
