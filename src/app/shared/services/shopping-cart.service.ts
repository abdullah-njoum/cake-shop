import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cartItems = new Map<Product, number>();
  cartSize = signal(0);

  addToCart(item: Product): void {
    const count = this.cartItems.get(item);
    if(!count) {
      this.cartItems.set(item, 1);
    } else {
      this.cartItems.set(item, count + 1);
    }
    this.updateCartSize();
  }

  getCartItems(): Product[] {
    return Array.from(this.cartItems).map(([product]) => (product));
  }
  
  isInCart(item: Product): boolean {
    return !!this.cartItems.get(item);
  }

  updateCartSize(): void {
    const size = Array.from(this.cartItems).reduce((acc, [_, count])=> (acc + count), 0);
    this.cartSize.set(size);
  }

  getCartSignal(): Signal<number> {
    return this.cartSize.asReadonly();
  }
}
