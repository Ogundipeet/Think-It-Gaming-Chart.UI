/* eslint-disable import/prefer-default-export, no-empty-function, no-useless-constructor */
import { Component, OnInit } from '@angular/core';
import { GamingChartService } from '../shared/gaming-chart.service';

@Component({
  selector: 'app-gaming-chart',
  templateUrl: './gaming-chart.component.html',
  styleUrls: ['./gaming-chart.component.css'],
})
export class GamingChartComponent implements OnInit {
  // eslint-disable-next-line no-unused-vars
  constructor(public service: GamingChartService) {}

  ngOnInit(): void {
    this.service.getTopPlaytimeByPlaytime();
  }

  getTotalPlaytimeByUserId(userId: number) {
    this.service.getTopPlaytimeByUserId(userId);
  }

  getTopGameByTotalPlaytime(minPlaytime?: number, maxPlaytime?: number) {
    this.service.getTopPlaytimeByPlaytime(minPlaytime, maxPlaytime);
  }
}
