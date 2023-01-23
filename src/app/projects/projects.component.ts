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
      title: 'Project 1',
      link: 'https://project1.com',
      description: 'Description of project 1',
      languages: ['JavaScript', 'HTML', 'CSS']
    },
    {
      title: 'Project 2',
      link: 'https://project2.com',
      description: 'Description of project 2',
      languages: ['TypeScript', 'React', 'Node.js']
    },
  ];
}
