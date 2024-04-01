import { Component } from '@angular/core';
import { HomeService } from '../../../smart/data-access/home.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  constructor(public service:HomeService){}
  selectedCatagory(selectedService:string):void{
    this.service.selectedCatagory(selectedService);
  }
}
