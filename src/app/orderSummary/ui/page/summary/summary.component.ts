import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../home/ui/features/header/header.component';
import { FooterComponent } from '../../../../home/ui/features/footer/footer.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}
