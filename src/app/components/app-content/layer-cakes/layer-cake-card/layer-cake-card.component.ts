import { Component, effect, input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faAngleLeft, faAngleRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { LayerCakeCard } from '../../../../shared/models/layer-cake-card.model';
import { CommonModule } from '@angular/common';
import { ShoppingCartService } from '../../../../shared/services/shopping-cart.service';

@Component({
  selector: 'app-layer-cake-card',
  templateUrl: './layer-cake-card.component.html',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  styleUrls: ['./layer-cake-card.component.scss']
})
export class LayerCakeCardComponent implements OnInit {
  categoryCards = input.required<LayerCakeCard[]>();
  cardDetails!: LayerCakeCard;
  cartShoppingIcon = faCartShopping;
  heartIcon = faHeart;
  prevIcon = faAngleLeft;
  nextIcon = faAngleRight;
  currentCardIndex = 0;
  prevDisabled = true;
  nextDisabled = false;
  addToCart = this.cartService.addToCart.bind(this.cartService);

  ngOnInit() {
    this.updateCurrentCardDetails();
  }

  prevClicked(): void {
    this.nextDisabled = false;
    if (this.currentCardIndex === 1) {
      this.prevDisabled = true;
    }
    this.currentCardIndex--;
    this.updateCurrentCardDetails();
  }

  nextClicked(): void {
    this.prevDisabled = false;
    if (this.currentCardIndex + 2 === this.categoryCards().length) {
      this.nextDisabled = true;
    }
    this.currentCardIndex++;
    this.updateCurrentCardDetails();
  }

  updateCurrentCardDetails(): void {
    this.cardDetails = this.categoryCards()[this.currentCardIndex];
  }

  constructor(private readonly cartService: ShoppingCartService) {
    effect(() => {
      this.currentCardIndex = 0;
      this.nextDisabled = false;
      this.prevDisabled = true;
      this.cardDetails = this.categoryCards()[this.currentCardIndex];
    })
  }
}
