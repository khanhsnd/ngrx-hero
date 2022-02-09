import {Post} from  '../../models/post';
export  interface  PostsState{
  posts:Post[];
}
export const initialState:PostsState = {
  posts:[
    {id: '1', title:'today, im quit', desc :' im quit my job on vts'},
    {id: '2', title:'tmr, im quit', desc :' im quit my job on vts'}
  ]
}

