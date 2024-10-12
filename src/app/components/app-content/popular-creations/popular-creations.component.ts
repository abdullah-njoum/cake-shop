import { Component, OnInit } from '@angular/core';
import { POPULAR_CREATIONS_IMAGES_PATH } from '../../../shared/utils/constants';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-creations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular-creations.component.html',
  styleUrls: ['./popular-creations.component.scss']
})
export class PopularCreationsComponent implements OnInit {
  titleImage = `${POPULAR_CREATIONS_IMAGES_PATH}/title-image.png`;
  backgroundImage = `${POPULAR_CREATIONS_IMAGES_PATH}/background.png`;;
  creationItems: Product[] = [];
  ngOnInit() {
    this.creationItems = [
      {
        imgSrc: `${POPULAR_CREATIONS_IMAGES_PATH}/product1.jpg`,
        title: 'Celebration Cake',
        description: 'Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam.'
      },
      {
        imgSrc: `${POPULAR_CREATIONS_IMAGES_PATH}/product2.jpg`,
        title: 'More Cakes',
        description: 'Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo.'
      },
      {
        imgSrc: `${POPULAR_CREATIONS_IMAGES_PATH}/product3.jpg`,
        title: 'Ready Cake',
        description: 'Lacus sed viverra tellus in hac. In dictum non consectetur a erat nam at.'
      },
      {
        imgSrc: `${POPULAR_CREATIONS_IMAGES_PATH}/product4.jpg`,
        title: 'Sweet Cake',
        description: 'Sed arcu non odio euismod lacinia at quis. Luctus accumsan tortor posuere ac.'
      }
    ];
  }

}
