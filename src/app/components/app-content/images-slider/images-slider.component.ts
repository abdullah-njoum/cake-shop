import { Component } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { SLIDE_IMAGES_PATH } from '../../../shared/utils/constants';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

const SLIDER_IMAGES_COUNT = 3; 
@Component({
  selector: 'app-images-slider',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './images-slider.component.html',
  styleUrls: ['./images-slider.component.scss']
})
export class ImagesSliderComponent {
  prevIcon = faAngleLeft;
  nextIcon = faAngleRight;
  currentSlide = 'slide_1';
  imgSrc: string = `${SLIDE_IMAGES_PATH}/${this.currentSlide}.jpg`;

  nextClick(): void {
    if (+this.currentSlide[this.currentSlide.length - 1] + 1 > SLIDER_IMAGES_COUNT)
      this.currentSlide = this.currentSlide.slice(0, this.currentSlide.length - 1) + 0;

    this.currentSlide = this.currentSlide.slice(
      0, this.currentSlide.length - 1
    ) + (+this.currentSlide[this.currentSlide.length - 1] + 1);
    this.updateImageSrc();
  }

  prevClick(): void {
    if (+this.currentSlide[this.currentSlide.length - 1] === 1)
        this.currentSlide = this.currentSlide.slice(0, this.currentSlide.length - 1) + (SLIDER_IMAGES_COUNT + 1);
  
    this.currentSlide = this.currentSlide.slice(
      0, this.currentSlide.length - 1
    ) + (+this.currentSlide[this.currentSlide.length - 1] - 1);
    this.updateImageSrc();
  }

  private updateImageSrc(): void {
    this.imgSrc = `${SLIDE_IMAGES_PATH}/${this.currentSlide}.jpg`;
  }
}
