import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide03-who-should-join',
  templateUrl: './slide03-who-should-join.component.html',
  styleUrls: ['./slide03-who-should-join.component.css']
})
export class Slide03WhoShouldJoinComponent implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}
