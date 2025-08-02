import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide07-technologies',
  templateUrl: './slide07-technologies.component.html',
  styleUrls: ['./slide07-technologies.component.css']
})
export class Slide07TechnologiesComponent  implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}

