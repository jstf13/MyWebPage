import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ScrollService } from '../services/scroll.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
  }

  @Output() scrollTo: EventEmitter<string> = new EventEmitter();

  scrollToTarget(id: string) {
    const target = document.querySelector(id);
    this.scrollService.scrollToTarget(target as HTMLElement, 1000);
  }

}
