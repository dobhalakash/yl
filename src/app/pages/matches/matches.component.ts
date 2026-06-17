import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal.directive';

interface FixtureItem {
  date: string;
  competition: string;
  opponent: string;
  venue: string;
  status: 'Upcoming' | 'Result';
  result?: string;
}

interface TourItem {
  title: string;
  destination: string;
  dates: string;
  description: string;
  image: string;
  highlights: string[];
}

@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss',
})
export class MatchesComponent {
  fixtures: FixtureItem[] = [
    {
      date: '21 Jun 2026',
      competition: 'YL Inter-Academy Cup',
      opponent: 'vs Phoenix Cricket Club',
      venue: 'YL Home Ground, Mumbai',
      status: 'Upcoming',
    },
    {
      date: '28 Jun 2026',
      competition: 'District U-16 League',
      opponent: 'vs Riverside Sports Academy',
      venue: 'Riverside Ground, Thane',
      status: 'Upcoming',
    },
    {
      date: '05 Jul 2026',
      competition: 'Friendly Match',
      opponent: 'vs Coastal Cricket Academy',
      venue: 'YL Home Ground, Mumbai',
      status: 'Upcoming',
    },
    {
      date: '07 Jun 2026',
      competition: 'District Summer Trophy',
      opponent: 'vs Eastside Cricket Club',
      venue: 'District Stadium, Mumbai',
      status: 'Result',
      result: 'Won by 34 runs',
    },
    {
      date: '31 May 2026',
      competition: 'District Summer Trophy',
      opponent: 'vs Victory Cricket Academy',
      venue: 'YL Home Ground, Mumbai',
      status: 'Result',
      result: 'Won by 6 wickets',
    },
    {
      date: '24 May 2026',
      competition: 'YL Inter-Academy Cup',
      opponent: 'vs Northside Sports Club',
      venue: 'Northside Ground, Mumbai',
      status: 'Result',
      result: 'Lost by 12 runs',
    },
  ];

  tours: TourItem[] = [
    {
      title: 'Winter Tour 2026',
      destination: 'Ahmedabad, Gujarat',
      dates: '15 - 21 Dec 2026',
      description:
        'A week-long tour featuring five matches against academies in Ahmedabad, plus a visit to a first-class stadium for a behind-the-scenes session.',
      image: 'https://picsum.photos/seed/yl-tour-ahmedabad/600/400',
      highlights: ['5 competitive matches', 'Stadium tour & nets session', 'Team bonding activities', 'Open to U-14, U-16 & U-19'],
    },
    {
      title: 'Coastal Cup Tour',
      destination: 'Goa',
      dates: '10 - 14 Oct 2026',
      description:
        'A short tour combining three matches against coastal academies with recovery sessions on the beach — fitness and fun combined.',
      image: 'https://picsum.photos/seed/yl-tour-goa/600/400',
      highlights: ['3 matches in 4 days', 'Beach recovery sessions', 'Open to U-16 & Elite Squad', 'Includes team kit upgrade'],
    },
    {
      title: 'Summer Camp & Tour',
      destination: 'Pune, Maharashtra',
      dates: '02 - 06 May 2027',
      description:
        'Our flagship summer program: four days of intensive training camps in Pune followed by two exhibition matches against local academies.',
      image: 'https://picsum.photos/seed/yl-tour-pune/600/400',
      highlights: ['Intensive training camp', '2 exhibition matches', 'Guest sessions with first-class players', 'Open to all age groups'],
    },
  ];
}
