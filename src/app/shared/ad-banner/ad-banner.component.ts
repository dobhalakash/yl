import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AdSlide {
  title: string;
  subtitle: string;
  image: string;
  tag: string;
}

@Component({
  selector: 'app-ad-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ad-banner.component.html',
  styleUrl: './ad-banner.component.scss',
})
export class AdBannerComponent {
  ads: AdSlide[] = [
    {
      tag: 'Sponsor',
      title: 'SpeedStar Bats',
      subtitle: '20% off academy kits',
      image: 'https://picsum.photos/seed/yl-ad-bat/240/320',
    },
    {
      tag: 'Offer',
      title: 'Summer Camp 2026',
      subtitle: 'Early-bird seats open',
      image: 'https://picsum.photos/seed/yl-ad-camp/240/320',
    },
    {
      tag: 'Partner',
      title: 'ProGrip Gloves',
      subtitle: 'Official kit partner',
      image: 'https://picsum.photos/seed/yl-ad-gloves/240/320',
    },
    {
      tag: 'Event',
      title: 'Pitch Open Day',
      subtitle: 'Tour the new nets',
      image: 'https://picsum.photos/seed/yl-ad-pitch/240/320',
    },
  ];
}
