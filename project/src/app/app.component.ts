import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "project";
  id_bf: string ;
  data_test: any = ["test1", "test2", "test3", "test4", "test5"];
  data_menubar: any = [
    "หน้าหลัก",
    "เกษตรอินทรีย์ และอาหารปลอดภัย",
    "ผลิตผลทางการเกษตร",
    "พันธุ์พืช",
    "ผลิตภัณฑ์ชุมชน",
    "บริการด้านการเกษตร",
    "ชุมชนต้องเที่ยว",
    "สินค้าตามภูมิภาค",
    "ของดี 77 จังหวัด"
  ];

  data_te: any = [
    {
      name: "หน้าหลัก",
      list: [
          {
            namelist : 'test1',
            test: ["1", "2", "3"]
          },
          {
            namelist : 'test2',
            test: ["1", "2", "3"],
          },
          {
            namelist : 'test3',
            test: ["1", "2", "3"]
          }
        
      ]
    },
    {
      name: "เกษตรอินทรีย์ และอาหารปลอดภัย",
      list: [
        {
          test1: ["1", "2", "3"],
          test2: ["1", "2", "3"],
          test3: ["1", "2", "3"]
        }
      ]
    }
  ];

  ngOnInit() {
    console.log(this.data_te);
    this.id_bf='1';
      document.getElementById(this.id_bf).classList.add("active");

    

  }

  active_menu(id) {
    if (id != null) {
      document.getElementById(id).classList.add("active");
      if (id != this.id_bf) {
        document.getElementById(this.id_bf).classList.remove("active");
        this.id_bf = id;
      }
    } 
    else if (id == null) {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  }
}
