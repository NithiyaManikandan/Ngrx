import { createReducer, on } from "@ngrx/store";
import { loadPostSuccess,loginSuccess } from "./post.action";
import { initialState } from "./post.state";

const _postReducer = createReducer(
  initialState,
  on(loadPostSuccess, (state, action) => {
    // return postAdapter.setAll(action.posts,state)
    return {
      ...state,
      posts: action.posts,
    };
  }),
);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
