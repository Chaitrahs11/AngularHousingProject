import {Component} from '@angular/core';
import { HomeComponent } from './home-component/home-component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'Homes';
}
