import { Injectable } from '@angular/core';
import { Data, Post, Services, ServicesList } from './body-interface';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, interval, timeInterval } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegexConstants, RegexValidator } from '../../../orderSummary/smart/data-access/validator';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  catogory!: string;
  postUrl: string = "https://jayam-enterprises-backend.onrender.com/sendmail";
  services: ServicesList[] = [{
    services: [{
      name: "AC Repair",
      img: "..\\..\\..\\..\\assets\\compressed\\ac.svg",
      background: "..\\..\\..\\..\\assets\\pics\\ac.jpg"
    }, {
      name: "Washing M/C Repair",
      img: "..\\..\\..\\..\\assets\\compressed\\washing.svg",
      background: "..\\..\\..\\..\\assets\\pics\\washing.jpg"
    }, {
      name: "Refrigirator Repair",
      img: "..\\..\\..\\..\\assets\\compressed\\fridge.svg",
      background: "..\\..\\..\\..\\assets\\pics\\fridge.jpg"
    }], name: "Electrical and Electronic Repair"
  },
  {
    services: [
      {
        name: "Electrician",
        img: "..\\..\\..\\..\\assets\\compressed\\electrician.svg",
        background: "..\\..\\..\\..\\assets\\pics\\electrician.jpg"
      }, {
        name: "CCTV Installation/Service",
        img: "..\\..\\..\\..\\assets\\compressed\\cctv.svg",
        background: "..\\..\\..\\..\\assets\\pics\\cctv.jpg"
      },{
        name: "RO/Water Purifier",
        img: "..\\..\\..\\..\\assets\\compressed\\ro.svg",
        background: "..\\..\\..\\..\\assets\\pics\\ro.jpg"
      }
    ], name: ""
  }, {
    services: [{
      name: "Plumber",
      img: "..\\..\\..\\..\\assets\\compressed\\plumbing.svg",
      background: "..\\..\\..\\..\\assets\\pics\\plumber.jpg"
    }, {
      name: "Carpenter",
      img: "..\\..\\..\\..\\assets\\compressed\\carpenter.svg",
      background: "..\\..\\..\\..\\assets\\pics\\carpenter.jpg"
    }, {
      name: "Painter",
      img: "..\\..\\..\\..\\assets\\compressed\\painter.svg",
      background: "..\\..\\..\\..\\assets\\pics\\painter.jpg"
    }], name: "House Repair"
  },
  {
    services: [{
      name: "Civil Work",
      img: "..\\..\\..\\..\\assets\\compressed\\civil.svg",
      background: "..\\..\\..\\..\\assets\\pics\\civil.jpg"
    }, {
      name: "Steel Work",
      img: "..\\..\\..\\..\\assets\\compressed\\welding.svg",
      background: "..\\..\\..\\..\\assets\\pics\\steel.jpg"
    },{
      name: "Compressor Motor Repair",
      img: "..\\..\\..\\..\\assets\\compressed\\compressor.svg",
      background: "..\\..\\..\\..\\assets\\pics\\motor.jpg"
    }], name: ""
  },
  {
    services: [
      {
        name: "Consultancy Services",
        img: "..\\..\\..\\..\\assets\\compressed\\consultancy.svg",
        background: "..\\..\\..\\..\\assets\\pics\\service.webp"
      }], name: "We are Providing Consultancy Service For Entire House"
  }
  ]
  currentCatogory$: Observable<string>;
  bookForm = new FormGroup({
    name: new FormControl(null, [Validators.required, RegexValidator(RegexConstants.Name)]),
    phoneNumber: new FormControl(null, [Validators.required, RegexValidator(RegexConstants.phoneNumber)])
  });
  constructor(private router: Router, private http: HttpClient) {
    this.currentCatogory$ = new BehaviorSubject('');
    if (sessionStorage.getItem('catogory')) {
      let catogory = sessionStorage.getItem('catogory');
      if (catogory) {
        this.catogory = catogory;
        this.currentCatogory$ = new BehaviorSubject(catogory);
      }
    }
    else router.navigateByUrl('/home');
  }
  Response: boolean = false;
  load: boolean = false;

  selectedCatagory(value: string): void {
    this.currentCatogory$ = new BehaviorSubject(value);
    sessionStorage.setItem('catogory', value);
    this.router.navigateByUrl("/orders");
  }
  mailPost(name: string, number: string) {
    this.currentCatogory$.subscribe((data) => {
      this.catogory = data
    })
    if (this.catogory) {
      let post: Post = {
        name: name,
        phoneNumber: number,
        catogory: this.catogory
      }
      this.load = true;
      this.http.post<Data>(this.postUrl, post).subscribe((data) => {
        if (data.accepted)
          this.Response = true;
        this.load = false;
      }
      )
    }
  }

  searchText!: string;
  onKey(value: string) {
    this.searchText = value;
  }
}
