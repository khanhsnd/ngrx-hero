import { Component, OnInit } from '@angular/core';
import {AppState} from "../../store/app.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  constructor(
    private  store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }

}
