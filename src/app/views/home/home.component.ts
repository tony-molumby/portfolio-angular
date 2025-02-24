import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SocialComponent } from 'shared/components/social/social.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [MatIconModule, SocialComponent],
})
export class HomeComponent {
  class = input();
}
