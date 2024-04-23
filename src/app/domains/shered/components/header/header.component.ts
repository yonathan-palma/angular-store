import { Component, inject, signal } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
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
