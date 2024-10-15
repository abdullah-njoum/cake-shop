import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  cartItems: Product[] = [];
  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }
  
  constructor(private readonly cartService: ShoppingCartService) {}
}
