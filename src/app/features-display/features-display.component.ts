import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  STAFF_KFC,
  STAFF_BURGER_KING,
  STAFF_LOS_POLLOS,
  RESTAURANTS,
  ARTICLE_BURGER_KING,
  ARTICLE_KFC,
  ARTICLE_LOS_POLLOS,
} from '../../../src/constants/mockedData';


@Component({
  selector: 'app-features-display',
  templateUrl: './features-display.component.html',
  styleUrls: ['./features-display.component.scss']
})
export class FeaturesDisplayComponent implements OnInit {
  title: string;
  package: string;
  staff = STAFF_BURGER_KING;
  articles = ARTICLE_BURGER_KING;
  restaurants = RESTAURANTS;
  selectedRestaurant: string;

  constructor(private router: Router) {
    this.selectedRestaurant = 'burger';
    if (this.router.url === '/forecast/staff') {
      this.title = 'Forecast staff';
      this.package = 'staff';
    } else if (this.router.url === '/forecast/article') {
      this.title = 'Forecast article';
      this.package = 'article';
    } else if (this.router.url === '/forecast/table') {
      this.title = 'Forecast table';
      this.package = 'table';
    }
   }

  ngOnInit() {
  }

  selectRestaurant(value) {
    if (value === 'kfc') {
      this.staff = STAFF_KFC;
      this.articles = ARTICLE_KFC;
    } else if (value === 'burger') {
      this.staff = STAFF_BURGER_KING;
      this.articles = ARTICLE_BURGER_KING;
    } else if (value === 'pollos') {
      this.staff = STAFF_LOS_POLLOS;
      this.articles = ARTICLE_LOS_POLLOS;
    }
  }

}
