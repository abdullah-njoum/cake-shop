import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppSideBarComponent } from './components/app-side-bar/app-side-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { MOBILE_WIDTH } from './shared/utils/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppHeaderComponent,
    AppContentComponent,
    AppFooterComponent,
    AppSideBarComponent,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cake-shop';
  arrowUpIcon = faArrowUp;
  sideBarOpened = false;
  upButtonActivated = false;

  @HostListener('window:scroll')
  onScroll() {
    if (window.scrollY > (window.document.scrollingElement!.scrollHeight/8) && !this.upButtonActivated) {
      this.upButtonActivated = true; 
    } else if (window.scrollY < (window.document.scrollingElement!.scrollHeight/8) && this.upButtonActivated){
      this.upButtonActivated = false;
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > MOBILE_WIDTH && this.sideBarOpened)
      this.sideBarOpened = false;
  }

  toggleSideBar(): void {
    this.sideBarOpened = !this.sideBarOpened;
  }

  upIconClicked(): void {
    window.scrollTo({ top:0, behavior: 'smooth' });
  }
}
