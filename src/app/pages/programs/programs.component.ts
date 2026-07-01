import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal.directive';

interface Program {
  title: string;
  ageGroup: string;
  level: string;
  schedule: string;
  description: string;
  features: string[];
  image: string;
}

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss',
})
export class ProgramsComponent {
  programs: Program[] = [
    {
      title: 'Junior Foundation Program',
      ageGroup: 'Ages 6 - 10',
      level: 'Beginner',
      schedule: 'Tue, Thu, Sat — 4:00 PM to 5:30 PM',
      description:
        'A fun, game-based introduction to cricket focused on movement, hand-eye coordination, and the basics of batting, bowling and fielding.',
      features: [
        'Low player-to-coach ratio',
        'Soft-ball and modified-equipment drills',
        'Focus on grip, stance and throwing basics',
        'Monthly fun-match days',
      ],
      image: '/Junior Foundation Program.png',
    },
    {
      title: 'Youth Development Program',
      ageGroup: 'Ages 11 - 14',
      level: 'Intermediate',
      schedule: 'Mon, Wed, Fri — 5:00 PM to 7:00 PM',
      description:
        'Builds on foundation skills with structured batting and bowling technique work, introductory fitness training and weekend match practice.',
      features: [
        'Technical correction with video review',
        'Introductory strength & mobility sessions',
        'Weekend net matches',
        'Selection trials for district-level teams',
      ],
      image: '/Youth Development Program.png',
    },
    {
      title: 'Elite Performance Squad',
      ageGroup: 'Ages 15 - 19',
      level: 'Advanced',
      schedule: 'Daily — 6:00 AM to 8:30 AM',
      description:
        'High-intensity training for players targeting district, state and academy-level trials, with personalised performance plans.',
      features: [
        'Individual performance plans & goal tracking',
        'Bowling machine and high-speed video analysis',
        'Strength & conditioning with sports physiotherapist',
        'Priority selection for tours and tournaments',
      ],
      image: '/Elite Performance Squad.png',
    },
    {
      title: 'Fast Bowling Clinic',
      ageGroup: 'Ages 12+',
      level: 'All Levels',
      schedule: 'Saturdays — 7:00 AM to 9:00 AM',
      description:
        'A specialist clinic focused on run-up rhythm, loading mechanics, release point and pace progression, with injury-prevention screening.',
      features: [
        'Speed-gun tracked progression',
        'Biomechanics screening every 8 weeks',
        'Variation bowling (seam, swing, cutters)',
        'Strength program for fast bowlers',
      ],
      image: '/Fast Bowling Clinic.png',
    },
    {
      title: 'Batting Masterclass',
      ageGroup: 'Ages 12+',
      level: 'Intermediate to Advanced',
      schedule: 'Sundays — 7:00 AM to 9:30 AM',
      description:
        'Deep-dive sessions on shot selection, footwork against pace and spin, and building an innings under match-like pressure scenarios.',
      features: [
        'Pressure-based scoring drills',
        'Footwork vs spin and pace specialists',
        'One-on-one video breakdown',
        'Mental skills & shot-selection coaching',
      ],
      image: '/Batting Masterclass.png',
    },
    {
      title: 'Wicketkeeping Specialist Camp',
      ageGroup: 'Ages 10+',
      level: 'All Levels',
      schedule: 'Saturdays — 9:30 AM to 11:00 AM',
      description:
        'Dedicated glovework, footwork and reflex training for wicketkeepers, including standing up to spin and keeping to pace.',
      features: [
        'Reflex and reaction-ball drills',
        'Standing-up-to-spin technique',
        'Fitness for wicketkeepers',
        'Match-simulation keeping drills',
      ],
      image: '/Wicketkeeping Specialist Camp.png',
    },
  ];
}
