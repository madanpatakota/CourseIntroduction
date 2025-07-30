import { Component } from '@angular/core';

@Component({
  selector: 'app-slide19-top-iqs-students',
  templateUrl: './slide19-top-iqs-students.component.html',
  styleUrls: ['./slide19-top-iqs-students.component.css']
})
export class Slide19TopIqsStudentsComponent {
 faqs = [
    { question: 'Can I get a job after this course?', answer: 'Absolutely. With real-time projects, GitHub repos, and grooming sessions, many students get placed within 3–6 months.' },
    { question: 'Do I need a CS degree?', answer: 'Nope. Dedication + practice > Degree. Many of our toppers are non-CS grads.' },
    { question: 'What if I’m from BCom/BA?', answer: 'We train from scratch. Many such students are now working in top IT firms after completing our course.' },
    { question: 'How much time do I need daily?', answer: '2 focused hours/day + weekend reviews are enough for success in this course.' }
  ];
}
