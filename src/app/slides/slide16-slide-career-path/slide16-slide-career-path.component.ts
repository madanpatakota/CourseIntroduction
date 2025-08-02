import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide16-slide-career-path',
  templateUrl: './slide16-slide-career-path.component.html',
  styleUrls: ['./slide16-slide-career-path.component.css']
})
export class Slide16SlideCareerPathComponent implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}

