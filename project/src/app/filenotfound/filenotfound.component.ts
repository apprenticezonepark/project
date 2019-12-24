import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filenotfound',
  templateUrl: './filenotfound.component.html',
  styleUrls: ['./filenotfound.component.scss']
})
export class FilenotfoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  pagehome() {
    this.router.navigate([""]);
  }


}
