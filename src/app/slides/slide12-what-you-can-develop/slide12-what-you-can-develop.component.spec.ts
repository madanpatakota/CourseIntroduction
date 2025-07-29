import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide12WhatYouCanDevelopComponent } from './slide12-what-you-can-develop.component';

describe('Slide12WhatYouCanDevelopComponent', () => {
  let component: Slide12WhatYouCanDevelopComponent;
  let fixture: ComponentFixture<Slide12WhatYouCanDevelopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide12WhatYouCanDevelopComponent]
    });
    fixture = TestBed.createComponent(Slide12WhatYouCanDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
