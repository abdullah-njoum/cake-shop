import { CommonModule } from '@angular/common';
import { Component, OnInit, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faX } from '@fortawesome/free-solid-svg-icons';
import { NavigationService } from '../../shared/services/navigation.service';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  providers: [NavigationService],
  templateUrl: './app-side-bar.component.html',
  styleUrl: './app-side-bar.component.scss'
})
export class AppSideBarComponent implements OnInit {
  sideBarClosed = output<boolean>();
  activeTemplate: string | null = null;
  recipes: Recipe[] = [];
  xIcon = faX; 
  backIcon = faArrowLeft;
  categoriesData: Record<string, string[]> = {};
  categories: string[] = [];

  ngOnInit(): void {
    this.recipes = this.navigationService.getRecipes();      
    this.categoriesData = this.navigationService.getShopData() as Record<string, string[]>;
    this.categories = Object.keys(this.categoriesData);
  }

  switchTemplate(name: string | null = null): void {
    if (name) this.activeTemplate = name;
    else this.activeTemplate = null;
  }

  constructor(private readonly navigationService: NavigationService) {}
}
