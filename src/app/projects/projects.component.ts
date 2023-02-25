import { Component } from '@angular/core';

interface Card {
  title: string;
  link: string;
  description: string;
  languages: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  cards: Card[] = [
    {
      title: 'Sons of Gods',
      link: 'https://github.com/Misos14/SonsOfGodsWeb',
      description: 'A main page presents a preview of some of the outstanding NFTs, together with information about its creator, the creation date and the sale price.',
      languages: ['TypeScript', 'HTML', 'CSS']
    },
    {
      title: 'Design 1 APP',
      link: 'https://github.com/ORT-DA2/201595-222371-209316',
      description: 'The web application for multiple pharmacies is a platform designed to facilitate the management of various pharmacies in one place.',
      languages: ['C#, ', 'HTML', 'CSS', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Auto Hot key',
      link: 'https://github.com/jstf13/AutoHoyKey',
      description: 'Shortcuts and automatization for boring tasks in WINDOWS',
      languages: ['JavaScript', 'AutoHotKey']
    },
    {
      title: 'Algorithms',
      link: 'https://github.com/jstf13/Algoritmos_2.0',
      description: 'This repository contains a collection of search and optimization algorithms, such as backtracking, greedy, and others, for applications in various fields.',
      languages: ['C++']
    },
  ];
}
