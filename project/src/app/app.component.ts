import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { appcomponentservice } from "./service/appcomponent.service";
import { appservice } from "./service/applayout.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "project";
  id_bf: string;
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

  // data_te: any;

  data_te: any = [
    {
      _id: "5c493c09c82d992e4c8f208e",
      ic_id: 7008,
      ic_code: "7008",
      ic_name: "เกษตรอินทรีย์ และอาหารปลอดภัย",
      inactive: false,
      create_by: 0,
      create_date: "2019-01-24T17:00:00.000Z",
      edit_by: 0,
      edit_date: "2019-01-24T17:00:00.000Z",
      wsp_ids: [1],
      content: {
        content_id: 2751,
        content_path: "img/06201920102452057992c7_food-and-farming-products.jpg"
      },
      groups: [
        {
          _id: "5c494844c82d992e4c8f4c83",
          ig_id: 7008,
          ic_id: 7008,
          ig_code: "7008",
          ig_name: "เกษตรอินทรีย์ และอาหารปลอดภัย",
          inactive: false,
          create_by: 0,
          create_date: "2018-07-28T17:00:00.000Z",
          edit_by: 0,
          edit_date: "2018-07-28T17:00:00.000Z",
          sub_groups: [
            {
              _id: "5c49497fc82d992e4c8f4ffa",
              isg_id: 7008,
              ig_id: 7008,
              isg_code: "7008",
              isg_name: "เกษตรอินทรีย์ และอาหารปลอดภัย",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            }
          ]
        }
      ]
    },
    {
      _id: "5c493c09c82d992e4c8f2090",
      ic_id: 7009,
      ic_code: "7009",
      ic_name: "ชุมชนต้องเที่ยว",
      inactive: false,
      create_by: 0,
      create_date: "2019-01-24T17:00:00.000Z",
      edit_by: 0,
      edit_date: "2019-01-24T17:00:00.000Z",
      wsp_ids: [1],
      content: {
        content_id: 2756,
        content_path: "img/0620192010245447487b5e_travel-homestay.jpg"
      },
      groups: [
        {
          _id: "5c494844c82d992e4c8f4c85",
          ig_id: 7009,
          ic_id: 7009,
          ig_code: "7009",
          ig_name: "โฮมสเตย์",
          inactive: false,
          create_by: 0,
          create_date: "2018-07-28T17:00:00.000Z",
          edit_by: 0,
          edit_date: "2018-07-28T17:00:00.000Z",
          sub_groups: [
            {
              _id: "5c49497fc82d992e4c8f4ffc",
              isg_id: 7009,
              ig_id: 7009,
              isg_code: "7009",
              isg_name: "โฮมสเตย์",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            }
          ]
        },
        {
          _id: "5c494844c82d992e4c8f4c87",
          ig_id: 7010,
          ic_id: 7009,
          ig_code: "7010",
          ig_name: "บริการท่องเที่ยว",
          inactive: false,
          create_by: 0,
          create_date: "2018-07-28T17:00:00.000Z",
          edit_by: 0,
          edit_date: "2018-07-28T17:00:00.000Z",
          sub_groups: [
            {
              _id: "5c49497fc82d992e4c8f4ffe",
              isg_id: 7010,
              ig_id: 7010,
              isg_code: "7010",
              isg_name: "บริการท่องเที่ยว",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            }
          ]
        }
      ]
    },
    {
      _id: "5c493c0ac82d992e4c8f2092",
      ic_id: 7010,
      ic_code: "7010",
      ic_name: "ผลิตผลทางการเกษตร",
      inactive: false,
      create_by: 0,
      create_date: "2019-01-24T17:00:00.000Z",
      edit_by: 0,
      edit_date: "2019-01-24T17:00:00.000Z",
      wsp_ids: [1],
      content: {
        content_id: 2752,
        content_path: "img/06201920102452479853f3_farming-outputs.jpg"
      },
      groups: [
        {
          _id: "5c494844c82d992e4c8f4c89",
          ig_id: 7011,
          ic_id: 7010,
          ig_code: "7011",
          ig_name: "พืช",
          inactive: false,
          create_by: 0,
          create_date: "2018-07-28T17:00:00.000Z",
          edit_by: 0,
          edit_date: "2018-07-28T17:00:00.000Z",
          sub_groups: [
            {
              _id: "5c49497fc82d992e4c8f5000",
              isg_id: 7029,
              ig_id: 7011,
              isg_code: "7011",
              isg_name: "พืช",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            }
          ]
        },
        {
          _id: "5c494844c82d992e4c8f4c8b",
          ig_id: 7021,
          ic_id: 7010,
          ig_code: "7021",
          ig_name: "ผักและผลไม้",
          inactive: false,
          create_by: 0,
          create_date: "2018-07-28T17:00:00.000Z",
          edit_by: 0,
          edit_date: "2018-07-28T17:00:00.000Z",
          sub_groups: [
            {
              _id: "5c494980c82d992e4c8f5002",
              isg_id: 7011,
              ig_id: 7021,
              isg_code: "7011",
              isg_name: "ผักและผลไม้",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            }
          ]
        },
        {
          _id: "5c494844c82d992e4c8f4c8d",
          ig_id: 7012,
          ic_id: 7010,
          ig_code: "7012",
          ig_name: "ปศุสัตว์",
          inactive: false,
          create_by: 0,
          create_date: "2018-07-28T17:00:00.000Z",
          edit_by: 0,
          edit_date: "2018-07-28T17:00:00.000Z",
          sub_groups: [
            {
              _id: "5c494980c82d992e4c8f5004",
              isg_id: 7012,
              ig_id: 7012,
              isg_code: "7012",
              isg_name: "ปศุสัตว์",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            }
          ]
        },
        {
          _id: "5c494844c82d992e4c8f4c8f",
          ig_id: 7013,
          ic_id: 7010,
          ig_code: "7013",
          ig_name: "ประมง",
          inactive: false,
          create_by: 0,
          create_date: "2018-07-28T17:00:00.000Z",
          edit_by: 0,
          edit_date: "2018-07-28T17:00:00.000Z",
          sub_groups: [
            {
              _id: "5c494980c82d992e4c8f5006",
              isg_id: 7013,
              ig_id: 7013,
              isg_code: "7013",
              isg_name: "ประมง",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            }
          ]
        }
      ]
    },
    {
      _id: "5c493c0ac82d992e4c8f2098",
      ic_id: 7012,
      ic_code: "7012",
      ic_name: "พันธุ์พืช",
      inactive: false,
      create_by: 0,
      create_date: "2019-01-24T17:00:00.000Z",
      edit_by: 0,
      edit_date: "2019-01-24T17:00:00.000Z",
      wsp_ids: [1],
      content: {
        content_id: 2753,
        content_path: "img/0620192010245323102c82_plants-flowers.jpg"
      },
      groups: [
        {
          _id: "5c49484bc82d992e4c8f4ca8",
          ig_id: 7017,
          ic_id: 7012,
          ig_code: "7017",
          ig_name: "เมล็ดพันธุ์",
          inactive: false,
          create_by: 0,
          create_date: "2018-07-28T17:00:00.000Z",
          edit_by: 0,
          edit_date: "2018-07-28T17:00:00.000Z",
          sub_groups: [
            {
              _id: "5c494985c82d992e4c8f5022",
              isg_id: 7017,
              ig_id: 7017,
              isg_code: "7017",
              isg_name: "เมล็ดพันธุ์",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            }
          ]
        },
        {
          _id: "5c49484bc82d992e4c8f4caa",
          ig_id: 7018,
          ic_id: 7012,
          ig_code: "7018",
          ig_name: "กล้าพันธุ์",
          inactive: false,
          create_by: 0,
          create_date: "2018-07-28T17:00:00.000Z",
          edit_by: 0,
          edit_date: "2018-07-28T17:00:00.000Z",
          sub_groups: [
            {
              _id: "5c494985c82d992e4c8f5024",
              isg_id: 7018,
              ig_id: 7018,
              isg_code: "7018",
              isg_name: "กล้าพันธุ์",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            }
          ]
        }
      ]
    },
    {
      _id: "5c493ef5c82d992e4c8f2c59",
      ic_id: 7013,
      ic_code: "7013",
      ic_name: "ผลิตภัณฑ์ชุมชน",
      inactive: false,
      create_by: 0,
      create_date: "2019-01-24T17:00:00.000Z",
      edit_by: 0,
      edit_date: "2019-01-24T17:00:00.000Z",
      wsp_ids: [1],
      content: {
        content_id: 2754,
        content_path: "img/0620192010245346365396_handmade-products.jpg"
      },
      groups: [
        {
          _id: "5c49484bc82d992e4c8f4cae",
          ig_id: 7019,
          ic_id: 7013,
          ig_code: "7019",
          ig_name: "ผลิตภัณฑ์เกษตรแปรรูป",
          inactive: false,
          create_by: 0,
          create_date: "2018-07-28T17:00:00.000Z",
          edit_by: 0,
          edit_date: "2018-07-28T17:00:00.000Z",
          sub_groups: [
            {
              _id: "5c494985c82d992e4c8f5026",
              isg_id: 7019,
              ig_id: 7019,
              isg_code: "7019",
              isg_name: "อาหาร",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            },
            {
              _id: "5c494985c82d992e4c8f502a",
              isg_id: 7020,
              ig_id: 7019,
              isg_code: "7020",
              isg_name: "เพื่อสุขภาพ",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            },
            {
              _id: "5c494985c82d992e4c8f502c",
              isg_id: 7021,
              ig_id: 7019,
              isg_code: "7021",
              isg_name: "เครื่องดื่ม",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            },
            {
              _id: "5c494985c82d992e4c8f502e",
              isg_id: 7022,
              ig_id: 7019,
              isg_code: "7022",
              isg_name: "ขนมและของขบเคี้ยว",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            },
            {
              _id: "5c494985c82d992e4c8f5030",
              isg_id: 7023,
              ig_id: 7019,
              isg_code: "7023",
              isg_name: "อื่นๆ",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            }
          ]
        },
        {
          _id: "5c49484bc82d992e4c8f4cb1",
          ig_id: 7020,
          ic_id: 7013,
          ig_code: "7020",
          ig_name: "ผลิตภัณฑ์หัตถกรรม",
          inactive: false,
          create_by: 0,
          create_date: "2018-07-28T17:00:00.000Z",
          edit_by: 0,
          edit_date: "2018-07-28T17:00:00.000Z",
          sub_groups: [
            {
              _id: "5c494985c82d992e4c8f5034",
              isg_id: 7024,
              ig_id: 7020,
              isg_code: "7024",
              isg_name: "เสื้อผ้า/เครื่องนุ่งห่ม",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            },
            {
              _id: "5c494985c82d992e4c8f5036",
              isg_id: 7025,
              ig_id: 7020,
              isg_code: "7025",
              isg_name: "ในครัวเรือน",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            },
            {
              _id: "5c494985c82d992e4c8f503a",
              isg_id: 7026,
              ig_id: 7020,
              isg_code: "7026",
              isg_name: "ประดับตกแต่ง",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            },
            {
              _id: "5c494986c82d992e4c8f503c",
              isg_id: 7027,
              ig_id: 7020,
              isg_code: "7027",
              isg_name: "ของที่ระลึก",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            },
            {
              _id: "5c494986c82d992e4c8f503e",
              isg_id: 7028,
              ig_id: 7020,
              isg_code: "7028",
              isg_name: "ของใช้ทั่วไป",
              inactive: false,
              create_by: 0,
              create_date: "2018-07-28T17:00:00.000Z",
              edit_by: 0,
              edit_date: "2018-07-28T17:00:00.000Z"
            }
          ]
        }
      ]
    },
    {
      _id: "5d03913c3747523ced598ce7",
      ic_id: 7014,
      ic_code: "7014",
      ic_name: "บริการด้านการเกษตร",
      inactive: false,
      create_by: 0,
      create_date: "2019-01-24T17:00:00.000Z",
      edit_by: 0,
      edit_date: "2019-01-24T17:00:00.000Z",
      wsp_ids: [1],
      content: {
        content_id: 2755,
        content_path: "img/062019201024542341936f_farming-services.jpg"
      },
      groups: []
    }
  ];

  constructor(private router: Router, private app_sv: appcomponentservice) {}

  ngOnInit() {
    // this.app_sv.getreco().then((data) => {
    //   console.log(data)
    // })
    // this.app_sv.getmebubar().then((data: any) => {
    //   this.data_te = data.Data;
    //   console.log(this.data_te);
    // });
    // console.log(this.data_te);
    // this.id_bf = "0";
    // document.getElementById(this.id_bf).classList.add("active");
  }

  active_menu(id, id_name,id_at) {
    for (let i = 0; i < this.data_te.length; i++) {
      document.getElementById("homepage").classList.remove("active");
      document
        .getElementById("nextpage/" + this.data_te[i].ic_id)
        .classList.remove("active");
    }
    if (id_at == "") {
      document.getElementById("homepage").classList.add("active");
    } else {
      document.getElementById("nextpage/" + id_at).classList.add("active");
    }

    this.nextpage(id, id_name);
    window.scrollTo(0, 0);

    //หยุดการแพร่กระจายเหตุการณ์ของเมาส์
    event.stopPropagation();

   
  }

  nextpage(id, id_code) {
  
    if (id_code == "homepage") {
      this.router.navigate([""]);
    } else if (id_code == "") {
      this.router.navigate(["category/" + id]);
    } else if (id_code == "ig_id") {
      this.router.navigate(["category/" + id], {
        queryParams: { ig_id: id }
      });
    } else if (id_code == "isg_id") {
      this.router.navigate(["category/" + id], {
        queryParams: { isg_id: id }
      });
    }
  }
}
