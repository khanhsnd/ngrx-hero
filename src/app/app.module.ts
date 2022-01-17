import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {CounterButtonsComponent} from './counter-buttons/counter-buttons.component';
import {CounterOutputComponent} from './counter-output/counter-output.component';
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./state/counter.reduce";
import {CounterInputComponent} from './counter-input/counter-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CounterInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, StoreModule.forRoot({
      counter: counterReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
