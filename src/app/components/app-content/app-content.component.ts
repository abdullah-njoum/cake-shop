import { Component } from '@angular/core';
import { SLIDE_IMAGES_PATH } from '../../shared/utils/constants';
import { PagesHeaderComponent } from './pages-header/pages-header.component';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

const SLIDER_IMAGES_COUNT = 3; 
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [PagesHeaderComponent, FontAwesomeModule, CommonModule],
  templateUrl: './app-content.component.html',
  styleUrl: './app-content.component.scss'
})
export class AppContentComponent {
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
