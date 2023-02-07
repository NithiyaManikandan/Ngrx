import { Action, createReducer, on } from "@ngrx/store";
import { Counter } from "src/app/models/counter.model";
import {
  addPost,
  increment,
  decrement,
  reset,
  customIncrement,
} from "./counter.actions";
import { intialState } from "./counter.state";

const _counterReducer = createReducer(
  intialState,
  on(increment, (state, action) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state, action) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state, action) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.counter,
    };
  }),
  on(addPost, (state: any, action: any) => {
    return {
      ...state,
      counter: action.counter,
    };
  })
);

export function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action);
}
