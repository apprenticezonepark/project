import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplayoutComponent } from './applayout/applayout.component';

const routes: Routes = [
  {
    path: 'example',
    component: ApplayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
