import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide11-course-structure',
  templateUrl: './slide11-course-structure.component.html',
  styleUrls: ['./slide11-course-structure.component.css']
})
export class Slide11CourseStructureComponent implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}
