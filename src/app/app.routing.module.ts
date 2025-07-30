import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// 🧩 Import all 25 slide components
import { Slide01IntroComponent } from './slides/slide01-intro/slide01-intro.component';
import { Slide02WhyCourseComponent } from './slides/slide02-why-course/slide02-why-course.component';
import { Slide03WhoShouldJoinComponent } from './slides/slide03-who-should-join/slide03-who-should-join.component';
import { Slide04MarketAnalysisComponent } from './slides/slide04-market-analysis/slide04-market-analysis.component';

import { Slide05WhyDotnetcoreAngularComponent } from './slides/slide05-why-dotnetcore-angular/slide05-why-dotnetcore-angular.component';
import { Slide06TopCombosComponent } from './slides/slide06-top-combos/slide06-top-combos.component';
import { Slide07TechnologiesComponent } from './slides/slide07-technologies/slide07-technologies.component';
import { Slide08JobPortalStatsComponent } from './slides/slide08-job-portal-stats/slide08-job-portal-stats.component';
import { Slide09HighlightsComponent } from './slides/slide09-highlights/slide09-highlights.component';
import { Slide10TrainerComponent } from './slides/slide10-trainer/slide10-trainer.component';
import { Slide11CourseStructureComponent } from './slides/slide11-course-structure/slide11-course-structure.component';
import { Slide12WhatYouCanDevelopComponent } from './slides/slide12-what-you-can-develop/slide12-what-you-can-develop.component';
import { Slide13ChoosingTheRightComponent } from './slides/slide13-choosing-the-right/slide13-choosing-the-right.component';
import { Slide14AtTheFinalComponent } from './slides/slide14-at-the-final/slide14-at-the-final.component';
import { Slide15TopRealWorldApplicationsComponent } from './slides/slide15-top-real-world-applications/slide15-top-real-world-applications.component';
import { Slide16SlideCareerPathComponent } from './slides/slide16-slide-career-path/slide16-slide-career-path.component';
import { Slide17WhatCanYouBuildAfterCourseComponent } from './slides/slide17-what-can-you-build-after-course/slide17-what-can-you-build-after-course.component';
import { Slide18RealTimeProjectsYouWillWorkOnComponent } from './slides/slide18-real-time-projects-you-will-work-on/slide18-real-time-projects-you-will-work-on.component';

// import { Slide09ProjectsComponent } from './slides/slide09-projects/slide09-projects.component';
// import { Slide10CareerPathComponent } from './slides/slide10-career-path/slide10-career-path.component';
// import { Slide11InterviewComponent } from './slides/slide11-interview/slide11-interview.component';
// import { Slide12SalaryChartComponent } from './slides/slide12-salary-chart/slide12-salary-chart.component';
// import { Slide13AzureGithubComponent } from './slides/slide13-azure-github/slide13-azure-github.component';
// import { Slide14CertificateComponent } from './slides/slide14-certificate/slide14-certificate.component';
// import { Slide15AssessmentComponent } from './slides/slide15-assessment/slide15-assessment.component';
// import { Slide16ModuleStructureComponent } from './slides/slide16-module-structure/slide16-module-structure.component';
// import { Slide17FeedbackComponent } from './slides/slide17-feedback/slide17-feedback.component';
// import { Slide18WhereNowComponent } from './slides/slide18-where-now/slide18-where-now.component';
// import { Slide19CompaniesComponent } from './slides/slide19-companies/slide19-companies.component';
// import { Slide20SyllabusDownloadComponent } from './slides/slide20-syllabus-download/slide20-syllabus-download.component';
// import { Slide21BatchScheduleComponent } from './slides/slide21-batch-schedule/slide21-batch-schedule.component';
// import { Slide22FaqComponent } from './slides/slide22-faq/slide22-faq.component';
// import { Slide23ContactComponent } from './slides/slide23-contact/slide23-contact.component';
// import { Slide24SocialComponent } from './slides/slide24-social/slide24-social.component';
// import { Slide25FinalComponent } from './slides/slide25-final/slide25-final.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'slide-1', pathMatch: 'full' },
//   { path: 'slide-1', component: Slide01IntroComponent },
//   { path: 'slide-2', component: Slide02WhyCourseComponent },
//   { path: 'slide-3', component: Slide03WhoShouldJoinComponent },
//   { path: 'slide-4', component: Slide04MarketAnalysisComponent },
//   { path: 'slide-5', component: Slide05WhyDotnetcoreAngularComponent },
//   { path: 'slide-6', component: Slide06TopCombosComponent },
//   { path: 'slide-7', component: Slide07TechnologiesComponent },
//   { path: 'slide-8', component: Slide08JobPortalStatsComponent },
//   { path: 'slide-9', component: Slide09HighlightsComponent },
//   { path: 'slide-10', component: Slide10TrainerComponent },
//   {path: 'slide-11', component: Slide11CourseStructureComponent },
//   {path: 'slide-12', component: Slide12WhatYouCanDevelopComponent },
//   { path: 'slide-13', component: Slide13ChoosingTheRightComponent },
//   {path: 'slide-14', component: Slide14AtTheFinalComponent },
//   {path: 'slide-15', component: Slide15TopRealWorldApplicationsComponent },
// ];

const routes: Routes = [
  { path: '', redirectTo: 'slide-1', pathMatch: 'full' },
  { path: 'slide-1', component: Slide01IntroComponent },    // Done
  { path: 'slide-2', component: Slide02WhyCourseComponent },  // Done
  { path: 'slide-3', component: Slide04MarketAnalysisComponent }, // Done
  { path: 'slide-4', component: Slide05WhyDotnetcoreAngularComponent }, // Done
  { path: 'slide-5', component: Slide06TopCombosComponent },  // Done

  { path: 'slide-6', component: Slide15TopRealWorldApplicationsComponent },
  { path: 'slide-7', component: Slide07TechnologiesComponent },
  { path: 'slide-8', component: Slide08JobPortalStatsComponent },
  { path: 'slide-9', component: Slide13ChoosingTheRightComponent },
  { path: 'slide-10', component: Slide12WhatYouCanDevelopComponent },
  {path: 'slide-11', component: Slide11CourseStructureComponent },
  {path: 'slide-12', component: Slide10TrainerComponent },
  { path: 'slide-13', component: Slide09HighlightsComponent },
  {path: 'slide-14', component: Slide14AtTheFinalComponent },
  {path: 'slide-15', component: Slide03WhoShouldJoinComponent },
  { path: 'slide-16', component: Slide16SlideCareerPathComponent }, // Placeholder for future slides
  {path:'slide-17', component: Slide17WhatCanYouBuildAfterCourseComponent }, // Placeholder for future slides
  {path:'slide-18',component:Slide18RealTimeProjectsYouWillWorkOnComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
