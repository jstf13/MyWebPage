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
 
    //other options here
    //make it dalay 2 second
  }
}
