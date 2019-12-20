import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplayoutComponent } from './applayout/applayout.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path:'',
    children : [
      {
        path:'home',
        component: ApplayoutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
