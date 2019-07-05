/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PriceBoardComponent } from './priceboard.component';

describe('PriceboardComponent', () => {
  let component: PriceBoardComponent;
  let fixture: ComponentFixture<PriceBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
