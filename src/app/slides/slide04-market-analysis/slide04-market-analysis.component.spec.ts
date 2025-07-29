import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide04MarketAnalysisComponent } from './slide04-market-analysis.component';

describe('Slide04MarketAnalysisComponent', () => {
  let component: Slide04MarketAnalysisComponent;
  let fixture: ComponentFixture<Slide04MarketAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide04MarketAnalysisComponent]
    });
    fixture = TestBed.createComponent(Slide04MarketAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
