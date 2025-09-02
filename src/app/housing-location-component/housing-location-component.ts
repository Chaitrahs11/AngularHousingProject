
import {Component, input} from '@angular/core';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location-component',
  imports: [],
  templateUrl: './housing-location-component.html',
  styleUrls: ['./housing-location-component.css']
})
export class HousingLocationComponent {
  housingLocation1 = input.required<Housinglocation>();

}
