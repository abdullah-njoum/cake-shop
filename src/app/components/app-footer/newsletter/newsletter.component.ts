import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FOOTER_IMAGES_PATH } from '../../../shared/utils/constants';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  backgroundImg = `${FOOTER_IMAGES_PATH}/newsletter-bg-img.png`;
  paperPlaneIcon = faPaperPlane;

  ngOnInit() {
  }

}
