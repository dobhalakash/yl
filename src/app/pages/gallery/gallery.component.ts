import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal.directive';

interface GalleryImage {
  src: string;
  alt: string;
  category: 'Training' | 'Matches' | 'Tours' | 'Facilities';
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  categories: Array<GalleryImage['category'] | 'All'> = ['All', 'Training', 'Matches', 'Tours', 'Facilities'];

  activeCategory = signal<GalleryImage['category'] | 'All'>('All');

  images: GalleryImage[] = [
    { src: '/Batting Masterclass.png', alt: 'Junior batch practising batting in the nets', category: 'Training' },
    { src: '/Fast Bowling Clinic.png', alt: 'Coach demonstrating bowling action to players', category: 'Training' },
    { src: '/Modern Facilities .png', alt: 'Players in academy jersey during a league match', category: 'Facilities' },
    { src: '/Elite Performance Squad.png', alt: 'Team huddle before the start of a match', category: 'Matches' },
    { src: 'A (12).jpeg', alt: 'Academy team posing with the winter tour trophy', category: 'Tours' },
    { src: '/Fitness & Conditioning Zone.png', alt: 'Players boarding the bus for the inter-city tour', category: 'Tours' },
    { src: '/Turf Ground & Outfield.png', alt: 'Wide view of the academy turf ground', category: 'Facilities' },
    { src: '/Practice Nets.png', alt: 'Indoor practice nets with bowling machine', category: 'Facilities' },
    { src: '/A (3).jpeg', alt: 'Fielding drill with cones and markers', category: 'Training' },
    { src: '/A (7).jpeg', alt: 'Players celebrating a wicket during a match', category: 'Matches' },
    { src: '/A (5).jpeg', alt: 'Group photo of players and coaches on tour', category: 'Tours' },
    { src: '/A (12).jpeg', alt: 'Strength and conditioning session in the fitness zone', category: 'Facilities' },
  ];

  filteredImages = computed(() => {
    const active = this.activeCategory();
    if (active === 'All') {
      return this.images;
    }
    return this.images.filter((img) => img.category === active);
  });

  setCategory(category: GalleryImage['category'] | 'All'): void {
    this.activeCategory.set(category);
  }
}
