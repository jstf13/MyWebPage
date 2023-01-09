import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LateralBarsComponent } from './lateral-bars/lateral-bars.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LateralBarsComponent,
    IntroductionComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }