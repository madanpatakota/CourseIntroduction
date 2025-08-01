import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide14-at-the-final',
  templateUrl: './slide14-at-the-final.component.html',
  styleUrls: ['./slide14-at-the-final.component.css']
})
export class Slide14AtTheFinalComponent implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}
