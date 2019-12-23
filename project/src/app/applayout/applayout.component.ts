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
  itemList: any;
  item: any;

  pageItem: any;
  page_Item: any;
  page_i: any;
  page: any;
  config: any = "http://10.0.130.101:8080/dev/trainee/content/";
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
    this.page = 1;
    // this.page_i = 1;
  }

  ngOnInit() {

    this.appservice.getitemall()
      .then((data: any) => {
        this.itemList = data.Data.list_item;
        this.pageItem = data.Data.count_item;
      })
      .catch(error => {

      })

      this.appservice.getitemall2()
      .then((data: any) => {
        this.item = data.Data.list_item;
        this.page_Item = data.Data.count_item;
      })
      .catch(error => {

      })
  }

  showvdo(dd) {
    this.url = this.dom.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video[dd]);
  }

  pageitem(page_item){
    console.log(page_item);
    this.appservice.getpage(page_item)
      .then((data: any) => {
        this.itemList = data.Data.list_item;
        this.pageItem = data.Data.count_item;
      })
  }

  page_item(pageitem){
    console.log(pageitem);
    this.appservice.getpage2(pageitem)
      .then((data: any) => {
        this.item = data.Data.list_item;
        this.page_Item = data.Data.count_item;
      })
  }
}