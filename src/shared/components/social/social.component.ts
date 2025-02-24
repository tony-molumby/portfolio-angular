import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import {
  faCodepen,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social',
  imports: [FontAwesomeModule],
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss',
})
export class SocialComponent {
  faFilePdf = faFilePdf;
  faCodepen = faCodepen;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  socialItems = [
    {
      icon: faFilePdf,
      url: 'https://drive.google.com/file/d/1HVP8tb0rwh14fYTcvjmrfcRu_iIsxT0_/view?usp=drive_link',
      text: 'CV',
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/tony-molumby/',
      text: 'LINKEDIN',
    },
    {
      icon: faGithub,
      url: 'https://github.com/tony-molumby',
      text: 'GITHUB',
    },
    {
      icon: faCodepen,
      url: 'https://codepen.io/InfiniteSet/#',
      text: 'CODEPEN',
    },
  ];
}
