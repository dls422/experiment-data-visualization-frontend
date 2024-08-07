import { Component } from '@angular/core';
import * as experimentData from '../../../data/Example Front End Dataset.json';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
import { CallbackDataParams } from 'echarts/types/dist/shared.js'


@Component({
  selector: 'app-scatterplot',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './scatterplot.component.html',
  styleUrl: './scatterplot.component.scss',
  providers: [
    provideEcharts(),
  ]
})
export class ScatterplotComponent {
  title = 'Experiment Data';
  data: any = experimentData;
  options: EChartsOption = {};
  selected_input = "Polymer 1";
  selected_output = "Viscosity";
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
    var scatter_data = []
    var input_list = []
    var output_list = []
    for (const entry of entry_keys) {
      if (entry != "default") {
        const data_point = [this.data[entry]["inputs"]["Polymer 1"], this.data[entry]["outputs"]["Viscosity"]]
        scatter_data.push(data_point)
      }
    }
    this.options = {
      title: {
        text: "Polymer 1 vs Viscosity",
        left: 'center',
        top: 0
      },
      tooltip: {
        trigger: 'item',
        formatter: (params) => {
          let p = params as CallbackDataParams
          //@ts-ignore
          return this.selected_input + ': ' + p.data[0] + '<br />' + this.selected_output + ': ' + p.data[1]
      }
      },
      xAxis: {
        name: 'Polymer 1'
      },
      yAxis: {
        name: 'Viscosity'
      },
      series: [
        {
          symbolSize: 15,
          data: scatter_data,
          type: 'scatter',     
        },
        
      ],
      
    };
  }

  updateInput(feature: string){
    this.selected_input = feature;
    var scatter_data = []
    const entry_keys = Object.keys(this.data);
    for (const entry of entry_keys) {
      if (entry != "default") {
        const data_point = [this.data[entry]["inputs"][this.selected_input], this.data[entry]["outputs"][this.selected_output]]
        scatter_data.push(data_point)
      }
    }
    this.options = {
      title: {
        text: this.selected_input + " vs " + this.selected_output,
        left: 'center',
        top: 0
      },
      tooltip: {
        trigger: 'item',
        formatter: (params) => {
          let p = params as CallbackDataParams
          //@ts-ignore
          return this.selected_input + ': ' + p.data[0] + '<br />' + this.selected_output + ': ' + p.data[1]
      }
      },
      xAxis: {
        name: this.selected_input
      },
      yAxis: {
        name: this.selected_output
      },
      series: [
        {
          symbolSize: 15,
          data: scatter_data,
          type: 'scatter'
        },
        {
          label: { show: true, fontSize: 16 },
          labelLayout: { dx: -20 },
          encode: { label: 2, tooltip: 1 }
        }
      ]
    };
  }

  updateOutput(feature: string){
    this.selected_output = feature;
    var scatter_data = []
    const entry_keys = Object.keys(this.data);
    for (const entry of entry_keys) {
      if (entry != "default") {
        const data_point = [this.data[entry]["inputs"][this.selected_input], this.data[entry]["outputs"][this.selected_output]]
        scatter_data.push(data_point)
      }
    }
    this.options = {
      title: {
        text: this.selected_input + " vs " + this.selected_output,
        left: 'center',
        top: 0
      },
      tooltip: {
        trigger: 'item',
        formatter: (params) => {
          let p = params as CallbackDataParams
          //@ts-ignore
          return this.selected_input + ': ' + p.data[0] + '<br />' + this.selected_output + ': ' + p.data[1]
      }
      },
      xAxis: {
        name: this.selected_input
      },
      yAxis: {
        name: this.selected_output
      },
      series: [
        {
          symbolSize: 15,
          data: scatter_data,
          type: 'scatter'
        }
      ]
    };
  }
}
