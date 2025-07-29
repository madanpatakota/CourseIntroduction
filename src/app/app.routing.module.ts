import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// 🧩 Import all 25 slide components
import { Slide01IntroComponent } from './slides/slide01-intro/slide01-intro.component';
 import { Slide02WhyCourseComponent } from './slides/slide02-why-course/slide02-why-course.component';
 import { Slide03WhoShouldJoinComponent } from './slides/slide03-who-should-join/slide03-who-should-join.component';
 import { Slide04MarketAnalysisComponent } from './slides/slide04-market-analysis/slide04-market-analysis.component';
// import { Slide05TechnologiesComponent } from './slides/slide05-technologies/slide05-technologies.component';
// import { Slide06JobPortalStatsComponent } from './slides/slide06-job-portal-stats/slide06-job-portal-stats.component';
// import { Slide07HighlightsComponent } from './slides/slide07-highlights/slide07-highlights.component';
// import { Slide08TrainerComponent } from './slides/slide08-trainer/slide08-trainer.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'slide-1', pathMatch: 'full' },
  { path: 'slide-1', component: Slide01IntroComponent },
  {path:  'slide-2', component: Slide02WhyCourseComponent },
  {path:  'slide-3', component: Slide03WhoShouldJoinComponent },
  {path: 'slide-4', component: Slide04MarketAnalysisComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)  ],
  exports: [RouterModule ]
})
export class AppRoutingModule {}
