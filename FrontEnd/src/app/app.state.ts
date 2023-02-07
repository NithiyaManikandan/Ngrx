import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { postReducer } from "./posts/state/post.reducer";
import { PostState } from "./posts/state/post.state";
import { counterReducer } from "./state-management/state/counter.reducer";
import { counterState } from "./state-management/state/counter.state";

export interface AppState {
  counter: counterState;
  posts: PostState;
  router: RouterReducerState;
}
 
export const appReducer = {
  counter: counterReducer,
  posts: postReducer,
  router : routerReducer
};
