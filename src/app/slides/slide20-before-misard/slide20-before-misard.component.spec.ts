import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide20BeforeMisardComponent } from './slide20-before-misard.component';

describe('Slide20BeforeMisardComponent', () => {
  let component: Slide20BeforeMisardComponent;
  let fixture: ComponentFixture<Slide20BeforeMisardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide20BeforeMisardComponent]
    });
    fixture = TestBed.createComponent(Slide20BeforeMisardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
