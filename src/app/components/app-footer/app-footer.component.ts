import { Component } from '@angular/core';
import { FOOTER_IMAGES_PATH } from '../../shared/utils/constants';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss'
})
export class AppFooterComponent {
  backgroundImg = `${FOOTER_IMAGES_PATH}/footer-bg-img.jpg`;
  introImg = `${FOOTER_IMAGES_PATH}/footer-intro-img.png`;
  homeIcon = faHome;
  phoneIcon = faPhone;
  envelopIcon = faEnvelope;
  facebookIcon = faFacebook;
  twitterIcon = faTwitter;
  instagramIcon = faInstagram;
}
