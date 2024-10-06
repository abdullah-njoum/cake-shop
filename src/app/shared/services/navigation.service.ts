import { Injectable } from '@angular/core';
import { RECIPE_IMAGES_PATH } from '../utils/constants';
import { Recipe } from '../models/recipe.model';

type Category = 'Flavours' | 'Sugar Free Cakes' | 'Wedding Cakes';
@Injectable({
  providedIn: 'root'
})
export class NavigationService {
constructor() { }
  getRecipes(): Recipe[] {
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

  getShopData(category: Category | null = null): string[] | Record<string, string[]> {
    const categories = {
      'Flavours': [
        'Banana Cream Pie',
        'Candy Cane',
        'Caramel Apple',
        'Chocolate Criz',
        'Coconut Harr'
      ],
      'Sugar Free Cakes': [
        'Carrot Cake',
        'Gingerbread Cake',
        'Banana Snack Cake',
        'Chocolate Cacao Free',
        'Coconut Milk Harr'
      ],
      'Wedding Cakes': [
        'Banana Cream Pie',
        'Candy Cane',
        'Caramel Apple',
        'Chocolate Criz',
        'Coconut Harr'
      ]
    };
    return category && category in categories ? categories[category] : categories; 
  }
}
