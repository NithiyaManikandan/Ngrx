import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/app.state";
import { Counter } from "src/app/models/counter.model";
import { addPost, customIncrement, reset } from "../state/counter.actions";

@Component({
  selector: "app-add-custom-number",
  templateUrl: "./add-custom-number.component.html",
  styleUrls: ["./add-custom-number.component.scss"],
})
export class AddCustomNumberComponent implements OnInit {
  value!: number;
  newValue!: number;
  getData!: number | any;
  getDataPermission = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  onAdd() {
    this.store.dispatch(customIncrement({ counter: this.value }));
  }

  onAddPost() {
    this.getDataPermission = false;
    this.store.dispatch(addPost({ counter: this.newValue }));
  }

  onEditPost() {
    this.getDataPermission = true;
    this.store.select("counter").subscribe((res) => {
      this.newValue = res.counter;
    });
  }
  onDeletePost() {
    // this.getDataPermission = true;
    this.store.dispatch(reset());
  }
}
