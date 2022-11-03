import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundComponent } from './Pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  
    AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
