import { TestBed, inject } from '@angular/core/testing';

import { NgxRowStreamingChartService } from './ngx-row-streaming-chart.service';

describe('NgxRowStreamingChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxRowStreamingChartService]
    });
  });

  it('should be created', inject([NgxRowStreamingChartService], (service: NgxRowStreamingChartService) => {
    expect(service).toBeTruthy();
  }));
});
