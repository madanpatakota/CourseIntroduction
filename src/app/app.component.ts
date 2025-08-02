import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: true
    });

    // Route change refresh
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => AOS.refresh(), 200);
      });

    // Scroll refresh inside scroll container
    const wrapper = document.querySelector('.app-slide-wrapper');
    if (wrapper) {
      wrapper.addEventListener('scroll', () => {
        AOS.refreshHard();
      });
    }
  }
}
