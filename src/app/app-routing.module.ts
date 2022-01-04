import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPageComponent } from './add-page/add-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  {
    path: 'List',
    component:ListPageComponent

  },
  {
    path: 'Add',
    component:AddPageComponent

  },
  {
    path: 'Edit',
    component:EditPageComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
