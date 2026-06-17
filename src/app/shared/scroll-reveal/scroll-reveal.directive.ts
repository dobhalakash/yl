import { Directive, ElementRef, Input, OnInit, OnDestroy, inject } from '@angular/core';

export type RevealVariant = 'up' | 'left' | 'right' | 'scale';

/**
 * Adds a scroll-triggered reveal transition to its host element.
 *
 * Usage:
 *   <div appScrollReveal>...</div>                 -> fade + slide up
 *   <div appScrollReveal="left">...</div>          -> fade + slide in from the left
 *   <div appScrollReveal="scale" [revealDelay]="i * 80">...</div>
 *
 * The directive toggles the `.reveal` / `.reveal--*` / `.is-visible` classes
 * defined in `src/styles.scss`, which handle the actual CSS transition. It
 * only fires once per element (no re-hide on scroll-out), and degrades
 * gracefully (content stays visible) if IntersectionObserver is unavailable
 * or `prefers-reduced-motion` is set.
 */
@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  /** Direction/variant of the reveal animation. */
  @Input('appScrollReveal') variant: RevealVariant | '' = 'up';

  /** Optional stagger delay in milliseconds, useful inside *ngFor loops. */
  @Input() revealDelay = 0;

  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const host = this.el.nativeElement;
    const variantClass = this.variant ? `reveal--${this.variant}` : 'reveal--up';

    host.classList.add('reveal', variantClass);

    if (this.revealDelay) {
      host.style.transitionDelay = `${this.revealDelay}ms`;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      host.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            host.classList.add('is-visible');
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
