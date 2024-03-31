import { Injectable } from '@angular/core';
import { Services, ServicesList } from './body-interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  electronicServices:ServicesList = 
    {services:[{
    name:"A/C Repair",
    img:"..\\..\\..\\..\\assets\\compressed\\ac.svg"
  },{
    name:"Washing M/C Repair",
    img:"..\\..\\..\\..\\assets\\compressed\\washing.svg"
  },{
    name:"Refrigirator Repair",
    img:"..\\..\\..\\..\\assets\\compressed\\fridge.svg"
  }]};
  electronicServices1:ServicesList = {
    services:[
      {
        name:"Electrician",
        img:"..\\..\\..\\..\\assets\\compressed\\electrician.svg"
      },{
        name:"CCTV Installation/Service",
        img:"..\\..\\..\\..\\assets\\compressed\\cctv.svg"
      }
    ]
  }
  completeHomeServices1:ServicesList ={
    services:[{
      name:"Plumber",
      img:"..\\..\\..\\..\\assets\\compressed\\plumbing.svg"
    },{
      name:"Carpenter",
      img:"..\\..\\..\\..\\assets\\compressed\\carpenter.svg"
    },{
      name:"Painter",
      img:"..\\..\\..\\..\\assets\\compressed\\painter.svg"
    }]
  }
  completeHomeServices2:ServicesList ={
    services:[{
      name:"Civil Work",
      img:"..\\..\\..\\..\\assets\\compressed\\civil.svg"
    },{
      name:"Steel Work",
      img:"..\\..\\..\\..\\assets\\compressed\\welding.svg"
    }]
  }
  consultancyServices:Services={
    name:"Consultancy Services",
    img:"..\\..\\..\\..\\assets\\compressed\\consultancy.svg"
  }
  constructor() { }
  
}
