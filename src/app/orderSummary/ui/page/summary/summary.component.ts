import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../home/ui/features/header/header.component';
import { FooterComponent } from '../../../../home/ui/features/footer/footer.component';
import { HomeService } from '../../../../home/smart/data-access/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
constructor(public service:HomeService){}
}
