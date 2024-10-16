import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, output, Signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Recipe } from '../../shared/models/recipe.model';
import { ShoppingCartService } from '../../shared/services/shopping-cart.service';
import { ICONS_PATH, MOBILE_WIDTH } from '../../shared/utils/constants';
import { RouterLink } from '@angular/router';
import { NavigationDataService } from '../../shared/services/navigation-data.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterLink],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent implements OnInit {
 menuOpenedEmitter = output<boolean>();

  cakeIcon = `${ICONS_PATH}/cake-icon.avif`;
  userProfileIcon = faUser;
  cartShoppingIcon = faCartShopping; 
  searchIcon = faSearch;
  menuIcon = faBars;
  activeTemplate: string | null = null;
  recipes: Recipe[] = [];
  mobileView: boolean = false;
  menuOpened: boolean = false;
  categoriesData: Record<string, string[]> = {};
  categories: string[] = [];
  cartCount: Signal<number>;

  @HostListener('window:resize')
  onResize() {
    this.mobileView = window.innerWidth <= MOBILE_WIDTH;
  }

  ngOnInit(): void {
    this.mobileView = window.innerWidth <= MOBILE_WIDTH;
    this.recipes = this.navigationDataService.getRecipes();
    this.categoriesData = this.navigationDataService.getShopData() as Record<string, string[]>;
    this.categories = Object.keys(this.categoriesData).map(key => key);
  }

  showTemplate(name: string): void {
    this.activeTemplate = name;
  }

  hideTemplate(): void {
    this.activeTemplate = null;
  }

  toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
    this.menuOpenedEmitter.emit(this.menuOpened);
  }

  constructor(
    private readonly navigationDataService: NavigationDataService,
    private readonly cartService: ShoppingCartService
  ) {
    this.cartCount = this.cartService.getCartSignal();
  }
}
