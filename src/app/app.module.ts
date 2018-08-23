import { BrowserModule } from "@angular/platform-browser";
import { MatTableModule } from "@angular/material/table";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxRowStreamingChartModule } from "ngx-row-streaming-chart";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatTableModule,
    NgxRowStreamingChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
