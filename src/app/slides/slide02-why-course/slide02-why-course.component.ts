import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide02-why-course',
  templateUrl: './slide02-why-course.component.html',
  styleUrls: ['./slide02-why-course.component.css']
})
export class Slide02WhyCourseComponent implements AfterViewInit {

 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}
