import { Component, HostListener, OnInit } from '@angular/core';
import { BestDeals } from '../../../shared/models/product.model';
import { BEST_DEALS_IMAGES_PATH, MOBILE_WIDTH } from '../../../shared/utils/constants';
import { CommonModule } from '@angular/common';
import { faAngleLeft, faAngleRight, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
const DYNAMIC_PRODUCTS_MAX = 3;
@Component({
  selector: 'app-best-deals',
  templateUrl: './best-deals.component.html',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  styleUrls: ['./best-deals.component.scss']
})
export class BestDealsComponent implements OnInit {
  prevIcon = faAngleLeft;
  nextIcon = faAngleRight;
  heartIcon = faHeart;
  searchIcon = faSearch;
  titleImage = `${BEST_DEALS_IMAGES_PATH}/title-image.png`;
  mainProducts: BestDeals[] = []; 
  dynamicProducts: BestDeals[] = [];
  allProducts: BestDeals[] = [];
  startIndex = 0;
  endIndex = DYNAMIC_PRODUCTS_MAX;
  nextDisabled = false;
  prevDisabled = true;
  mobileView = false;
  addToCart = this.cartService.addToCart.bind(this.cartService);

  @HostListener('window:resize')
  onResize() {
    if (this.mobileView !== window.innerWidth <= MOBILE_WIDTH) {
      this.mobileView = window.innerWidth <= MOBILE_WIDTH;
      if (this.mobileView && (this.endIndex - this.startIndex) === DYNAMIC_PRODUCTS_MAX) {
        this.endIndex = this.endIndex - 1;
      } else if (!this.mobileView && (this.endIndex - this.startIndex) < DYNAMIC_PRODUCTS_MAX) {
        this.endIndex = this.endIndex + 1;
      }
      this.updateProducts();
    }
  }

  ngOnInit() {
    this.mobileView = window.innerWidth <= MOBILE_WIDTH;
    if (this.mobileView) {
      this.endIndex = this.endIndex - 1;
    }

    this.mainProducts = [
      {
        imgSrc: `${BEST_DEALS_IMAGES_PATH}/product1.jpg`,
        title: 'Family Donald Cake',
        price: 200
      },
      {
        imgSrc: `${BEST_DEALS_IMAGES_PATH}/product2.jpg`,
        title: 'Jewelled Fruit Cake',
        price: 170
      }
    ];

    this.dynamicProducts = [
      {
        imgSrc: `${BEST_DEALS_IMAGES_PATH}/product3.jpg`,
        title: 'Valentine\'s Day Cup Cake',
        price: 200
      },
      {
        imgSrc: `${BEST_DEALS_IMAGES_PATH}/product2.jpg`,
        title: 'Jewelled Fruit Cake',
        price: 170
      },
      {
        imgSrc: `${BEST_DEALS_IMAGES_PATH}/product4.jpg`,
        title: 'Day Fortunes Cake',
        price: 300
      },
      {
        imgSrc: `${BEST_DEALS_IMAGES_PATH}/product5.jpg`,
        title: 'Heartfelt Gift Basket',
        price: 120
      },
      {
        imgSrc: `${BEST_DEALS_IMAGES_PATH}/product6.jpg`,
        title: 'Sweet Cup Cake',
        price: 100,
        isSoldOut: true
      }
    ];
    this.updateProducts();
  }

  prevClick(): void {
    if (this.startIndex === 0) return;
    this.nextDisabled = false;
    this.startIndex--;
    this.endIndex--;
    if (this.startIndex === 0) this.prevDisabled = true;
    this.updateProducts();
  }

  nextClick(): void {
    if (this.endIndex === this.dynamicProducts.length) return;
    this.prevDisabled = false;
    this.startIndex++;
    this.endIndex++;
    if (this.endIndex === this.dynamicProducts.length) this.nextDisabled = true;
    this.updateProducts();
  }

  private updateProducts(): void {
    this.allProducts = [...this.mainProducts, ...this.dynamicProducts.slice(this.startIndex, this.endIndex)];
  }

  constructor(private readonly cartService: ShoppingCartService) {}
}
