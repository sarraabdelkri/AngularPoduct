import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public ListProduct :Product[]=[
    {id:1,
     title: 'T-shirt 1',
     price: 28,
     nbrLike: 40,
     description: 'nice T-shirt',
     category: 'Women',
     quantity: 3,
     picture:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fff%2F55%2Fff55f8591a27acf2678a6f531add67167d41993a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
    },
    {
      id: 4,
      title: 'T-shirt 2',
      price: 28,
      nbrLike: 40,
      description: 'nice T-shirt',
      category: 'Women',
      quantity: 12,
      picture: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F94%2Fa0%2F94a0f95305117dab710e5e5a829422b43dde52e2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]'
    },
    {
      id:5,
      title: 'T-shirt 2',
      price: 28,
      nbrLike: 40,
      description: 'nice T-shirt',
      category: 'kids',
      quantity: 0,
      picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww2.hm.com%2Fen_asia5%2Fproductpage.0611503005.html&psig=AOvVaw0aaxZWoHszrH7AHwaqbrrG&ust=1666261189570000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCND07OKI7PoCFQAAAAAdAAAAABAE' },
    
      {
        id:8,
        title: 'T-shirt 2',
        price: 28,
        nbrLike: 40,
        description: 'nice T-shirt',
        category: 'kids',
        quantity: 0,
        picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww2.hm.com%2Fen_asia5%2Fproductpage.0611503005.html&psig=AOvVaw0aaxZWoHszrH7AHwaqbrrG&ust=1666261189570000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCND07OKI7PoCFQAAAAAdAAAAABAE' }];
      
   
  constructor() { }
 
      //connect to the backend side

      getProductByID(id:number): any{
        
         //return null;
    }
  
    updateProduct(product: Product){
     
    }
    
}
 

