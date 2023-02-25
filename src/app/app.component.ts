import { Component } from '@angular/core';
import {NgsRevealConfig} from 'ngx-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgsRevealConfig]
})
export class AppComponent {
  title = 'MyWebPage';

  constructor(config: NgsRevealConfig) {
    // customize default values of ngx-scrollreveal directives used by this component tree
    config.duration = 15000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1.000)';
    config.reset = true;
    config.mobile = true;
    config.origin = 'bottom';
 
    //other options here
  }
}
