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
      name: 'Vikram Rathod',
      role: 'Head Coach & Academy Director',
      bio: 'Former Ranji Trophy all-rounder with 18 years of coaching experience across age groups.',
      specialties: ['Batting Technique', 'Match Strategy', 'Talent Identification'],
      image: 'https://picsum.photos/seed/yl-coach-vikram/360/420',
      experience: '18 yrs',
    },
    {
      name: 'Imran Sheikh',
      role: 'Fast Bowling Coach',
      bio: 'BCCI Level 3 certified fast-bowling coach specialising in run-up mechanics and pace development.',
      specialties: ['Fast Bowling', 'Biomechanics', 'Injury Prevention'],
      image: 'https://picsum.photos/seed/yl-coach-imran/360/420',
      experience: '12 yrs',
    },
    {
      name: 'Priya Nair',
      role: 'Spin Bowling & Junior Programs',
      bio: 'Specialist in finger and wrist spin, leading our U-10 and U-14 foundation batches.',
      specialties: ['Spin Bowling', 'Junior Development', 'Fielding Drills'],
      image: 'https://picsum.photos/seed/yl-coach-priya/360/420',
      experience: '9 yrs',
    },
    {
      name: 'Arjun Kapoor',
      role: 'Wicketkeeping & Fielding Coach',
      bio: 'Former state wicketkeeper focused on glovework, footwork and ground fielding intensity.',
      specialties: ['Wicketkeeping', 'Fielding', 'Agility Training'],
      image: 'https://picsum.photos/seed/yl-coach-arjun/360/420',
      experience: '10 yrs',
    },
    {
      name: 'Meera Joshi',
      role: 'Strength & Conditioning Coach',
      bio: 'Certified sports physiotherapist designing age-appropriate strength and mobility programs.',
      specialties: ['Strength Training', 'Mobility', 'Injury Rehab'],
      image: 'https://picsum.photos/seed/yl-coach-meera/360/420',
      experience: '8 yrs',
    },
    {
      name: 'Sandeep Pillai',
      role: 'Elite Squad & Match Analysis',
      bio: 'Leads the Elite Performance Squad with video-based match analysis and opposition scouting.',
      specialties: ['Video Analysis', 'Elite Coaching', 'Match Planning'],
      image: 'https://picsum.photos/seed/yl-coach-sandeep/360/420',
      experience: '14 yrs',
    },
  ];
}
