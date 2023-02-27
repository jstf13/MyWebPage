import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LateralBarsComponent } from './lateral-bars/lateral-bars.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WhereIVeWorkedComponent } from './where-ive-worked/where-ive-worked.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LateralBarsComponent,
    IntroductionComponent,
    AboutMeComponent,
    WhereIVeWorkedComponent,
    ProjectsComponent,
    GetInTouchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
