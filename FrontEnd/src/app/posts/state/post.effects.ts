import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import {
  catchError,
  map,
  of,
  mergeMap,
  switchMap,
  concatMap,
  exhaustMap,
} from "rxjs";
import { PostServiceService } from "../service/post-service.service";
import {
  deleteSuccess,
  loadPost,
  loadPostSuccess,
  deleteStart,
  updateStart,
  updateSuccess,
  postStart,
  postSuccess,
  postfail,
  loginStart,
  loginSuccess,
  loginfail,
} from "./post.action";

@Injectable()
export class Effect {
  constructor(private action$: Actions, private service: PostServiceService) {}

  getAllUser$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadPost),
      mergeMap((action) => {
        return this.service.getAllUser().pipe(
          map((posts: any) => {
            return loadPostSuccess({ posts : posts });
          }),
          catchError(() => of({ type: "error" }))
        );
      })
    );
  });

  delete$ = createEffect(() => {
    return this.action$.pipe(
      ofType(deleteStart),
      switchMap((action) => {
        return this.service.deleteUserData(action.userId).pipe(
          map((data) => {
            return deleteSuccess();
          })
        );
      })
    );
  });

  update$ = createEffect(() => {
    return this.action$.pipe(
      ofType(updateStart),
      switchMap((action) => {
        return this.service.updateUserData(action.post, action.id).pipe(
          map((posts) => {
            return updateSuccess();
          })
        );
      })
    );
  });

  post$ = createEffect(() => {
    return this.action$.pipe(
      ofType(postStart),
      concatMap((action) => {
        return this.service.postData(action).pipe(
          map((data) => {
            return postSuccess();
          }),
          catchError(() => of(postfail()))
        );
      })
    );
  });

  login$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.service.login(action).pipe(
          map((data) => {
            return loginSuccess();
          }),
          catchError(() => of(loginfail()))
        );
      })
    );
  });
}
