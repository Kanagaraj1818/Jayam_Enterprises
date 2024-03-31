import { Component } from '@angular/core';
import { SummaryComponent } from '../../../ui/page/summary/summary.component';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [SummaryComponent],
  templateUrl: './order-summary.component.html',
  styleUrl: './order-summary.component.scss'
})
export class OrderSummaryComponent {

}
