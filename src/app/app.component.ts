import { Component } from '@angular/core';
import { DarkModeService } from './services/dark-mode.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css'],
  providers: []
})
export class AppComponent {
  darkMode = false;

  constructor(public darkModeService: DarkModeService,
              private translate: TranslateService,
              private translateService: TranslateService) {
    translate.setDefaultLang('es');
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
