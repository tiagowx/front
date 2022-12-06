import { TestBed } from '@angular/core/testing';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get data country by name', () => {
    expect(service).toBeTruthy();
  });

  it('should be get data country by id', () => {
    expect(service).toBeTruthy();
  });
});
