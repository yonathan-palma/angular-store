import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '@shered/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shered/pipes/reverse.pipe';
import { TomeAgoPipe } from '@shered/pipes/tome-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TomeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!: Product

  
  @Output() addToCart = new EventEmitter()

  addToCartHandler() {
    console.log("click")
    this.addToCart.emit(this.product)
  }
}
