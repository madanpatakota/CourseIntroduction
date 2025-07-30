import { Component } from '@angular/core';

@Component({
  selector: 'app-slide23-internship',
  templateUrl: './slide23-internship.component.html',
  styleUrls: ['./slide23-internship.component.css']
})
export class Slide23InternshipComponent {
stages = [
    { icon: '📂', title: 'Real Projects', desc: 'Work on real modules handled by team leads.' },
    { icon: '🔁', title: 'Feedback Cycles', desc: 'Client-style review and improvements via GitHub.' },
    { icon: '📜', title: 'Internship Certificate', desc: 'Issued after completion with project links.' },
    { icon: '🚀', title: 'Job-Ready Grooming', desc: 'Mock interviews, resume, LinkedIn optimization.' }
  ];
}
