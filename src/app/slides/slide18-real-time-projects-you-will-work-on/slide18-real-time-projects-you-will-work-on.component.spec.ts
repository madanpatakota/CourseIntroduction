import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide18RealTimeProjectsYouWillWorkOnComponent } from './slide18-real-time-projects-you-will-work-on.component';

describe('Slide18RealTimeProjectsYouWillWorkOnComponent', () => {
  let component: Slide18RealTimeProjectsYouWillWorkOnComponent;
  let fixture: ComponentFixture<Slide18RealTimeProjectsYouWillWorkOnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide18RealTimeProjectsYouWillWorkOnComponent]
    });
    fixture = TestBed.createComponent(Slide18RealTimeProjectsYouWillWorkOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
