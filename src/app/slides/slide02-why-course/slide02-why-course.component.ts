import { AfterViewInit, ElementRef, Component } from '@angular/core';

@Component({
  selector: 'app-slide02-why-course',
  templateUrl: './slide02-why-course.component.html',
  styleUrls: ['./slide02-why-course.component.css']
})
export class Slide02WhyCourseComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      {
        threshold: 0.1,
        root: document.querySelector('.app-slide-wrapper') // 👈 important!
      }
    );

    const items = this.el.nativeElement.querySelectorAll('.observe-fade-up');
    items.forEach((item: Element) => observer.observe(item));
  }
}
