import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LayerCakeCard } from '../../../shared/models/layer-cake-card.model';
import { LayerCakeCategory } from '../../../shared/models/layer-cake-category.model';
import { LAYER_CAKES_IMAGES_PATH } from '../../../shared/utils/constants';
import { LayerCakeCardComponent } from './layer-cake-card/layer-cake-card.component';
import { LayerCakeService } from '../../../shared/services/layer-cake.service';

@Component({
  selector: 'app-layer-cakes',
  templateUrl: './layer-cakes.component.html',
  standalone: true,
  imports: [CommonModule, LayerCakeCardComponent],
  providers: [LayerCakeService],
  styleUrls: ['./layer-cakes.component.scss']
})
export class LayerCakesComponent implements OnInit {
  titleImage = `${LAYER_CAKES_IMAGES_PATH}/title-image.png`;
  backgroundImage = `${LAYER_CAKES_IMAGES_PATH}/background.png`;
  categoryCards!: LayerCakeCard[];
  categories: LayerCakeCategory[] = [];
  selectedCategoryId = 1;

  ngOnInit() {
    this.categories = this.layerCakeService.getCategories();
    this.updateCategory();
  }

  updateCategory(): void {
    this.categoryCards = this.layerCakeService.getLayerCakes(this.selectedCategoryId);
  }

  changeSelectedCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.updateCategory();
  }

  constructor(private readonly layerCakeService: LayerCakeService) {}
}
