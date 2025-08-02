import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide24ThankYouComponent } from './slide24-thank-you.component';

describe('Slide24ThankYouComponent', () => {
  let component: Slide24ThankYouComponent;
  let fixture: ComponentFixture<Slide24ThankYouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide24ThankYouComponent]
    });
    fixture = TestBed.createComponent(Slide24ThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
