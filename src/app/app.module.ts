import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module'
import { AppComponent } from './app.component';
// import { NgChartsModule } from 'ng2-charts';

// Shared Components
import { SlideNavComponent } from './shared/slide-nav/slide-nav.component';

// Slide Components
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
import { Slide18FullcourseCurrStepByStepComponent } from './slides/slide18-fullcourse-curr-step-by-step/slide18-fullcourse-curr-step-by-step.component';
import { Slide19TopIqsStudentsComponent } from './slides/slide19-top-iqs-students/slide19-top-iqs-students.component';
import { Slide20BeforeMisardComponent } from './slides/slide20-before-misard/slide20-before-misard.component';
import { Slide21StudetReviewsComponent } from './slides/slide21-studet-reviews/slide21-studet-reviews.component';
import { Slide22LiveProjectsComponent } from './slides/slide22-live-projects/slide22-live-projects.component';
import { Slide23InternshipComponent } from './slides/slide23-internship/slide23-internship.component';
import { Slide24ThankYouComponent } from './slides/slide24-thank-you/slide24-thank-you.component';


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

@NgModule({
  declarations: [
    AppComponent,
    SlideNavComponent,
    // All Slide Components
    Slide01IntroComponent,
    Slide02WhyCourseComponent,
    Slide03WhoShouldJoinComponent,
    Slide04MarketAnalysisComponent,
    Slide05WhyDotnetcoreAngularComponent,
    Slide06TopCombosComponent,
    Slide07TechnologiesComponent,
    Slide08JobPortalStatsComponent,
    Slide09HighlightsComponent,
    Slide10TrainerComponent,

    Slide11CourseStructureComponent,
    Slide12WhatYouCanDevelopComponent,
    Slide13ChoosingTheRightComponent,
    Slide14AtTheFinalComponent,
    Slide15TopRealWorldApplicationsComponent,
    Slide16SlideCareerPathComponent,
    Slide17WhatCanYouBuildAfterCourseComponent,
    Slide18RealTimeProjectsYouWillWorkOnComponent,
    Slide18FullcourseCurrStepByStepComponent,
    
    Slide19TopIqsStudentsComponent,
    Slide20BeforeMisardComponent,
    Slide21StudetReviewsComponent,
    Slide22LiveProjectsComponent,
    Slide23InternshipComponent,

    Slide24ThankYouComponent

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
