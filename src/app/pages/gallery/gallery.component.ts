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
    { src: 'https://picsum.photos/seed/yl-gallery-1/480/360', alt: 'Junior batch practising batting in the nets', category: 'Training' },
    { src: 'https://picsum.photos/seed/yl-gallery-2/480/360', alt: 'Coach demonstrating bowling action to players', category: 'Training' },
    { src: 'https://picsum.photos/seed/yl-gallery-3/480/360', alt: 'Players in academy jersey during a league match', category: 'Matches' },
    { src: 'https://picsum.photos/seed/yl-gallery-4/480/360', alt: 'Team huddle before the start of a match', category: 'Matches' },
    { src: 'https://picsum.photos/seed/yl-gallery-5/480/360', alt: 'Academy team posing with the winter tour trophy', category: 'Tours' },
    { src: 'https://picsum.photos/seed/yl-gallery-6/480/360', alt: 'Players boarding the bus for the inter-city tour', category: 'Tours' },
    { src: 'https://picsum.photos/seed/yl-gallery-7/480/360', alt: 'Wide view of the academy turf ground', category: 'Facilities' },
    { src: 'https://picsum.photos/seed/yl-gallery-8/480/360', alt: 'Indoor practice nets with bowling machine', category: 'Facilities' },
    { src: 'https://picsum.photos/seed/yl-gallery-9/480/360', alt: 'Fielding drill with cones and markers', category: 'Training' },
    { src: 'https://picsum.photos/seed/yl-gallery-10/480/360', alt: 'Players celebrating a wicket during a match', category: 'Matches' },
    { src: 'https://picsum.photos/seed/yl-gallery-11/480/360', alt: 'Group photo of players and coaches on tour', category: 'Tours' },
    { src: 'https://picsum.photos/seed/yl-gallery-12/480/360', alt: 'Strength and conditioning session in the fitness zone', category: 'Facilities' },
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
