import { Component, OnInit } from '@angular/core';
import { ICONS_PATH } from '../../../shared/utils/constants';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Product } from '../../../shared/models/product.model';
import { Category } from '../../../shared/models/category.model';

@Component({
  selector: 'app-cakes-description',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './cakes-description.component.html',
  styleUrls: ['./cakes-description.component.scss']
})
export class CakesDescriptionComponent implements OnInit {
  cakesDesc: Category[] = [];
  cakeIconWrapper = `${ICONS_PATH}/cakes_description_icon_wrapper.png`;
  
  ngOnInit(): void {
    this.cakesDesc = [
      {
        description: 'Imperdiet proin fermentum leo vel orci porta non pulvinar. Ac ut consequat semper viverra nam. Pellentesque adipiscing comm.',
        imgSrc: `${ICONS_PATH}/cakes_description_icon1.png`,
        title: 'Cup Cakes'
      },
      {
        description: 'Adipiscing tristique risus nec feugiat in fermentum posuere. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est.',
        imgSrc: `${ICONS_PATH}/cakes_description_icon2.png`,
        title: 'Wedding Cakes'
      },
      {
        description: '  Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Nulla aliquet enim tortor at auctor urna nunc id cursus.',
        imgSrc: `${ICONS_PATH}/cakes_description_icon3.png`,
        title: 'Cookies Cakes'
      }
    ];
  }
}
