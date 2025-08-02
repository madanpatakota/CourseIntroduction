import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide13-choosing-the-right',
  templateUrl: './slide13-choosing-the-right.component.html',
  styleUrls: ['./slide13-choosing-the-right.component.css']
})
export class Slide13ChoosingTheRightComponent  implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}
