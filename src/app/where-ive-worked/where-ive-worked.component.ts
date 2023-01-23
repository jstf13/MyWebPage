import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-where-ive-worked',
  templateUrl: './where-ive-worked.component.html',
  styleUrls: ['./where-ive-worked.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1100, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate(200, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class WhereIVeWorkedComponent{

  constructor() { }

  selectedButtonId = 0

  onButtonClick(id: number) {
    this.selectedButtonId = id;
  }

  getTranslation(): string {
    return `translateY(calc(${this.selectedButtonId} * 45px))`;
  }
}
