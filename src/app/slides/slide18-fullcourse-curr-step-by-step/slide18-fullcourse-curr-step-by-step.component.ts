import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide18-fullcourse-curr-step-by-step',
  templateUrl: './slide18-fullcourse-curr-step-by-step.component.html',
  styleUrls: ['./slide18-fullcourse-curr-step-by-step.component.css']
})
export class Slide18FullcourseCurrStepByStepComponent implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}

