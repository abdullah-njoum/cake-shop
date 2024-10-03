import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import { MOBILE_WIDTH, RECIPE_IMAGES_PATH } from '../../shared/utils/constants';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent implements OnInit {
 menuOpenedEmitter = output<boolean>();

  userProfileIcon = faUser;
  cartShoppingIcon = faCartShopping; 
  searchIcon = faSearch;
  menuIcon = faBars;
  activeTemplate: string | null = null;
  recipes: { name: string; price: number; imgSrc: string }[] = [];
  mobileView: boolean = false;
  menuOpened: boolean = false;

  @HostListener('window:resize')
  onResize() {
    this.mobileView = window.innerWidth <= MOBILE_WIDTH;
  }

  ngOnInit(): void {
    this.mobileView = window.innerWidth <= MOBILE_WIDTH;
    this.recipes = this.getRecipes();
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

  private getRecipes() {
    return [
      {
        name: 'Giant Cup Cake',
        price: 300,
        imgSrc: `${RECIPE_IMAGES_PATH}/recipe-1.jpg`
      },
      {
        name: 'Choclate Cake',
        price: 150,
        imgSrc: `${RECIPE_IMAGES_PATH}/recipe-2.jpg`
      },
      {
        name: 'Banana Cake',
        price: 120,
        imgSrc: `${RECIPE_IMAGES_PATH}/recipe-3.jpg`
      },
      {
        name: 'Special Gift Cake',
        price: 75,
        imgSrc: `${RECIPE_IMAGES_PATH}/recipe-4.jpg`
      }
    ];
  }
}
