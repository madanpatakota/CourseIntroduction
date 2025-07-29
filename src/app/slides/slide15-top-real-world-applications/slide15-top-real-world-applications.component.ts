import { Component } from '@angular/core';

@Component({
  selector: 'app-slide15-top-real-world-applications',
  templateUrl: './slide15-top-real-world-applications.component.html',
  styleUrls: ['./slide15-top-real-world-applications.component.css']
})
export class Slide15TopRealWorldApplicationsComponent {
appCategories = [
  {
    title: 'Enterprise Web Apps',
    icon: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png',
    apps: [
      { name: 'Microsoft Admin Center', link: 'https://admin.microsoft.com' },
      { name: 'IBM Cloud Pak Dashboard', link: 'https://www.ibm.com/cloud/cloud-pak' },
      { name: 'Siemens Digital Grid', link: 'https://new.siemens.com/' }
    ]
  },
  {
    title: 'E-commerce Platforms',
    icon: 'https://cdn-icons-png.flaticon.com/512/1170/1170678.png',
    apps: [
      { name: 'BigCommerce Admin', link: 'https://www.bigcommerce.com/' },
      { name: 'nopCommerce', link: 'https://www.nopcommerce.com/' },
      { name: 'SmartStore.NET', link: 'https://smartstore.com/' }
    ]
  },
  {
    title: 'Content Management Systems',
    icon: 'https://cdn-icons-png.flaticon.com/512/4727/4727262.png',
    apps: [
      { name: 'Orchard Core CMS', link: 'https://www.orchardcore.net/' },
      { name: 'Piranha CMS', link: 'https://piranhacms.org/' },
      { name: 'Umbraco Headless (with Angular)', link: 'https://umbraco.com/' }
    ]
  },
  {
    title: 'Social Media Tools',
    icon: 'https://cdn-icons-png.flaticon.com/512/2504/2504957.png',
    apps: [
      { name: 'Contoso Chat (Demo)', link: 'https://github.com/dotnet/aspnetcore-realworld-example-app' },
      { name: 'SignalR Social Feed', link: 'https://learn.microsoft.com/en-us/aspnet/core/signalr/' },
      { name: 'RavenHub', link: 'https://ravenhub.io/' }
    ]
  },
  {
    title: 'Project Management',
    icon: 'https://cdn-icons-png.flaticon.com/512/2910/2910795.png',
    apps: [
      { name: 'Jira Clone (ASP.NET Core + Angular)', link: 'https://github.com/boardzilla/BoardZilla' },
      { name: 'TMS Dashboard', link: 'https://github.com/damienbod/AspNetCoreAngularSignalR' },
      { name: 'Projectino', link: 'https://projectino.net/' }
    ]
  },
  {
    title: 'Healthcare Systems',
    icon: 'https://cdn-icons-png.flaticon.com/512/3104/3104950.png',
    apps: [
      { name: 'Medico App', link: 'https://github.com/hassanhabib/OtripleS' },
      { name: 'Patient Record System', link: 'https://healthsoft.io/' },
      { name: 'DocManagePro', link: 'https://docmanagepro.com/' }
    ]
  },
  {
    title: 'Education Platforms',
    icon: 'https://cdn-icons-png.flaticon.com/512/2190/2190560.png',
    apps: [
      { name: 'LearnHub LMS', link: 'https://learnhub.io/' },
      { name: 'EduSys', link: 'https://www.edusys.co/' },
      { name: 'MyStudy Portal', link: 'https://github.com/MystudyPortal/ClientApp' }
    ]
  },
  {
    title: 'Finance & Banking',
    icon: 'https://cdn-icons-png.flaticon.com/512/3208/3208730.png',
    apps: [
      { name: 'Loan Origination Suite', link: 'https://www.verloop.io/' },
      { name: 'NetBank Dashboard', link: 'https://github.com/netbank/core-ui' },
      { name: 'InvoiceFlow', link: 'https://invoiceflow.app/' }
    ]
  },
  {
    title: 'Travel & Booking',
    icon: 'https://cdn-icons-png.flaticon.com/512/201/201623.png',
    apps: [
      { name: 'FlightBooking Pro', link: 'https://github.com/sachinmonga/FlightBooking' },
      { name: 'TripGo Travel Engine', link: 'https://tripgo.com/' },
      { name: 'Holiday Planner 360', link: 'https://holidayplanner360.com/' }
    ]
  },
  {
    title: 'Real-Time Applications',
    icon: 'https://cdn-icons-png.flaticon.com/512/3281/3281394.png',
    apps: [
      { name: 'Stock Ticker Live', link: 'https://github.com/damienbod/AngularRealtimeStocks' },
      { name: 'Real-Time Chat App', link: 'https://github.com/conduit-angular/realworld' },
      { name: 'IoT Dashboard', link: 'https://iot.microsoft.com/' }
    ]
  }
];

}
