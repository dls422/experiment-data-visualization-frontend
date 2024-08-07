import { Component } from '@angular/core';
import * as experimentData from '../../../data/Example Front End Dataset.json';

@Component({
  selector: 'app-recent-experiment-tracker',
  standalone: true,
  imports: [],
  templateUrl: './recent-experiment-tracker.component.html',
  styleUrl: './recent-experiment-tracker.component.scss'
})
export class RecentExperimentTrackerComponent {
  recent = 0;
  modes = ["month", "week", "day"];
  recent_arr = [0, 0, 0];
  current_mode = "month";
  data: any = experimentData;
  today = new Date("2017-01-18");

  constructor() {
  }

  ngOnInit() {
    const entry_keys = Object.keys(this.data);
    for (const entry of entry_keys) {
      if (entry != "default") {
        var year = entry.slice(0, 4);
        var month = entry.slice(4, 6);
        var day = entry.slice(6, 8);
        var combined = year + "-" + month + "-" + day;
        var date = new Date(combined);
        let Difference_In_Time = this.today.getTime() - date.getTime();
        let days_diff = Math.round(Difference_In_Time / (1000 * 3600 * 24));
        if (days_diff <= 31){
          this.recent_arr[0] += 1;
        }
        if (days_diff <= 7){
          this.recent_arr[1] += 1;
        }
        if (days_diff <= 1){
          this.recent_arr[2] += 1;
        }
      }
    }
    this.recent = this.recent_arr[0];
  }

  updateRecent(mode: string){
    this.current_mode = mode;
    if (this.current_mode == "month") {
      this.recent = this.recent_arr[0]
    }
    if (this.current_mode == "week") {
      this.recent = this.recent_arr[1]
    }
    if (this.current_mode == "day") {
      this.recent = this.recent_arr[2]
    }
  }
}
