import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide23InternshipComponent } from './slide23-internship.component';

describe('Slide23InternshipComponent', () => {
  let component: Slide23InternshipComponent;
  let fixture: ComponentFixture<Slide23InternshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide23InternshipComponent]
    });
    fixture = TestBed.createComponent(Slide23InternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
