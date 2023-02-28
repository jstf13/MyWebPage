import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.css']
})
export class GetInTouchComponent implements OnInit {

  constructor() { }

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
