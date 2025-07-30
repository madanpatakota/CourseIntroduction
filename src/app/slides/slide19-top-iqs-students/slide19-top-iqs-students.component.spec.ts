import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide19TopIqsStudentsComponent } from './slide19-top-iqs-students.component';

describe('Slide19TopIqsStudentsComponent', () => {
  let component: Slide19TopIqsStudentsComponent;
  let fixture: ComponentFixture<Slide19TopIqsStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide19TopIqsStudentsComponent]
    });
    fixture = TestBed.createComponent(Slide19TopIqsStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
