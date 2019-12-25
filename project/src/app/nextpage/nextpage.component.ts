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
  ) {
    this.getrouter.paramMap.subscribe(itemid => {
      this.id = itemid.get("id");
    }); }

  ngOnInit() {
  }

}
