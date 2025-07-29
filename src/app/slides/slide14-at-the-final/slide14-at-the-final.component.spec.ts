import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide14AtTheFinalComponent } from './slide14-at-the-final.component';

describe('Slide14AtTheFinalComponent', () => {
  let component: Slide14AtTheFinalComponent;
  let fixture: ComponentFixture<Slide14AtTheFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide14AtTheFinalComponent]
    });
    fixture = TestBed.createComponent(Slide14AtTheFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
