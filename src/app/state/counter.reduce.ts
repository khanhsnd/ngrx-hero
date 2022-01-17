import {initialState} from "./counter.state";
import {createReducer, on} from "@ngrx/store";
import {decrement, increment, incrementCustom, reset} from "./counter.actions";

const _counterReducer = createReducer(initialState, on(increment, state => {
  return {
    ...state,
    counter: state.counter + 1
  };
}), on(decrement, state => {
  return {
    ...state,
    counter: state.counter - 1
  }
}), on(reset, state => {
  return {
    ...state,
    counter: 0
  }
}), on(incrementCustom, (state, action) => {
  return {
    ...state,
    counter: Number(action.value) + Number(state.counter)
  }
}))

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
