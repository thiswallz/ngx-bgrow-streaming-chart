import {
  Component,
  HostListener,
  Input,
  AfterViewInit,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild
} from "@angular/core";
import * as smoo from "smoothie";

@Component({
  selector: "ngx-row-streaming-chart",
  template: `
  <canvas 
     width="400" 
     height="20" 
     #canvas 
     [ngStyle]="{'width': width+'px'}"></canvas>
  `,
  styles: [
    `
      canvas {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: -1;
        width: 100%;
        height: 100%;
      }
    `
  ]
})
export class NgxRowStreamingChartComponent implements OnInit, AfterViewInit {
  @ViewChild("canvas") canvasElement: ElementRef;

  @Input() props: any = {};
  @Input() tooltip: boolean = false;
  @Input() delay: number = 500;
  @Input() series: number = 1;
  @Input() seriesOptions: any = [];
  @Input() values = [0];

  chart: any;
  width: number = 0;
  dataSeries = [];

  constructor(private elRef: ElementRef, private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.width = this.calculateCanvasWidth();
    this.cdRef.detectChanges();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.width = this.calculateCanvasWidth();
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    console.log(this.props);
    const canvas = this.canvasElement.nativeElement;

    this.configurePosition();

    this.chart = new smoo.SmoothieChart({
      tooltip: this.tooltip,
      responsive: true,
      ...this.props
    });

    for (let i = 0; i < this.series; i++) {
      this.dataSeries = [...this.dataSeries, new smoo.TimeSeries()];
      this.chart.addTimeSeries(this.dataSeries[this.dataSeries.length - 1], {
        strokeStyle: "rgba(0, 255, 0, 1)",
        ...this.seriesOptions[i]
      });
    }

    this.chart.streamTo(<HTMLCanvasElement>canvas, this.delay);

    setInterval(() => {
      for (let i = 0; i < this.series; i++) {
        console.log(null, this.values[i]);
        this.dataSeries[i].append(
          Date.now(),
          parseFloat(String(this.values[i]))
        );
      }
    }, 500);
  }

  configurePosition() {
    const container = this.elRef.nativeElement.parentNode.parentNode;
    for (let i = 0; i < container.children.length; i++) {
      container.children[i].style.zIndex = 100;
      container.children[i].style.position = "relative";
    }
  }

  calculateCanvasWidth(): number {
    return this.elRef.nativeElement.parentNode.parentNode.offsetWidth;
  }
}
