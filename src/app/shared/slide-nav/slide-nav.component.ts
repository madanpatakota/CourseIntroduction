import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.css']
})
export class SlideNavComponent {
  @Input() currentSlide: number = 1;
  totalSlides: number = 25;

  constructor(private router: Router) {}

  get isFirstSlide(): boolean {
    return this.currentSlide === 1;
  }

  get isLastSlide(): boolean {
    return this.currentSlide === this.totalSlides;
  }

  goBack(): void {
    this.router.navigate([`/slide-${this.currentSlide - 1}`]);
  }

  goNext(): void {
    this.router.navigate([`/slide-${this.currentSlide + 1}`]);
  }
}
