import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide09HighlightsComponent } from './slide09-highlights.component';

describe('Slide09HighlightsComponent', () => {
  let component: Slide09HighlightsComponent;
  let fixture: ComponentFixture<Slide09HighlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide09HighlightsComponent]
    });
    fixture = TestBed.createComponent(Slide09HighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
