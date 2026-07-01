import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal.directive';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface FacilityItem {
  title: string;
  description: string;
  image: string;
}

interface ValueItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  timeline: TimelineItem[] = [
    {
      year: '2011',
      title: 'Academy founded',
      description: 'Started with a single matting pitch and 18 enrolled players from the local neighbourhood.',
    },
    {
      year: '2015',
      title: 'First turf ground',
      description: 'Opened our first full-size turf ground with proper outfield and practice nets.',
    },
    {
      year: '2018',
      title: 'Elite Performance Squad launched',
      description: 'Introduced a high-performance pathway for players targeting district and state selection.',
    },
    {
      year: '2022',
      title: 'Video analysis lab',
      description: 'Added bowling machines, speed guns and video analysis for batting and bowling technique.',
    },
    {
      year: '2026',
      title: '1,200+ players trained',
      description: 'Crossed 1,200 alumni, with several players representing district, state and academy sides.',
    },
  ];

  values: ValueItem[] = [
    {
      title: 'Discipline First',
      description: 'On-time nets, structured warm-ups and a culture of respect for the game, teammates and officials.',
    },
    {
      title: 'Technique Over Shortcuts',
      description: 'We build correct fundamentals early so players can scale up power and pace safely later.',
    },
    {
      title: 'Every Player Matters',
      description: 'Small batch sizes mean every player gets individual feedback in every session.',
    },
    {
      title: 'Match Temperament',
      description: 'Regular fixtures and tours so practice translates into composure under real match pressure.',
    },
  ];

  facilities: FacilityItem[] = [
    {
      title: 'Turf Ground & Outfield',
      description: 'Full-size turf ground with proper boundary markings for match simulation drills.',
      image: '/Turf Ground & Outfield.png',
    },
    {
      title: 'Practice Nets',
      description: '8 dedicated nets — turf, matting and synthetic — for batting, bowling and fielding drills.',
      image: '/Practice Nets.png',
    },
    {
      title: 'Bowling Machine & Analysis Lab',
      description: 'Bowling machines and high-speed cameras for biomechanics and shot analysis.',
      image: '/Bowling Machine & Analysis Lab.png',
    },
    {
      title: 'Fitness & Conditioning Zone',
      description: 'Strength, agility and injury-prevention training tailored to growing athletes.',
      image: '/Fitness & Conditioning Zone.png',
    },
  ];
}
