import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal<boolean>(true) 

  private cartServices = inject(CartService)
  
  cart = this.cartServices.cart
  total = this.cartServices.total

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
