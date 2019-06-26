import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeftComponent } from './content/left/left.component';
import { RightComponent } from './content/right/right.component';

const routes: Routes = [
  {path:'Left',component:LeftComponent},
  {path:'Right',component:RightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
