import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide22LiveProjectsComponent } from './slide22-live-projects.component';

describe('Slide22LiveProjectsComponent', () => {
  let component: Slide22LiveProjectsComponent;
  let fixture: ComponentFixture<Slide22LiveProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide22LiveProjectsComponent]
    });
    fixture = TestBed.createComponent(Slide22LiveProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
