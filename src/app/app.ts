import {Component} from '@angular/core';
import { HomeComponent } from './home-component/home-component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Homes';
}
