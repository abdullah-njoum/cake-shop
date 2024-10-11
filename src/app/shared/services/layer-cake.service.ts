import { Injectable } from '@angular/core';
import { LayerCakeCategory } from '../models/layer-cake-category.model';
import { LAYER_CAKES_IMAGES_PATH } from '../utils/constants';
import { LayerCakeCard } from '../models/layer-cake-card.model';

@Injectable({
  providedIn: 'root'
})
export class LayerCakeService {
  private categoryIds = [1, 2, 3, 4];
  private layerCakes: LayerCakeCard[] = [
    {
      imgSrc: `${LAYER_CAKES_IMAGES_PATH}/product-1.jpg`,
      price: 150,
      title: 'Angel Food Cake',
      type: 'Food',
      vendor: 'Biscoff',
      categoryId: 1
    },
    {
      imgSrc: `${LAYER_CAKES_IMAGES_PATH}/product-2.jpg`,
      price: 80,
      title: 'Vanilla Cake',
      type: 'Sweet',
      vendor: 'Bingo',
      categoryId: 1
    },
    {
      imgSrc: `${LAYER_CAKES_IMAGES_PATH}/product-3.jpg`,
      price: 50,
      title: 'Classic Carrot Cake',
      type: 'Healthy',
      vendor: 'BinC',
      categoryId: 1
    },
    {
      imgSrc: `${LAYER_CAKES_IMAGES_PATH}/product-4.jpg`,
      price: 30,
      title: 'Deeper Cup Cake',
      type: 'Cookies',
      vendor: 'Biscoff',
      categoryId: 2
    },
    {
      imgSrc: `${LAYER_CAKES_IMAGES_PATH}/product-5.jpg`,
      price: 55,
      title: 'Ellen Cup Cake',
      type: 'Crumble',
      vendor: 'Bingo',
      categoryId: 2
    },
    {
      imgSrc: `${LAYER_CAKES_IMAGES_PATH}/product-6.jpg`,
      price: 75,
      title: 'Giant Fortune Cake',
      type: 'Cookies',
      vendor: 'Kaya',
      categoryId: 2
    },
    {
      imgSrc: `${LAYER_CAKES_IMAGES_PATH}/product-7.jpg`,
      price: 110,
      title: 'Jewelled Fruit Cake',
      type: 'Healthy',
      vendor: 'Isveet',
      categoryId: 3
    },
    {
      imgSrc: `${LAYER_CAKES_IMAGES_PATH}/product-8.jpg`,
      price: 15,
      title: 'Children Cup Cake',
      type: 'Cookies',
      vendor: 'Bingo',
      categoryId: 3
    },
    {
      imgSrc: `${LAYER_CAKES_IMAGES_PATH}/product-9.jpg`,
      price: 150,
      title: 'Gourmet Cup Cake',
      type: 'Cookies',
      vendor: 'Kaya',
      categoryId: 3
    },
    {
      imgSrc: `${LAYER_CAKES_IMAGES_PATH}/product-10.jpg`,
      price: 75,
      title: 'Grieve Cup Cake',
      type: 'Crumble',
      vendor: 'Kaya',
      categoryId: 4
    },
    {
      imgSrc: `${LAYER_CAKES_IMAGES_PATH}/product-11.jpg`,
      price: 35,
      title: 'Hungable Kids Gift',
      type: 'Cup Cake',
      vendor: 'Kiddy',
      categoryId: 4
    },
    {
      imgSrc: `${LAYER_CAKES_IMAGES_PATH}/product-12.jpg`,
      price: 200,
      title: 'Heart to Heart',
      type: 'Crumble',
      vendor: 'Tastilo',
      categoryId: 4
    }
  ];

  getCategories(): LayerCakeCategory[] {
    return this.categoryIds.map(n => ({
      iconSrc: `${LAYER_CAKES_IMAGES_PATH}/category-${n}.png`,
      bgSrc: `${LAYER_CAKES_IMAGES_PATH}/category-${n}-bg.png`
    }));
  }

  getLayerCakes(categoryId: number | null): LayerCakeCard[] {
    if (categoryId && !this.categoryIds.includes(categoryId)) return [];

    return !categoryId ? this.layerCakes : this.layerCakes.filter(
      cake => cake.categoryId === categoryId
    );
  }
}
