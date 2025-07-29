import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide11CourseStructureComponent } from './slide11-course-structure.component';

describe('Slide11CourseStructureComponent', () => {
  let component: Slide11CourseStructureComponent;
  let fixture: ComponentFixture<Slide11CourseStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide11CourseStructureComponent]
    });
    fixture = TestBed.createComponent(Slide11CourseStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
