import { Component } from '@angular/core';
import { HomePageComponent } from '../../../ui/page/home-page/home-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomePageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
