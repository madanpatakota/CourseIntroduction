import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide10TrainerComponent } from './slide10-trainer.component';

describe('Slide10TrainerComponent', () => {
  let component: Slide10TrainerComponent;
  let fixture: ComponentFixture<Slide10TrainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide10TrainerComponent]
    });
    fixture = TestBed.createComponent(Slide10TrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
