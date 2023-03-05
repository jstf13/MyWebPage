import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';

@Component({
  selector: 'app-lateral-bars',
  templateUrl: './lateral-bars.component.html',
  styleUrls: ['./lateral-bars.component.css', '../../styles.css']
})
export class LateralBarsComponent implements OnInit {

  constructor(public darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }

  sendEmail() {
    const email = 'juansebastiantoledofreire@hotmail.com';
    const subject = 'Contact from personal website';
    const body = 'Hi, I would like to contact you. Please, contact me back.';

    const mailtoUri = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUri;
  }
}
