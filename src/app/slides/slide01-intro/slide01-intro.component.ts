import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide01-intro',
  templateUrl: './slide01-intro.component.html',
  styleUrls: ['./slide01-intro.component.css']
})
export class Slide01IntroComponent implements AfterViewInit {

 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}
