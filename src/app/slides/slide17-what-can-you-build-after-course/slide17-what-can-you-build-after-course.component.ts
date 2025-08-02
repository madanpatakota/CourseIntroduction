import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { registerScrollAnimations } from 'src/app/shared/utils/scroll-antimate';

@Component({
  selector: 'app-slide17-what-can-you-build-after-course',
  templateUrl: './slide17-what-can-you-build-after-course.component.html',
  styleUrls: ['./slide17-what-can-you-build-after-course.component.css']
})
export class Slide17WhatCanYouBuildAfterCourseComponent  implements AfterViewInit {
 constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    registerScrollAnimations('.app-slide-wrapper', this.el.nativeElement);
  }

appList = [
    {
      title: 'Task Management',
      example: 'Trello-like app for team productivity',
      stack: 'Angular + .NET Core + SQL',
      icon: 'https://cdn-icons-png.flaticon.com/512/3658/3658753.png'
    },
    {
      title: 'E-Commerce',
      example: 'Shopping site with cart & checkout',
      stack: 'Angular + Web API + Razorpay',
      icon: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
    },
    {
      title: 'Blogging CMS',
      example: 'Medium-style platform with editor',
      stack: 'Angular + .NET Core + Azure',
      icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png'
    },
    {
      title: 'Admin Dashboard',
      example: 'Analytics with charts and reports',
      stack: 'Angular + SignalR + Chart.js',
      icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828919.png'
    },
    {
      title: 'Law Portal',
      example: 'Legal info app like Nyayabharat',
      stack: 'Angular + .NET Core + JSON',
      icon: 'https://cdn-icons-png.flaticon.com/512/3082/3082029.png'
    },
    {
      title: 'Social Media',
      example: 'Login, posts, likes & comments',
      stack: 'Angular + API + JWT',
      icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png'
    },
    {
      title: 'Video Learning',
      example: 'YouTube-style viewer & playlist',
      stack: 'Angular + .NET Core + Azure Blob',
      icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png'
    },
    {
      title: 'Appointment App',
      example: 'Doctor/Lawyer scheduling system',
      stack: 'Angular + API + Calendar',
      icon: 'https://cdn-icons-png.flaticon.com/512/747/747310.png'
    },
    {
      title: 'Job Tracker',
      example: 'Apply, track, and upload resume',
      stack: 'Angular + .NET Core + MongoDB',
      icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
    }
  ];
}
