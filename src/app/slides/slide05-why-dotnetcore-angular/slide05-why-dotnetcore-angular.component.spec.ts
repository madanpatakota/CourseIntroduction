import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide05WhyDotnetcoreAngularComponent } from './slide05-why-dotnetcore-angular.component';

describe('Slide05WhyDotnetcoreAngularComponent', () => {
  let component: Slide05WhyDotnetcoreAngularComponent;
  let fixture: ComponentFixture<Slide05WhyDotnetcoreAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide05WhyDotnetcoreAngularComponent]
    });
    fixture = TestBed.createComponent(Slide05WhyDotnetcoreAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
