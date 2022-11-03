import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { Product } from 'src/app/Core/model/product';

import { ProductService } from 'src/app/Core/services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  public list:Product[];
  public product: Product;
  public click: string;
constructor(private productService: ProductService,
  private router:Router, private currentRoute: ActivatedRoute) { }

ngOnInit(): void {
  let id= this.currentRoute.snapshot.params['id'];
  if(id!=null){
    //update
    this.click="update";
    this.product= this.productService.getProductByID(id);
    console.log(this.product)
    console.log(id)
  }else
  { this.click="add";
    this.product = new Product();}
}
saveProduct(){
  if(this.click=='add')
  {this.product.nbrLike=0;
  this.productService.ListProduct.push(this.product);
  this.router.navigate(['/product/list'])}
  else {
    this.productService.updateProduct(this.product)
  }
}

getProductByID(id:number): any{
  for(let i in this.list){
    if(this.list[i]['id']==id){
      return this.list[i]
    }
  }
   //return null;
}

updateProduct(product: Product){
for(let p of this.list){
  if(p.id===product.id){
      p=product
  }
}
}


}
