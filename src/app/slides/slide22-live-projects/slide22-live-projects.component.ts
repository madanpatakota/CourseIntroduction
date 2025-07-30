import { Component } from '@angular/core';

@Component({
  selector: 'app-slide22-live-projects',
  templateUrl: './slide22-live-projects.component.html',
  styleUrls: ['./slide22-live-projects.component.css']
})
export class Slide22LiveProjectsComponent {
 projects = [
    { title: 'Task Manager App', desc: 'CRUD + Auth + GitHub Push', icon: 'assets/icons/task.svg' },
    { title: 'Blog CMS', desc: 'Angular + .NET + SQL', icon: 'assets/icons/blog.svg' },
    { title: 'API Testing Tool', desc: 'Swagger + Postman Practice', icon: 'assets/icons/api.svg' },
    { title: 'Azure CI/CD Deploy', desc: 'Static Web App + GitHub Actions', icon: 'assets/icons/cloud.svg' }
  ];
}
