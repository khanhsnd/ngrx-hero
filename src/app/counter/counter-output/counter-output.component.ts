import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from "../../store/app.state";
import {getCounter} from "../state/counter.selector";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent implements OnInit {
  counter: number = 0;
  counter$: Observable<number>;

  constructor(
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.counter$ = this.store.select(getCounter);
  }

}
