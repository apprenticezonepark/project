import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  show_des :any ;
  nb_pic : number;
  pic_src:any = ['/assets/img/bird.jpg','/assets/img/fox.jpg'];
  constructor() { }

  ngOnInit() {
    this.nb_pic = 0 ;
    this.show_des = 1;
  }

}
