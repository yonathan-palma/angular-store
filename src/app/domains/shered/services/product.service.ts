import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private http = inject(HttpClient)

  getProducts(category? :string) {
    let url = new URL('https://fakestoreapi.com/products')
    if (category) {
      url.pathname = `products/category/${category}`
    }
    return this.http.get<Product[]>(url.toString())
  }

  getOne(id: string) {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
  }
}
