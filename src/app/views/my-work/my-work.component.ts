import { Component } from '@angular/core';
interface MyWorkItem {
  title: string;
  url: string;
  img: string;
  description: string;
  techStack: string[];
}
@Component({
  selector: 'app-my-work',
  imports: [],
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent {
  myWorkItems: MyWorkItem[] = [
    {
      title: 'TomorrowHealth',
      url: 'https://home.tomorrowhealth.com/providers',
      img: 'assets/tomorrowHealth.png',
      description: 'Medical Equipment Full-Stack Application',
      techStack: ['React', 'Node.js', 'Python', 'PostgreSQL'],
    },
  ];
}
