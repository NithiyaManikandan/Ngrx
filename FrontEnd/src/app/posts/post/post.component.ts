import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/app.state";
import { Post } from "src/app/models/post.model";
import {
  deleteStart,
  loadPost,
  postStart,
  updateStart,
} from "../state/post.action";
import { getPostById, getPosts } from "../state/post.selector";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
})
export class PostComponent implements OnInit {
  posts!:Observable<Post[]>;
  loginForm!: FormGroup;
  id: any;
  updatebutton = false;
  constructor(private store: Store<AppState>) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]{5}"),
      ]),
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadPost());
    this.posts = this.store.select(getPosts)

    
    this.store.select(getPostById).subscribe((post) => {
      if(post){
        this.id = post._id
        this.loginForm.patchValue({
          email: post?.email,
          password: post?.password,
        });
        this.updatebutton = true;
      }
    });
    
  }

  submit() {
    if (this.id) {
      this.store.dispatch(updateStart({post :this.loginForm.value , id : this.id}));
    } else {
      this.store.dispatch(postStart(this.loginForm.value));
    }
  }

  onDelete(id: any) {
    this.store.dispatch(deleteStart({ userId: id }));
    this.store.dispatch(loadPost());
  }

  submitForm() {
    this.store.dispatch(postStart(this.loginForm.value));
    this.store.dispatch(loadPost());
  }
}
