import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HomeService } from '../../../smart/data-access/home.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // loginPopup: boolean = false;
  constructor(public router:Router,private service : HomeService) { }
  onKey(event:any){
    this.service.onKey(event.target.value);
  }
}
