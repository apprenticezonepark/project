import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.scss']
})
export class NextpageComponent implements OnInit {
id : any;
  constructor(
    private getrouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getrouter.paramMap.subscribe(itemid => {
      this.id = itemid.get("id");
      // console.log(this.id);
    }); 

    this.getrouter.queryParams.subscribe(params => {
      if(params.ig_id != undefined){
        console.log('ig_id = '+params.ig_id);
      }
      else if(params.isg_id != undefined){
      console.log('isg_id = '+params.isg_id)
      };
    });
  }

}
