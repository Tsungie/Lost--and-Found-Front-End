import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AddItemComponent,
  ListItemsComponent,
  LoginComponent,
  RegisterComponent
} from './components';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'items',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListItemsComponent,
      },
      {
        path: 'add',
        component: AddItemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
