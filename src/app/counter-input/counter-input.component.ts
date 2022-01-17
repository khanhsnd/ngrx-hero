import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {incrementCustom} from "../state/counter.actions";

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {
  value: number;

  constructor(
    private _store: Store<{ counter: CounterState }>
  ) {
  }

  ngOnInit(): void {
  }

  onAdd() {
    this._store.dispatch(incrementCustom({value: this.value}))
  }
}
