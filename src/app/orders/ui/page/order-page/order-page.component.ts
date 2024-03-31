import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../home/ui/features/header/header.component';
import { FooterComponent } from '../../../../home/ui/features/footer/footer.component';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.scss'
})
export class OrderPageComponent {

}
