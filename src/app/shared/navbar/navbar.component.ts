import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuOpen = signal(false);
  isScrolled = false;

  navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Programs' },
    { path: '/coaches', label: 'Coaches' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/matches', label: 'Achievements' },
    { path: '/contact', label: 'Contact Us' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu(): void { this.menuOpen.update((o) => !o); }
  closeMenu(): void { this.menuOpen.set(false); }
}
