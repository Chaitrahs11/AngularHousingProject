
import {Component, input} from '@angular/core';
import { Housinglocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location-component',
  imports: [RouterModule],
  templateUrl: './housing-location-component.html',
  styleUrls: ['./housing-location-component.css']
})
export class HousingLocationComponent {
  housingLocation1 = input.required<Housinglocation>();

}
