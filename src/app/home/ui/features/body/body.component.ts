import { Component } from '@angular/core';
import { HomeService } from '../../../smart/data-access/home.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  constructor(public service:HomeService){}
}
