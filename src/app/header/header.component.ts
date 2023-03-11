import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { DarkModeService } from '../services/dark-mode.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../styles.css']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  menuActive: boolean = false;
  currentLanguage: string = 'en';

  constructor(
    private scrollService: ScrollService,
    public darkModeService: DarkModeService
  ) {}

  ngOnInit(): void {}

  @Output() scrollTo: EventEmitter<string> = new EventEmitter();

  scrollToTarget(id: string) {
    const target = document.querySelector(id);
    this.scrollService.scrollToTarget(target as HTMLElement, 1000);
  }

  toggleMenu() {
    const menuContainer = document.getElementById('menu-container');
    const menuItemsList = document.getElementById('menu-items-list');
    if (menuContainer == null) return;
    if (menuItemsList == null) return;

    if (menuItemsList.classList.contains('active') && menuContainer.classList.contains('active')) {
      menuItemsList.classList.remove('active');
      menuContainer.classList.remove('active');
    } else {
      menuItemsList.classList.add('active');
      menuContainer.classList.add('active');
    }

    this.menuActive = !this.menuActive;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const menuItemsList = document.getElementById('menu-items-list');
    const toggleButton = document.querySelector('.menu-toggle');

    // Check if the click target is the menu or toggle button
    if (
      menuItemsList?.contains(target) ||
      toggleButton?.contains(target)
    ) {
      return;
    }

    // Close the menu if it's open
    if (menuItemsList?.classList.contains('active')) {
      this.toggleMenu();
    }
  }

  changeSpanBackground() {
    const spans = document.querySelectorAll('span');
    for (let i = 0; i < spans.length; i++) {
      spans[i].style.backgroundColor = this.darkModeService.darkMode ? '#222' : '#fff';
    }
  }

  @Output() languageChanged = new EventEmitter<string>();
  changeLanguage(lang: string) {
    this.languageChanged.emit(lang);
    this.currentLanguage = lang;
  }
  
}
