import { Component, OnInit,Input } from "@angular/core";
import { appservice } from "../service/applayout.service";
import { config_service } from '../service/config_service';
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  show_des: any;
  nb_pic: number;
  itemList: any;
  
  isLoading:boolean;


  @Input() loader:string='https://media.tenor.com/images/f864cbf3ea7916572605edd3b3fe637f/tenor.gif';
  @Input() height:number=200;
  @Input() width:number=200;
  @Input() image:string;

  
 itemsConfig = {
    "slidesToShow": 5, 
    "slidesToScroll": 5,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    // "dots":true,
    "infinite": false
  }
  
  pic_src: any = [
    "/assets/img/bird.jpg",
    "/assets/img/fox.jpg",
    "/assets/img/zoo.jpg"
  ];

  constructor(private app_sv: appservice,private config_sv : config_service) {
    this.isLoading=true;
  }

  ngOnInit() {
    this.nb_pic = 0;
    this.show_des = 1;

    this.app_sv.getreco().then(data => {
      console.log(data);
      this.itemList = data.Data.item_list;
    });
  }

hideLoader(i){

    document.getElementById("a"+i).style.display = "none";
    document.getElementById("img"+i).style.display="block";
    // this.isLoading=false;
  }
 
  
}
