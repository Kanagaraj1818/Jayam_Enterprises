import { Injectable } from '@angular/core';
import { Services, ServicesList } from './body-interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  electronicServices:ServicesList = 
    {services:[{
    name:"Electrical Service",
    img:"..\\..\\..\\..\\assets\\compressed\\electrician.svg"
  },{
    name:"A/C Service",
    img:"..\\..\\..\\..\\assets\\compressed\\ac.svg"
  },{
    name:"Washing M/C Service",
    img:"..\\..\\..\\..\\assets\\compressed\\washing.svg"
  },{
    name:"Refrigirator Service",
    img:"..\\..\\..\\..\\assets\\compressed\\fridge.svg"
  }]};
  completeHomeServices1:ServicesList ={
    services:[{
      name:"Plumbing Service",
      img:"..\\..\\..\\..\\assets\\compressed\\plumbing.svg"
    },{
      name:"Carpenter Service",
      img:"..\\..\\..\\..\\assets\\compressed\\carpenter.svg"
    },{
      name:"CCTV Installation/Service",
      img:"..\\..\\..\\..\\assets\\compressed\\cctv.svg"
    }]
  }
  completeHomeServices2:ServicesList ={
    services:[{
      name:"Civil Work",
      img:"..\\..\\..\\..\\assets\\compressed\\civil.svg"
    },{
      name:"Welding Service",
      img:"..\\..\\..\\..\\assets\\compressed\\welding.svg"
    },{
      name:"Painter Service",
      img:"..\\..\\..\\..\\assets\\compressed\\painter.svg"
    }]
  }
  consultancyServices:Services={
    name:"Consultancy Services",
    img:"..\\..\\..\\..\\assets\\compressed\\consultancy.svg"
  }
  constructor() { }
  
}
