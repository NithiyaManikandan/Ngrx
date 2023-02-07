import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.state";
import { loginStart } from "../state/post.action";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  updateButton = false;
  id: any;
  token: any;
  constructor(private store: Store<AppState>, private route:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]{5}"),
      ]),
    });
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.loginForm.value);
    this.token = this.store.dispatch(loginStart(this.loginForm.value));
    this.route.navigate(['/post'])
  }
}
