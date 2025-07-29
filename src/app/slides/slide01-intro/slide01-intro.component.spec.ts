import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide01IntroComponent } from './slide01-intro.component';

describe('Slide01IntroComponent', () => {
  let component: Slide01IntroComponent;
  let fixture: ComponentFixture<Slide01IntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide01IntroComponent]
    });
    fixture = TestBed.createComponent(Slide01IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
