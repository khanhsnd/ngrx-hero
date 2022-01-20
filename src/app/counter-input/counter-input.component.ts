import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {changeChannelName, incrementCustom} from "../state/counter.actions";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.scss']
})
export class CounterInputComponent implements OnInit {
  value: number;
  channelName$ : Observable<CounterState>;
  constructor(
    private _store: Store<{ counter: CounterState }>
  ) {
  }

  ngOnInit(): void {
    this.channelName$ = this._store.select('counter').pipe(tap(rs=>{
      console.log('trigger2')
    }))
  }
  onAdd() {
    this._store.dispatch(incrementCustom({value: this.value}))
  }

  onChannelName() {
    this._store.dispatch(changeChannelName());
  }
}
