import {createReducer} from "@ngrx/store";
import {initialState} from "./posts.state";

const  _postReducer = createReducer(initialState)
export  function postsReducer(state, action){
  return _postReducer
}
