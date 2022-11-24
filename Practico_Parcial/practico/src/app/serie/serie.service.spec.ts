/* tslint:disable:no-unused-variable */
import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, inject } from '@angular/core/testing';
import { SerieService } from './serie.service';

describe('Service: Serie', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerieService],
      imports:[HttpClientModule]
    });
  });

  it('should ...', inject([SerieService], (service: SerieService) => {
    expect(service).toBeTruthy();
  }));
});
