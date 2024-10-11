/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LayerCakeCardComponent } from './layer-cake-card.component';

describe('LayerCakeCardComponent', () => {
  let component: LayerCakeCardComponent;
  let fixture: ComponentFixture<LayerCakeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerCakeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerCakeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
