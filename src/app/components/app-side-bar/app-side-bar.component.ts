import { CommonModule } from '@angular/common';
import { Component, OnInit, output } from '@angular/core';
import { RECIPE_IMAGES_PATH } from '../../shared/utils/constants';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './app-side-bar.component.html',
  styleUrl: './app-side-bar.component.scss'
})
export class AppSideBarComponent implements OnInit {
  sideBarClosed = output<boolean>();
  activeTemplate: string | null = null;
  recipes: { name: string; price: number; imgSrc: string }[] = [];
  xIcon = faX; 
  backIcon = faArrowLeft;

  ngOnInit(): void {
    this.recipes = this.getRecipes();      
  }

  switchTemplate(name: string | null = null): void {
    if (name) this.activeTemplate = name;
    else this.activeTemplate = null;
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
