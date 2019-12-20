import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-applayout',
  templateUrl: './applayout.component.html',
  styleUrls: ['./applayout.component.scss']
})
export class ApplayoutComponent implements OnInit {
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
      name: 'เสื่อกกประยุกต์',
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
  ]

  slides: any = [[]];
  config: any = "http://10.0.130.101:8080/dev/trainee/content/";

  url: SafeResourceUrl;
  video: any = [
    "B6TvrxUml9E",
    "tgbNymZ7vqY",
    "T2u0qBkUMQg",
    "1DnPn-bZGO8",
    "QMB3gze_A0k"
  ];
  vdo_id: any;

  constructor(private dom: DomSanitizer) {
    this.url = dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video[0]);
    this.vdo_id = 0;
  }

  ngOnInit() {
    this.slides = this.slideitem(this.items, 2);
  }

  slideitem(arr, itemsize) {
    let a = [];
    console.log(a);
    for (let i = 0, len = arr.length; i < len; i += itemsize) {
      a.push(arr.slice(i, i + itemsize));
    }
    return a;
  }

  showvdo(dd) {
    this.url = this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video[dd]);
  }
}