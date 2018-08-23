import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRowStreamingChartComponent } from './ngx-row-streaming-chart.component';

describe('NgxRowStreamingChartComponent', () => {
  let component: NgxRowStreamingChartComponent;
  let fixture: ComponentFixture<NgxRowStreamingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxRowStreamingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxRowStreamingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
