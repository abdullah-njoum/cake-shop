import { Component } from '@angular/core';
import { ImagesSliderComponent } from './images-slider/images-slider.component';
import { CakesDescriptionComponent } from './cakes-description/cakes-description.component';
import { PopularCreationsComponent } from './popular-creations/popular-creations.component';
import { BestDealsComponent } from './best-deals/best-deals.component';
import { LayerCakesComponent } from "./layer-cakes/layer-cakes.component";
import { ShopInformationComponent } from './shop-information/shop-information.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    ImagesSliderComponent,
    CakesDescriptionComponent,
    PopularCreationsComponent,
    BestDealsComponent,
    LayerCakesComponent,
    ShopInformationComponent
],
  templateUrl: './app-content.component.html',
  styleUrl: './app-content.component.scss'
})
export class AppContentComponent {

}
