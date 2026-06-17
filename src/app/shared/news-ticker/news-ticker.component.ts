import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-ticker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-ticker.component.html',
  styleUrl: './news-ticker.component.scss',
})
export class NewsTickerComponent {
  newsItems: string[] = [
    'U-14 squad wins the District Summer Trophy 2026 — congratulations to all players!',
    'New fast-bowling lane with speed-gun analysis now open at the academy nets.',
    'Registrations open for the Winter Tour to Ahmedabad — limited seats available.',
    'Coach Imran Sheikh certified as a Level 3 BCCI fast-bowling coach.',
    'Academy XI advances to the semi-finals of the YL Inter-Academy Cup.',
    'New batch alert: Weekend Wicketkeeping clinic starts this Saturday, 7 AM.',
    'YL Cricket Academy partners with SpeedStar Sports for player kits this season.',
  ];
}
