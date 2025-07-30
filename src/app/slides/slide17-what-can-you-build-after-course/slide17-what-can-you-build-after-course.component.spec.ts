import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide17WhatCanYouBuildAfterCourseComponent } from './slide17-what-can-you-build-after-course.component';

describe('Slide17WhatCanYouBuildAfterCourseComponent', () => {
  let component: Slide17WhatCanYouBuildAfterCourseComponent;
  let fixture: ComponentFixture<Slide17WhatCanYouBuildAfterCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide17WhatCanYouBuildAfterCourseComponent]
    });
    fixture = TestBed.createComponent(Slide17WhatCanYouBuildAfterCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
