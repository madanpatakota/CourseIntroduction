import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide23-internship',
  templateUrl: './slide23-internship.component.html',
  styleUrls: ['./slide23-internship.component.css']
})
export class Slide23InternshipComponent  implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }

stages = [
  { icon: '📂', title: 'Real Projects', desc: 'Work on real modules handled by team leads.' },
  { icon: '🔁', title: 'Feedback Cycles', desc: 'Client-style review and improvements via GitHub.' },
  { icon: '📜', title: 'Internship Certificate', desc: 'Issued after completion with project links.' },
  { icon: '🚀', title: 'Job-Ready Grooming', desc: 'Mock interviews, resume, LinkedIn optimization.' },
  { icon: '💡', title: 'Daily Standups', desc: 'Experience agile culture with task updates & discussion.' },
  { icon: '🛠️', title: 'Debugging Challenges', desc: 'Real-life problem solving & pair programming.' }
];
}
