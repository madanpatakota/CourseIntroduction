import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide06TopCombosComponent } from './slide06-top-combos.component';

describe('Slide06TopCombosComponent', () => {
  let component: Slide06TopCombosComponent;
  let fixture: ComponentFixture<Slide06TopCombosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide06TopCombosComponent]
    });
    fixture = TestBed.createComponent(Slide06TopCombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
