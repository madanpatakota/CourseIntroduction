import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide03WhoShouldJoinComponent } from './slide03-who-should-join.component';

describe('Slide03WhoShouldJoinComponent', () => {
  let component: Slide03WhoShouldJoinComponent;
  let fixture: ComponentFixture<Slide03WhoShouldJoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide03WhoShouldJoinComponent]
    });
    fixture = TestBed.createComponent(Slide03WhoShouldJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
