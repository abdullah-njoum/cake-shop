/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LayerCakesComponent } from './layer-cakes.component';

describe('LayerCakesComponent', () => {
  let component: LayerCakesComponent;
  let fixture: ComponentFixture<LayerCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
