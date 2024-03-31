import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../home/ui/features/header/header.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}
