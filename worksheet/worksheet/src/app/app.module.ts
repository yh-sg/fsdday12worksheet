import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FriedFishComponent } from './friedFish.component';
import { DisplayComponent } from './components/display.component';

@NgModule({
  declarations: [
    AppComponent,
    FriedFishComponent,
    DisplayComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
