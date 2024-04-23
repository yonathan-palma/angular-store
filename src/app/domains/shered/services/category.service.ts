import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@shered/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  private http = inject(HttpClient)

  getAll() {
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

}
