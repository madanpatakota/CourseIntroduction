import { Component } from '@angular/core';

@Component({
  selector: 'app-slide21-studet-reviews',
  templateUrl: './slide21-studet-reviews.component.html',
  styleUrls: ['./slide21-studet-reviews.component.css']
})
export class Slide21StudetReviewsComponent {
// reviews.component.ts

  reviews = [
    { name: 'Swetha', batch: 'BCom 2024', text: 'Misard gave me real skills and confidence. Now I work in an MNC!', image: 'assets/reviews/swetha.png' },
    { name: 'Kiran', batch: 'BA 2023', text: 'Projects, GitHub, Resume – everything is industry-ready!', image: 'assets/reviews/kiran.png' },
    { name: 'Rajesh', batch: 'Mechanical 2023', text: 'No CS background, but now a developer in top product company!', image: 'assets/reviews/rajesh.png' }
  ];


}
