import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slide02-why-course',
  templateUrl: './slide02-why-course.component.html',
  styleUrls: ['./slide02-why-course.component.css']
})
export class Slide02WhyCourseComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const wrapper = document.querySelector('.app-slide-wrapper'); // scrollable container

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      {
        root: wrapper,
        threshold: 0.1
      }
    );

    const elements = this.el.nativeElement.querySelectorAll('[data-aos]');
    elements.forEach((el: Element) => observer.observe(el));
  }
}
