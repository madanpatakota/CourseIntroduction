import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide-nav',
  templateUrl: './slide-nav.component.html',
  styleUrls: ['./slide-nav.component.css']
})
export class SlideNavComponent {
  
  @Input() currentSlide: number =0;

  @Input() backRoute: string = '';
  @Input() FrontRoute: string = '';

  //[backRoute]="'slide-3'" [FrontRoute]="'slide-4'"
  totalSlides: number = 25;

  constructor(private router: Router) {}

  
  get isFirstSlide(): boolean {
    return this.currentSlide === 1;
  }

  get isLastSlide(): boolean {
    return this.currentSlide === this.totalSlides;
  }

goBack(): void {
  this.router.navigate([`/${this.backRoute}`]).then(() => {
    this.scrollToTop();
  });
}

goNext(): void {
  this.router.navigate([`/${this.FrontRoute}`]).then(() => {
    this.scrollToTop();
  });
}

scrollToTop(): void {
  // Add this helper method
  setTimeout(() => {
    const contentContainer = document.querySelector('main') || document.querySelector('.slide-wrapper') || document.documentElement;
    contentContainer.scrollTo({ top: 0, behavior: 'smooth' });
  }, 50);
}

}
