import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shered/models/product.model';
import { ProductService } from '@shered/services/product.service';
import { CartService } from '@shered/services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {
  @Input() id?: string

  product = signal<Product | null>(null)

  private productServices = inject(ProductService)
  private CartServices = inject(CartService)

  ngOnInit(): void {
    if (this.id) {
       this.productServices.getOne(this.id)
       .subscribe({
        next: (product) => {
          this.product.set(product)
        }
       })
    }
  }

  addToCart() {
    const product = this.product()
    if (product) {
      this.CartServices.addToCart(product)
    }
  }
    
}
