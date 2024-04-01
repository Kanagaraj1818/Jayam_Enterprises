import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../home/ui/features/header/header.component';
import { FooterComponent } from '../../../../home/ui/features/footer/footer.component';
import { CatogoryComponent } from '../../features/catogory/catogory.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CatogoryComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
}
