import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  id_bf: string;
  data_test : any = ['test1','test2','test3','test4','test5']

  ngOnInit() {
    this.id_bf = "1";
    document.getElementById(this.id_bf).classList.add("active");
  }

  active_menu(id) {
    if (id != null) {
      document.getElementById(id).classList.add("active");
      if (id != this.id_bf) {
        document.getElementById(this.id_bf).classList.remove("active");
        this.id_bf = id;
      }
    } else if (id == null) {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }


}
