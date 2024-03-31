import { Component } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { BodyComponent } from '../../features/body/body.component';
import { FooterComponent } from '../../features/footer/footer.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent,BodyComponent,FooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
