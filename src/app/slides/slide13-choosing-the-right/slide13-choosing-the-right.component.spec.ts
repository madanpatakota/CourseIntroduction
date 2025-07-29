import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slide13ChoosingTheRightComponent } from './slide13-choosing-the-right.component';

describe('Slide13ChoosingTheRightComponent', () => {
  let component: Slide13ChoosingTheRightComponent;
  let fixture: ComponentFixture<Slide13ChoosingTheRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slide13ChoosingTheRightComponent]
    });
    fixture = TestBed.createComponent(Slide13ChoosingTheRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
