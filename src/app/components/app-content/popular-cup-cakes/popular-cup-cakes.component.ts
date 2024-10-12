import { Component, OnInit } from '@angular/core';
import { POPULAR_CUPCAKES_IMAGES_PATH } from '../../../shared/utils/constants';
import { PopularCupCakes } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-cup-cakes',
  templateUrl: './popular-cup-cakes.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./popular-cup-cakes.component.scss']
})
export class PopularCupCakesComponent implements OnInit {
  titleImage = `${POPULAR_CUPCAKES_IMAGES_PATH}/title-image.png`;
  cakes!: PopularCupCakes[];
  constructor() { }

  ngOnInit() {
    this.cakes = this.getCakes();
  }

  getCakes(): PopularCupCakes[] {
    return [
      {
        imgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/product-1.jpg`,
        title: 'Pink Cup Cake',
        price: 15,
        backgroundImgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/bg-img-1.png`,
        backgroundColor: 'burlywood'
      },
      {
        imgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/product-2.jpg`,
        title: 'Million Thanks Cake',
        price: 100,
        backgroundImgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/bg-img-2.png`,
        backgroundColor: 'aqua'
      },
      {
        imgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/product-3.jpg`,
        title: 'Game Cup Cake',
        price: 25,
        backgroundImgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/bg-img-3.png`,
        backgroundColor: 'white'
      },
      {
        imgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/product-4.jpg`,
        title: 'Teddy Cup Cake',
        price: 30,
        backgroundImgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/bg-img-4.png`,
        backgroundColor: 'lightgray'
      },
      {
        imgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/product-5.jpg`,
        title: 'Valentine Cup Cake',
        price: 80,
        backgroundImgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/bg-img-5.png`,
        backgroundColor: 'lightgreen'
      },
      {
        imgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/product-6.jpg`,
        title: 'Huggable Cup Cake',
        price: 70,
        backgroundImgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/bg-img-6.png`,
        backgroundColor: 'lightcyan'
      },
      {
        imgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/product-7.jpg`,
        title: 'Gourment Cup Cake',
        price: 50,
        backgroundImgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/bg-img-7.png`,
        backgroundColor: 'lightsalmon'
      },
      {
        imgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/product-8.jpg`,
        title: 'Giant Cup Cake',
        price: 150,
        backgroundImgSrc: `${POPULAR_CUPCAKES_IMAGES_PATH}/bg-img-8.png`,
        backgroundColor: 'bisque'
      },
    ];
  }
}
