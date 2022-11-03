import { Component, OnInit } from '@angular/core';
import {Product} from "../../Core/model/product";
import { ActivatedRoute } from '@angular/router';
import { StatsService } from 'src/app/Core/services/stats.service';
import { ProductService } from 'src/app/Core/services/product.service';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list: Product[];
  public all :Product[];
  priceMax:number;
  public count:Number;
  constructor(private route :ActivatedRoute, private stats:StatsService,private product:ProductService){

  }

  ngOnInit(): void {

    console.log(this.route.snapshot.params['category'])
    let category=this.route.snapshot.params['category']
    this.title= 'My App Store';
    this.all=this.product.ListProduct;
    
      this.route.params.subscribe(
        (params)=>{
      if (params['category']!=null){
      this.list=this.all.filter((Product)=>Product.category==params['category'])
    }else{
        this.list=this.all
      }

        }
      )
      this.count=this.stats.getCount(this.all,'quantity',0);
  }

  incrementLike(product: Product): void{
    let i= this.list.indexOf(product);
    if(i!=-1){
      this.list[i].nbrLike++
      //connect to the backend side
    }
  }
  buyProduct(product: Product): void{
    let i= this.list.indexOf(product);
    if(i!=-1){
      this.list[i].quantity--
      //connect to the backend side
    }
  }

 

     
}
