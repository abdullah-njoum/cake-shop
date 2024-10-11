/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LayerCakeService } from './layer-cake.service';

describe('Service: LayerCake', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayerCakeService]
    });
  });

  it('should ...', inject([LayerCakeService], (service: LayerCakeService) => {
    expect(service).toBeTruthy();
  }));
});
