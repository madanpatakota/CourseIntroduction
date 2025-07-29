import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide07TechnologiesComponent } from './slide07-technologies.component';

describe('Slide07TechnologiesComponent', () => {
  let component: Slide07TechnologiesComponent;
  let fixture: ComponentFixture<Slide07TechnologiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide07TechnologiesComponent]
    });
    fixture = TestBed.createComponent(Slide07TechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
