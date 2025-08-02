import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide18-real-time-projects-you-will-work-on',
  templateUrl: './slide18-real-time-projects-you-will-work-on.component.html',
  styleUrls: ['./slide18-real-time-projects-you-will-work-on.component.css']
})
export class Slide18RealTimeProjectsYouWillWorkOnComponent implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}
