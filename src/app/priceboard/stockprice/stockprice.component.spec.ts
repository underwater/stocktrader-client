/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockpriceComponent } from './stockprice.component';

describe('StockpriceComponent', () => {
  let component: StockpriceComponent;
  let fixture: ComponentFixture<StockpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
