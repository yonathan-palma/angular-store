import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shered/models/product.model';
import { HeaderComponent } from '@shered/components/header/header.component';
import { CartService } from '@shered/services/cart.service';
import { ProductService } from '@shered/services/product.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([])

  private cartServices = inject(CartService)
  private ProductService = inject(ProductService)

  ngOnInit() {
    this.ProductService.getProducts()
    .subscribe({
      next: (products) => {
        this.products.set(products)
      }
    })
  }

  addToCart(product: Product) {
    this.cartServices.addToCart(product)
    // console.log(event)
  }
}
