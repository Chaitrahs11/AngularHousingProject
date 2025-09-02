import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location-component/housing-location-component';
import { Housinglocation } from '../housinglocation';
import { Housing } from '../housing';

@Component({
  selector: 'app-home-component',
  imports: [HousingLocationComponent],
  templateUrl: './home-component.html',
  styleUrls:['./home-component.css']
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  housingLocationList: Housinglocation[] =  [];
  housingService:Housing=inject(Housing);
constructor(){
  this.housingLocationList=this.housingService.getAllHousingLocations(); 

  }
}


