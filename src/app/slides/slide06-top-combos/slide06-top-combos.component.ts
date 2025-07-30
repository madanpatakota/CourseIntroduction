import { Component } from '@angular/core';

@Component({
  selector: 'app-slide06-top-combos',
  templateUrl: './slide06-top-combos.component.html',
  styleUrls: ['./slide06-top-combos.component.css']
})
export class Slide06TopCombosComponent {
combos = [
  {
    title: 'ASP.NET Core + Angular',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
    points: [
      'Most demanded in enterprise apps (Banking, Insurance, Healthcare)',
      'Strong MNC usage',
      'Microsoft + Google backing',
      'CI/CD & Azure integration-ready'
    ],
    rating: 5
  },
  {
    title: 'Java + Angular',
    icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
    points: [
      'Popular in legacy & enterprise systems',
      'Spring Boot + Angular in Govt & Telecom'
    ],
    rating: 4
  },
  {
    title: 'Node.js + React',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
    points: [
      'JS end-to-end',
      'Startup & product companies love it'
    ],
    rating: 4
  },
  {
    title: 'Java + React',
    icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
    points: [
      'Good in enterprises',
      'Slightly lower demand than Angular combo'
    ],
    rating: 3
  },
  {
    title: 'ASP.NET Core + React',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
    points: [
      'Strong backend',
      'Less used in government/public sector'
    ],
    rating: 3
  },
  {
    title: 'Node.js + Angular',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
    points: [
      'Popular for mid-sized apps',
      'Not widely adopted in MNCs'
    ],
    rating: 2
  },
  {
    title: 'Python + Angular',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
    points: [
      'Mostly used in AI/ML scripting',
      'Not full-stack friendly in enterprises'
    ],
    rating: 2
  },
  {
    title: 'Python + React',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
    points: [
      'Preferred in research/ML domains',
      'Limited enterprise full-stack use'
    ],
    rating: 2
  }
];


}
