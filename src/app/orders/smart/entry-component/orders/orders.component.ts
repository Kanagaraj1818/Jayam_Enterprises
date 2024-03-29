import { Component } from '@angular/core';
import { OrderPageComponent } from '../../../ui/page/order-page/order-page.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [OrderPageComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

}
