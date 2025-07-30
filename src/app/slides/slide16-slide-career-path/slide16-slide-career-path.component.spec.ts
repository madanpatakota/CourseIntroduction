import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide16SlideCareerPathComponent } from './slide16-slide-career-path.component';

describe('Slide16SlideCareerPathComponent', () => {
  let component: Slide16SlideCareerPathComponent;
  let fixture: ComponentFixture<Slide16SlideCareerPathComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide16SlideCareerPathComponent]
    });
    fixture = TestBed.createComponent(Slide16SlideCareerPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
