import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide21StudetReviewsComponent } from './slide21-studet-reviews.component';

describe('Slide21StudetReviewsComponent', () => {
  let component: Slide21StudetReviewsComponent;
  let fixture: ComponentFixture<Slide21StudetReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide21StudetReviewsComponent]
    });
    fixture = TestBed.createComponent(Slide21StudetReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
