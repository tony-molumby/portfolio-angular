import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
interface MyWorkItem {
  title: string;
  url: string | null;
  img: string;
  description: string;
}
@Component({
  selector: 'app-my-work',
  imports: [CommonModule, FooterComponent],
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
    },
    {
      title: 'FiniteCarbon',
      url: 'https://www.finitecarbon.com/solutions/offset-buyers/',
      img: 'assets/finiteCarbon.png',
      description: 'Three Carbon Offset Full-Stack Applications',
    },
    {
      title: 'Arcwell',
      url: 'https://arcwell.health/',
      img: 'assets/arcwell.png',
      description: 'Open Source Full-Stack Application for Researchers',
    },
    {
      title: 'Comcast',
      url: 'https://www.xfinity.com/multifamily',
      img: 'assets/laptop.svg',
      description:
        'Full-Stack Application for the Multi-Dwellings Unit (MDU) team',
    },
    {
      title: 'RightCare (Now Optum)',
      url: 'https://business.optum.com/en/access/home-and-community/post-acute-care.html',
      img: 'assets/patientList.svg',
      description:
        'Created a Functional Prototype as a Product Owner for the Post-Acute Care team',
    },
    {
      title: 'Rightcare (Now Optum)',
      img: 'assets/patientDashboard.png',
      url: null,
      description:
        'Product Owner Leading Vision of 2 Post-Acute Care Applications',
    },
  ];

  openUrl(url: string | null): void {
    if (url) {
      window.open(url, '_blank')?.focus();
    }
  }
}
