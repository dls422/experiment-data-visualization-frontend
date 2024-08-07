import { Component } from '@angular/core';
import * as experimentData from '../../../data/Example Front End Dataset.json';

@Component({
  selector: 'app-correlation-table',
  standalone: true,
  imports: [],
  templateUrl: './correlation-table.component.html',
  styleUrl: './correlation-table.component.scss'
})
export class CorrelationTableComponent {
  sort_arr = [true, true, true];
  selected_output = "Viscosity";
  table_list : any[] = [];
  data: any = experimentData;
  inputs = [         "Polymer 1",
    "Polymer 2",
    "Polymer 3",
    "Polymer 4",
    "Carbon Black High Grade",
    "Carbon Black Low Grade",
    "Silica Filler 1",
    "Silica Filler 2",
    "Plasticizer 1",
    "Plasticizer 2",
    "Plasticizer 3",
    "Antioxidant",
    "Coloring Pigment",
    "Co-Agent 1",
    "Co-Agent 2",
    "Co-Agent 3",
    "Curing Agent 1",
    "Curing Agent 2",
    "Oven Temperature"];
  outputs = ["Viscosity",
         "Cure Time",
         "Elongation",
         "Tensile Strength",
         "Compression Set"];


  constructor() {
  }

  ngOnInit() {
    const entry_keys = Object.keys(this.data);
    for (const input of this.inputs) {
      var x = [];
      var y = [];
      if (input != "default") {
        for (const entry of entry_keys){
          if (entry != "default") {
            x.push(this.data[entry]['inputs'][input])
            y.push(this.data[entry]['outputs'][this.selected_output])
          }
        }
      }
      const correlation = this.calculateCorrelation(x, y);
      const abs = Math.abs(correlation);
      this.table_list.push([input, correlation, abs]);
      
      }
    console.log(this.table_list);
    }

    updateOutput(feature: string){
      this.selected_output = feature;
      var new_table_list = []
      const entry_keys = Object.keys(this.data);
      for (const input of this.inputs) {
        var x = [];
        var y = [];
        if (input != "default") {
          for (const entry of entry_keys){
            if (entry != "default") {
              x.push(this.data[entry]['inputs'][input])
              y.push(this.data[entry]['outputs'][this.selected_output])
            }
          }
        }
        const correlation = this.calculateCorrelation(x, y);
        const abs = Math.abs(correlation);
        new_table_list.push([input, correlation, abs]);
      
      }
      this.table_list = new_table_list;
    }


    calculateCorrelation(x: any[], y: any[]){

      const µ = { x: this.calculateAverage(x), y: this.calculateAverage(y) };
      const s = { x: this.calculateStdDev(x), y: this.calculateStdDev(y) };
    
      const addedMultipliedDifferences = x
        .map((val, i) => (val - µ.x) * (y[i] - µ.y))
        .reduce((sum, v) => sum + v, 0);
    
      const dividedByDevs = addedMultipliedDifferences / (s.x * s.y);
    
      const r = dividedByDevs / (x.length - 1);
    

      return  Math.round(r * 10 ** 4 + (r >= 0 ? 1 : -1) * 0.0001) / 10 ** 4;
    
    }

    calculateAverage(x: any[]){
      return x.reduce((sum, v) => sum + v, 0) / x.length
    }

    calculateStdDev(x: any[]){
      const µ = this.calculateAverage(x);
      const addedSquareDiffs = x
        .map(val => val - µ)
        .map(diff => diff ** 2)
        .reduce((sum, v) => sum + v, 0);
      const variance = addedSquareDiffs / (x.length - 1);
      return Math.sqrt(variance);
    }

    sortTable(col: number){
      if (col > 0){
        this.table_list.sort(function(a, b){return a[col]-b[col]});
      }
      else{
        console.log(this.table_list)
        this.table_list.sort(function(a, b){return a[col].localeCompare(b[col])});
      }
      if (this.sort_arr[col]){
        this.table_list.reverse();
        this.sort_arr[col] = false;
      }
      else {
        this.sort_arr[col] = true;
      }
    }


  }

