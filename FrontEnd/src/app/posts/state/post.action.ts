import { Post } from "src/app/models/post.model";
import { createAction, props } from "@ngrx/store";

export const LOAD_POST = "[post page] load posts";
export const LOAD_POST_SUCCESS = "[post page] load page success";

export const delete_start = "[auth page] delete start";
export const delete_success = "[auth page] delete success";

export const update_start = "[auth page] update start";
export const update_success = "[auth page] update success";

export const post_start = "[auth page] post start";
export const post_success = "[auth page] post success";
export const post_fail = "[auth page] post fail";

export const login_start = "[auth page] login start";
export const login_success = "[auth page] login success";
export const login_fail = "[auth page] login fail";

export const loginStart = createAction(login_start, props<{ post: Post }>());
export const loginSuccess = createAction(login_success);
export const loginfail = createAction(login_fail);

export const postStart = createAction(post_start, props<{ post: Post }>());
export const postfail = createAction(post_fail);
export const postSuccess = createAction(post_success);

export const loadPost = createAction(LOAD_POST);
export const loadPostSuccess = createAction(
  LOAD_POST_SUCCESS,
  props<{ posts: Post[] }>()
);

export const deleteStart = createAction(
  delete_start,
  props<{ userId: Post["_id"] }>()
);
export const deleteSuccess = createAction(delete_success);

export const updateStart = createAction(update_start, props<{ post: Post, id : string }>());
export const updateSuccess = createAction(update_success);
