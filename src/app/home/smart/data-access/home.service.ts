import { Injectable } from '@angular/core';
import { Services, ServicesList } from './body-interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  electronicServices:ServicesList = 
    {services:[{
    name:"Electrical Service",
    img:"https://cdn-icons-png.flaticon.com/512/8734/8734819.png"
  },{
    name:"A/C Service",
    img:"https://cdn-icons-png.flaticon.com/128/4752/4752795.png"
  },{
    name:"Washing M/C Service",
    img:"https://cdn-icons-png.flaticon.com/128/4003/4003447.png"
  },{
    name:"Refrigirator Service",
    img:"https://cdn-icons-png.flaticon.com/128/11252/11252671.png"
  }]};
  completeHomeServices1:ServicesList ={
    services:[{
      name:"Plumbing Service",
      img:"https://cdn-icons-png.flaticon.com/128/12029/12029477.png"
    },{
      name:"Carpenter Service",
      img:"https://cdn-icons-png.flaticon.com/128/360/360484.png"
    },{
      name:"CCTV Installation/Service",
      img:"https://cdn-icons-png.flaticon.com/128/10205/10205839.png"
    }]
  }
  completeHomeServices2:ServicesList ={
    services:[{
      name:"Civil Work",
      img:"https://cdn-icons-png.flaticon.com/128/9408/9408188.png"
    },{
      name:"Welding Service",
      img:"https://cdn-icons-png.flaticon.com/128/10342/10342223.png"
    },{
      name:"Painter Service",
      img:"https://cdn-icons-png.flaticon.com/128/1995/1995491.png"
    }]
  }
  consultancyServices:Services={
    name:"Consultancy Services",
    img:"https://cdn-icons-png.flaticon.com/128/12885/12885376.png"
  }
  constructor() { }
  
}
