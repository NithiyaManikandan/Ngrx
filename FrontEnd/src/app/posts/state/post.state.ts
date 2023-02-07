// import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Post } from "src/app/models/post.model";

export interface PostState{
  posts : Post[];
}

export const initialState: PostState = {
  posts:[]
}

// export interface PostState extends EntityState<Post> {
//   posts: Post[];
// }

// export const postAdapter: EntityAdapter<Post> = createEntityAdapter<Post>({
//   // selectId: (brand: Post) => brand,
// });

// export const initialState: PostState = postAdapter.getInitialState({
//   posts : []
// });