import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide12-what-you-can-develop',
  templateUrl: './slide12-what-you-can-develop.component.html',
  styleUrls: ['./slide12-what-you-can-develop.component.css']
})
export class Slide12WhatYouCanDevelopComponent  implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}
