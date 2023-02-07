import { createFeatureSelector, createSelector } from "@ngrx/store";
import { counterState } from "./counter.state";

const getCurrentState = createFeatureSelector<counterState>('counter');

export const getCounter = createSelector(getCurrentState, (state) => {
  return state.counter
});

