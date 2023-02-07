import { createFeatureSelector, createSelector } from "@ngrx/store";
import { getCurrentRoute } from "../router/router.selector";
import { PostState } from "./post.state";
import { RouterStateUrl } from "../router/custom.serialized";

const getPostsState = createFeatureSelector<PostState>("posts");

export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts
});

export const getPostById = createSelector(
  getPosts,
  getCurrentRoute,
  (post, route: RouterStateUrl) => {
    return post.find((post) => post._id === route.params['id'])
  }
);
