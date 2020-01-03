import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.scss']
})
export class NextpageComponent implements OnInit {
ic : any;
ig : any;
isg : any;
  constructor(
    private getrouter: ActivatedRoute
  ) {
    this.getrouter.paramMap.subscribe(itemid => {
      this.ic = itemid.get("ic");
      this.ig = itemid.get("ig");
      this.isg = itemid.get("isg");
    }); }

  ngOnInit() {
  }

}
