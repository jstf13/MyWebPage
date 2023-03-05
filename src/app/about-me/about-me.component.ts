import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css', '../../styles.css']
})
export class AboutMeComponent implements OnInit {

  constructor(public darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }

}
