import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';

export const routes: Routes = [
  {
    path : '',
    component : InsertComponent
    },
  {
  path : 'update',
  component : UpdateComponent
  },
  {
  path : 'view',
  component  : ViewComponent
  },
  {
    path : 'delete',
    component : DeleteComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
