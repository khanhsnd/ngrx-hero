import {CounterState} from './state/counter.state';
import {PostsState} from "./post/state/posts.state";
import {counterReducer} from "./state/counter.reduce";
import {postsReducer} from "./post/state/posts.reducer";

export  interface  AppState{
  counter: CounterState;
  posts: PostsState;
}
export  const  appReducer = {
  counterReducer : counterReducer,
  postsReducer: postsReducer
}
