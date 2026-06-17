import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  /* ── Slider ── */
  currentSlide = 0;
  private sliderTimer: ReturnType<typeof setInterval> | null = null;

  slides = [
    {
      eyebrow: 'Welcome To',
      title: 'YL Cricket<br><span class="gold">Academy</span>',
      sub: 'Building Skills. Building Confidence. Building Champions.',
      image: 'B.jpeg',
      alt: 'Cricket batsman in action at a floodlit stadium',
    },
    {
      eyebrow: 'Train With The Best',
      title: 'Expert<br><span class="gold">Coaching</span>',
      sub: 'BCCI-certified coaches and former state-level players guiding every session.',
      image: 'A (4).jpeg',
      alt: 'Cricket coaching session on the field',
    },
    {
      eyebrow: 'World Class',
      title: 'Modern<br><span class="gold">Facilities</span>',
      sub: 'Turf pitches, bowling machines, video analysis and strength & conditioning zones.',
      image: 'A (8).jpeg',
      alt: 'Cricket ground and practice facilities',
    },
  ];

  /* ── Features ── */
  features = [
    {
      title: 'Expert Coaching',
      sub: 'Trained & Experienced Coaches',
      svgIcon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/><circle cx="19" cy="10" r="2.5" stroke-dasharray="1 1"/></svg>`,
    },
    {
      title: 'World Class Facilities',
      sub: 'Top Quality Grounds & Equipment',
      svgIcon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><ellipse cx="12" cy="10" rx="4" ry="4"/></svg>`,
    },
    {
      title: 'Performance Focused',
      sub: 'Skill Development & Match Exposure',
      svgIcon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    },
    {
      title: 'All Round Growth',
      sub: 'Fitness, Discipline & Leadership',
      svgIcon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
    },
  ];

  /* ── Programs ── */
  programs = [
    {
      title: 'Junior Program',
      ages: 'Ages 6 – 12 Years',
      description: 'Foundation skills, fun learning & match awareness in a safe, structured environment.',
      image: 'B.jpeg',
      svgIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
    },
    {
      title: 'Development Program',
      ages: 'Ages 13 – 16 Years',
      description: 'Skill enhancement, strategy & competitive training with real match exposure.',
      image: 'A.jpeg',
      svgIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/></svg>`,
    },
    {
      title: 'Performance Program',
      ages: 'Ages 17 – 21 Years',
      description: 'High performance training for tournaments & trials with video analysis.',
      image: 'A (3).jpeg',
      svgIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6z"/></svg>`,
    },
    {
      title: 'Professional Program',
      ages: 'Ages 21+ Years',
      description: 'Advanced training for professional & league players targeting state selections.',
      image: 'A (9).jpeg',
      svgIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94A5.01 5.01 0 0 0 11 15.9V19H7v2h10v-2h-4v-3.1a5.01 5.01 0 0 0 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z"/></svg>`,
    },
  ];

  /* ── Gallery ── */
  gallery = [
    { src: 'A (5).jpeg', alt: 'Academy team group photo' },
    { src: 'A (6).jpeg', alt: 'Practice nets session' },
    { src: 'A (7).jpeg', alt: 'Outdoor cricket ground' },
    { src: 'A (12).jpeg', alt: 'Coaching drill on field' },
    { src: 'A (11).jpeg', alt: 'Gym and fitness training' },
  ];

  /* ── Stats ── */
  stats = [
    { value: '500+', label: 'Students Trained',   svgIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>` },
    { value: '50+',  label: 'Tournaments Played', svgIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z"/></svg>` },
    { value: '25+',  label: 'Players Placed',     svgIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 3 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82 1.89 3.2L12 21l3.4 1.5 1.89-3.19 3.61-.82-.34-3.69L23 12z"/></svg>` },
    { value: '10+',  label: 'Years of Excellence', svgIcon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>` },
  ];

  /* ── Testimonials ── */
  currentTestimonial = 0;
  testimonials = [
    { quote: 'YL Cricket Academy has transformed my game and my confidence. The coaches and facilities are simply excellent!', name: 'Arjun Sharma', role: 'U-16 Player', avatar: 'https://i.pravatar.cc/60?img=11' },
    { quote: 'My son joined the U-12 batch two years ago and now represents the district. The coaches genuinely care about progress.', name: 'Rohit Deshmukh', role: 'Parent, U-12 Batch', avatar: 'https://i.pravatar.cc/60?img=12' },
    { quote: 'The video analysis changed my bowling action completely. Gained pace and control within one season.', name: 'Aarav Mehta', role: 'Elite Squad, Fast Bowler', avatar: 'https://i.pravatar.cc/60?img=15' },
  ];

  get featuredTestimonial() { return this.testimonials[this.currentTestimonial]; }

  /* ── Lifecycle ── */
  ngOnInit(): void {
    this.sliderTimer = setInterval(() => this.nextSlide(), 5000);
  }

  ngOnDestroy(): void {
    if (this.sliderTimer) clearInterval(this.sliderTimer);
  }

  nextSlide(): void { this.currentSlide = (this.currentSlide + 1) % this.slides.length; }
  prevSlide(): void { this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length; }
  goToSlide(i: number): void { this.currentSlide = i; }
  nextTestimonial(): void { this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length; }
  prevTestimonial(): void { this.currentTestimonial = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length; }
}
