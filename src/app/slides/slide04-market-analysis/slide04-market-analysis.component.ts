import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';


@Component({
  selector: 'app-slide04-market-analysis',
  templateUrl: './slide04-market-analysis.component.html',
  styleUrls: ['./slide04-market-analysis.component.css']
})
export class Slide04MarketAnalysisComponent implements AfterViewInit{

 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }

}
