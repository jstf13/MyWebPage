import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LateralBarsComponent } from './lateral-bars/lateral-bars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LateralBarsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
