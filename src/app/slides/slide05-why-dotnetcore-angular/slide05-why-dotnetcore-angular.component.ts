import { AfterViewInit, Component, ElementRef  } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide05-why-dotnetcore-angular',
  templateUrl: './slide05-why-dotnetcore-angular.component.html',
  styleUrls: ['./slide05-why-dotnetcore-angular.component.css'],

})
export class Slide05WhyDotnetcoreAngularComponent implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}


