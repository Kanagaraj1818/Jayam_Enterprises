import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeService } from '../../../../home/smart/data-access/home.service';

@Component({
  selector: 'app-catogory',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catogory.component.html',
  styleUrl: './catogory.component.scss'
})
export class CatogoryComponent {
  constructor(public service:HomeService){}
}
