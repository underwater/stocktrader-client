/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PriceboardComponent } from './priceboard.component';

describe('PriceboardComponent', () => {
  let component: PriceboardComponent;
  let fixture: ComponentFixture<PriceboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
