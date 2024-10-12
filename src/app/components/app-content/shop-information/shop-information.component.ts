import { Component, OnInit } from '@angular/core';
import { ICONS_PATH } from '../../../shared/utils/constants';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
type ShopInfoItem = { title: string; counter: number };
@Component({
  selector: 'app-shop-information',
  templateUrl: './shop-information.component.html',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  styleUrls: ['./shop-information.component.scss']
})
export class ShopInformationComponent implements OnInit {
  shopInfo!: ShopInfoItem[];
  starIcon = `${ICONS_PATH}/star_icon.png`;
  giftIcon = faGift;
  containerHovered: [boolean, boolean, boolean, boolean] = [false, false, false, false];

  ngOnInit() {
    this.shopInfo = [
      {
        title: 'Branches',
        counter: 50
      },
      {
        title: 'Staff',
        counter: 145
      },
      {
        title: 'Year Service',
        counter: 22
      },
      {
        title: 'Love',
        counter: 73
      }
    ];
  }

  updateHover(item: number, status: boolean) {
    this.containerHovered[item] = status;
  }
}
