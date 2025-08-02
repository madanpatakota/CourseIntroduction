import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide20-before-misard',
  templateUrl: './slide20-before-misard.component.html',
  styleUrls: ['./slide20-before-misard.component.css']
})
export class Slide20BeforeMisardComponent implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}
