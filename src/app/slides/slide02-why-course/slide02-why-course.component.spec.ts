import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide02WhyCourseComponent } from './slide02-why-course.component';

describe('Slide02WhyCourseComponent', () => {
  let component: Slide02WhyCourseComponent;
  let fixture: ComponentFixture<Slide02WhyCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide02WhyCourseComponent]
    });
    fixture = TestBed.createComponent(Slide02WhyCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
