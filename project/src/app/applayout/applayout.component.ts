import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { appservice } from '../service/applayout.service';

@Component({
  selector: 'app-applayout',
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.scss']
})
export class ApplayoutComponent implements OnInit {

  title = 'ngSlick';
  slideConfig = {
    autoplay: 3000,
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":true,
    "infinite": false
  };
  items = [
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'ข้าวหอมมะลิ',
      price: '120'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'น้ำสมุนไพร',
      price: '119'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'กระเป๋า',
      price: '200'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'เสื่อกก',
      price: '450'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'ข้าวไรซ์เบอรี่',
      price: '180'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'สบู่สมุนไพร',
      price: '45'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'ข้าวตัง',
      price: '30'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'กล้วยน้ำว้า',
      price: '80'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'ตะกร้าไม้ไผ่',
      price: '329'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'เสื้อมัดย้อม',
      price: '200'
    },
  ]
  itemsConfig = {
    "slidesToShow": 5, 
    "slidesToScroll": 5,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":true,
    "infinite": false
  }
  item = [
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'ข้าวหอมมะลิ',
      price: '120'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'น้ำสมุนไพร',
      price: '119'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'กระเป๋า',
      price: '200'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'สบู่สมุนไพร',
      price: '45'
    }
  ]
  itemConfig = {
    "slidesToShow": 2, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":true,
    "infinite": false
  }
  itemall = [
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'ข้าวหอมมะลิ',
      price: '120'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'น้ำสมุนไพร',
      price: '119'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'กระเป๋า',
      price: '200'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'เสื่อกก',
      price: '450'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'ข้าวไรซ์เบอรี่',
      price: '180'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'สบู่สมุนไพร',
      price: '45'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'ข้าวตัง',
      price: '30'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'กล้วยน้ำว้า',
      price: '80'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'กล้วยไข่',
      price: '100'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'กล้วยฉาบ',
      price: '50'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'น้ำผึ้ง',
      price: '200'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'กำไล',
      price: '80'
    }
  ]
  url: SafeResourceUrl;
  video: any = [
    "tgbNymZ7vqY",
    "T2u0qBkUMQg",
    "1DnPn-bZGO8",
    "QMB3gze_A0k",
    "B6TvrxUml9E"
  ];
  vdo_id: any;

  constructor(private dom: DomSanitizer, private http: HttpClient, private appservice: appservice) {
    this.url = dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video[0]);
    this.vdo_id = 0;
  }

  ngOnInit() { }

  showvdo(dd) {
    this.url = this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video[dd]);
  }

  slickInit(e) {
    // console.log('slick initialized');
  }
  
  breakpoint(e) {
    // console.log('breakpoint');
  }
  
  afterChange(e) {
    // console.log('afterChange');
  }
  
  beforeChange(e) {
    // console.log('beforeChange');
  }
}