import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();

  quickLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/coaches', label: 'Our Coaches' },
    { path: '/programs', label: 'Training Programs' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/matches', label: 'Matches & Tours' },
    { path: '/contact', label: 'Contact' },
  ];

  programLinks = [
    'Junior Development (U-10 / U-14)',
    'Elite Performance Squad',
    'Fast Bowling Clinic',
    'Batting Masterclass',
    'Wicketkeeping Specialist Camp',
    'Summer & Winter Tours',
  ];
}
