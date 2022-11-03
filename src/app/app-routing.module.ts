import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './products/list-product/list-product.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';

import { NotfoundComponent  } from './Pages/notfound/notfound.component';


const Routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  {path:'**',component:NotfoundComponent },
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
