import { Component } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css'],
  providers: []
})
export class AppComponent {
  darkMode = false;

  constructor(public darkModeService: DarkModeService) { }
}
