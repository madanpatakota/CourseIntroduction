import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide08JobPortalStatsComponent } from './slide08-job-portal-stats.component';

describe('Slide08JobPortalStatsComponent', () => {
  let component: Slide08JobPortalStatsComponent;
  let fixture: ComponentFixture<Slide08JobPortalStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide08JobPortalStatsComponent]
    });
    fixture = TestBed.createComponent(Slide08JobPortalStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
