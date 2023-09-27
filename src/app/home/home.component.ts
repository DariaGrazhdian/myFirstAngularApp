import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {HousingLocation} from '../housinglocation';
import {HousingService} from '../housing.service';
import {FilterHomesPipe} from "../filter-homes.pipe";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    FilterHomesPipe,
    FormsModule
  ],
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  term = ''

  constructor() {
    this.housingService.getAllHousingLocations().subscribe((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;

    });
  }
}
