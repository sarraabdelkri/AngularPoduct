import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Core/model/product';
import { ProductService } from 'src/app/Core/services/product.service';

import { ListProductComponent } from '../list-product/list-product.component';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
public list:Product[];

  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    this.list=this.productService.ListProduct.filter(p=>p.quantity==0);
  
  }
  deleteProduct(p:Product):void{

    let i =this.list.indexOf(p);
    this.list.splice(i,1);
    let index =this.productService.ListProduct.indexOf(p);
    this.productService.ListProduct.splice(index,1);
      //connect to the backend side

  }
 

}
