import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ScrollService } from '../services/scroll.service';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../styles.css']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;

constructor(private scrollService: ScrollService,
           public darkModeService: DarkModeService) {}

  ngOnInit(): void {
  }

  @Output() scrollTo: EventEmitter<string> = new EventEmitter();

  scrollToTarget(id: string) {
    const target = document.querySelector(id);
    this.scrollService.scrollToTarget(target as HTMLElement, 1000);
  }

  toggleMenu() {
    let menuItemsList = document.getElementById("menu-items-list");
    if(menuItemsList == null) return;
  
    if(menuItemsList.classList.contains("active"))
      menuItemsList.classList.remove("active");
     else 
      menuItemsList.classList.add("active");
  } 
}