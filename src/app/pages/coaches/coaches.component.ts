import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal.directive';

interface Coach {
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
  experience: string;
}

@Component({
  selector: 'app-coaches',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './coaches.component.html',
  styleUrl: './coaches.component.scss',
})
export class CoachesComponent {
  coaches: Coach[] = [
    {
      name: 'YOgesh Lingayat',
      role: 'Batting  & Bowling Coach',
      bio: 'All-rounder with 9 years of coaching experience across age groups.',
      specialties: ['Batting Technique', 'Match Strategy', 'Talent Identification'],
      image: '/batting& bolling coach.jpeg',
      experience: '9 yrs',
    },
    {
      name: 'Arjun Patel',
      role: 'Fitness Coach',
      bio: 'BCCI Level 3 certified fast-bowling coach specialising in run-up mechanics and pace development.',
      specialties: ['Fast Bowling', 'Biomechanics', 'Injury Prevention'],
      image: 'Arjun.jpeg',
      experience: '5 yrs',
    },
    

  ];
}
