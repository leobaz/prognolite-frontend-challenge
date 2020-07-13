import { Component, OnInit } from '@angular/core';
import {
  ARTICLE_CHART_DATA,
  STAFF_CHART_DATA,
  STAFF_TURNOVER_CHART
} from '../../../src/constants/mockedData';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  ARTICLE_CHART_DATA: any[];
  STAFF_CHART_DATA: any[];
  STAFF_TURNOVER_CHART: any[];
  view: any;

  colorScheme = {
    domain: ['#19b7d3', '#151B25', '#AAAAAA', '#ff7a59']
  };

  constructor() {
    Object.assign(this, { ARTICLE_CHART_DATA });
    Object.assign(this, { STAFF_CHART_DATA });
    Object.assign(this, { STAFF_TURNOVER_CHART });
    this.view = [innerWidth / 1.5, 400];
  }
}
