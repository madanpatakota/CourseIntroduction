import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide18FullcourseCurrStepByStepComponent } from './slide18-fullcourse-curr-step-by-step.component';

describe('Slide18FullcourseCurrStepByStepComponent', () => {
  let component: Slide18FullcourseCurrStepByStepComponent;
  let fixture: ComponentFixture<Slide18FullcourseCurrStepByStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide18FullcourseCurrStepByStepComponent]
    });
    fixture = TestBed.createComponent(Slide18FullcourseCurrStepByStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
