import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppSideBarComponent } from './components/app-side-bar/app-side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppHeaderComponent, AppContentComponent, AppFooterComponent, AppSideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cake-shop';
  sideBarOpened = false;

  toggleSideBar(): void {
    this.sideBarOpened = !this.sideBarOpened;
  }
}
