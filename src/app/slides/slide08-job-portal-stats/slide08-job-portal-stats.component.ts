import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide08-job-portal-stats',
  templateUrl: './slide08-job-portal-stats.component.html',
  styleUrls: ['./slide08-job-portal-stats.component.css']
})
export class Slide08JobPortalStatsComponent implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }
}
