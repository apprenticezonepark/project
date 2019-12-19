import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applayout',
  templateUrl:  './applayout.component.html',
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
      name: 'ข้าวตังหน้าหมูหย็อง',
      price: '30'
    },
    {
      category: 'ผลิตภัณฑ์ชุมชน',
      name: 'กล้วยน้ำว้า',
      price: '80'
    },
  ]

  slides: any = [];

  constructor() { }

  ngOnInit() {
    this.slides = this.slideitem(this.items, 4);
  }

  slideitem(arr, itemsize){
    let a = [];
    for (let i =0, len = arr.length; i < len; i += itemsize){
      a.push(arr.slice(i, i + itemsize));
    }
  }

}
