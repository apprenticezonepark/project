import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApplayoutComponent } from "./applayout/applayout.component";
import { AppComponent } from "./app.component";
import { FilenotfoundComponent } from './filenotfound/filenotfound.component';


const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ApplayoutComponent
      }
    ]
  },
  {
    path: "**",
    component: FilenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
