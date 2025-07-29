import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide15TopRealWorldApplicationsComponent } from './slide15-top-real-world-applications.component';

describe('Slide15TopRealWorldApplicationsComponent', () => {
  let component: Slide15TopRealWorldApplicationsComponent;
  let fixture: ComponentFixture<Slide15TopRealWorldApplicationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide15TopRealWorldApplicationsComponent]
    });
    fixture = TestBed.createComponent(Slide15TopRealWorldApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
