import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide09-highlights',
  templateUrl: './slide09-highlights.component.html',
  styleUrls: ['./slide09-highlights.component.css']
})
export class Slide09HighlightsComponent implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}
