import { Injectable } from '@angular/core';
import { Services, ServicesList } from './body-interface';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  electronicServices:ServicesList = 
    {services:[{
    name:"A/C Repair",
    img:"..\\..\\..\\..\\assets\\compressed\\ac.svg",
    background:"https://st4.depositphotos.com/1010613/24267/i/450/depositphotos_242671330-stock-photo-male-electrician-checking-air-conditioner.jpg"
  },{
    name:"Washing M/C Repair",
    img:"..\\..\\..\\..\\assets\\compressed\\washing.svg",
    background:"https://t3.ftcdn.net/jpg/01/98/65/94/240_F_198659488_BT7evs4AEwey5wqrllvQTZYGezk4YaCZ.jpg"
  },{
    name:"Refrigirator Repair",
    img:"..\\..\\..\\..\\assets\\compressed\\fridge.svg",
    background:"https://media.istockphoto.com/id/1128872850/photo/repairman-fixing-refrigerator-with-screwdriver.jpg?s=612x612&w=0&k=20&c=F6fgkzj1e_2x-diaozUqVhHuN967oY5bmlbaO5kD5Xk="
  }]};
  electronicServices1:ServicesList = {
    services:[
      {
        name:"Electrician",
        img:"..\\..\\..\\..\\assets\\compressed\\electrician.svg",
        background:"https://t4.ftcdn.net/jpg/01/70/17/97/240_F_170179753_piUSFjn4xlwAKaIU14gs6FnCVij2wckc.jpg"
      },{
        name:"CCTV Installation/Service",
        img:"..\\..\\..\\..\\assets\\compressed\\cctv.svg",
        background:"https://t3.ftcdn.net/jpg/05/00/53/80/240_F_500538090_TOhgoTRzZVvMuqzdpimk8JZIBCB5O01Z.jpg"
      }
    ]
  }
  completeHomeServices1:ServicesList ={
    services:[{
      name:"Plumber",
      img:"..\\..\\..\\..\\assets\\compressed\\plumbing.svg",
      background:"https://t3.ftcdn.net/jpg/03/29/58/14/240_F_329581450_931iXKUlekGxzv2rsDgRdlucndykJhkI.jpg"
    },{
      name:"Carpenter",
      img:"..\\..\\..\\..\\assets\\compressed\\carpenter.svg",
      background:"https://t3.ftcdn.net/jpg/01/99/14/82/240_F_199148220_O6Bhhp46zMisAXa0pSpTxhyEUYFiyFGC.jpg"
    },{
      name:"Painter",
      img:"..\\..\\..\\..\\assets\\compressed\\painter.svg",
      background:"https://t3.ftcdn.net/jpg/01/38/71/50/240_F_138715034_3P1ZpE44DMTBcce6iOQEVZGKK5zRfRiZ.jpg"
    }]
  }
  completeHomeServices2:ServicesList ={
    services:[{
      name:"Civil Work",
      img:"..\\..\\..\\..\\assets\\compressed\\civil.svg",
      background:"https://t4.ftcdn.net/jpg/06/33/49/87/240_F_633498752_gzCRsCLVTY7DIdAK1nK3HH81JDX7Dzva.jpg"
    },{
      name:"Steel Work",
      img:"..\\..\\..\\..\\assets\\compressed\\welding.svg",
      background:"https://t3.ftcdn.net/jpg/04/10/03/94/240_F_410039407_8fyFaq1uSrWN9ZA5OQ7yANBwUNzcL52J.jpg"
    }]
  }
  consultancyServices:Services={
    name:"Consultancy Services",
    img:"..\\..\\..\\..\\assets\\compressed\\consultancy.svg",
    background:"https://static.photodexia.com/original/repository/d-enblog/01490db2605b63d90313c3378471c94565c2f4399f74c/d5a625cd1825a9dbbf3745af2d1c71777dff1b6c472a76f2b5b2cd910a7b177d_65c2f4363959b.webp"
  }
  currentCatogory$:Observable<string>;
  constructor(private router:Router) {
    this.currentCatogory$ = new BehaviorSubject('');
    if(sessionStorage.getItem('catogory')){
      let catogory =  sessionStorage.getItem('catogory');
      if(catogory)
      this.currentCatogory$ = new BehaviorSubject(catogory);
    }
    else router.navigateByUrl('/home');
   }

  selectedCatagory(value:string):void{
    this.currentCatogory$ = new BehaviorSubject(value);
    sessionStorage.setItem('catogory', value);
    this.router.navigateByUrl("/order-summary");
  }
}
