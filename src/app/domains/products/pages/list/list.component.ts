import { Component, signal, inject, Input, SimpleChanges } from '@angular/core';

import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shered/models/product.model';
import { HeaderComponent } from '@shered/components/header/header.component';
import { CartService } from '@shered/services/cart.service';
import { ProductService } from '@shered/services/product.service';
import { CategoryService } from '@shered/services/category.service';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ProductComponent,
    HeaderComponent,
    RouterLinkWithHref
],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  products = signal<Product[]>([])
  categories = signal<any>([])

  private cartServices = inject(CartService)
  private ProductService = inject(ProductService)
  private categoryService = inject(CategoryService)

  @Input() category?: string

  ngOnInit() {
    this.getCategories()
  }

  ngOnChanges(changes: SimpleChanges): void {
      this.getProducts()  
  }

  addToCart(product: Product) {
    this.cartServices.addToCart(product)
    // console.log(event)
  }
  
  private getProducts() {
    this.ProductService.getProducts(this.category)
    .subscribe({
      next: (products) => {
        this.products.set(products)
      },
      error: () => {}
    })
  }

  private getCategories() {
    this.categoryService.getAll()
    .subscribe({
      next: (data) => {
        this.categories.set(data)
      },
      error: () => {}
    })
  }
}
