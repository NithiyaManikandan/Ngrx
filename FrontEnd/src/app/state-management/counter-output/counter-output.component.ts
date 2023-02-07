import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Counter } from 'src/app/models/counter.model';
import { getCounter } from '../state/counter.selecor';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  // @Input()
  // counter!: number;

  counter:any = [];
  counter$ !: any;
  counterSubscription!: Subscription;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
   this.store.select("counter").subscribe((res) => {
      this.counter$ = res.counter;
    });
    // this.counter$ = this.store.select('counter')
    // console.log(this.counter$);

  }
  ngOnDestroy(): void {
    if(this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
  }
}
