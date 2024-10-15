import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { CartDetailsComponent } from './components/app-content/cart-details/cart-details.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppContentComponent },
    { path: 'cart-details', component: CartDetailsComponent },
    { path: '**', component: PageNotFoundComponent }
];
