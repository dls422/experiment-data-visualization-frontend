import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CorrelationTableComponent } from './correlation-table/correlation-table.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { RecentExperimentTrackerComponent } from './recent-experiment-tracker/recent-experiment-tracker.component';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CorrelationTableComponent, ScatterplotComponent, RecentExperimentTrackerComponent, NgxEchartsDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    provideEcharts(),
  ]
})
export class AppComponent {
  title = 'dashboard-frontend';
}
