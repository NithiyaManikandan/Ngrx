import { createAction, props } from "@ngrx/store";
import { Counter } from "src/app/models/counter.model";

export const increment = createAction('increment')
export const decrement = createAction('dcrement')
export const reset = createAction('reset')
export const ADD_POST_ACTION = '[post page] add post'
export const UPDATE_DATA =' [post page] update or delete data'


export const updateData = createAction(UPDATE_DATA,props<{counter : number}>())
export const addPost = createAction(ADD_POST_ACTION, props<{counter : number}>())
export const customIncrement = createAction('customIncrement',props<{counter : number}>())
