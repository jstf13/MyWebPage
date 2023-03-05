import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  darkMode = true;
  constructor() { }
  
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }
}
