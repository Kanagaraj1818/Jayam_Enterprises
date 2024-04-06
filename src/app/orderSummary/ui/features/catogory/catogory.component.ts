import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeService } from '../../../../home/smart/data-access/home.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-catogory',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './catogory.component.html',
  styleUrl: './catogory.component.scss'
})
export class CatogoryComponent {
  form!:FormGroup
  submitCheck:boolean=false;
  another:boolean=false;
  constructor(public service:HomeService){
    this.form = this.service.bookForm;
  }
  submit(){
    this.submitCheck = true;
    if(this.form.valid){
      this.service.mailPost(this.form.get('name')?.value,this.form.get('phoneNumber')?.value)
      this.form.reset();
      this.submitCheck = false;
    } 
  }
}
