import { Component, model, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-categories',
  styles: ``,
  styleUrl: './categories.component.css',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  categories = ['Women', 'Men', 'T-Shirt', 'Hoodie', 'Dress'];

  selectedCategories = model<string[]>([]);

  toggleCategory = (category: string) => {
    this.selectedCategories.update((currentCategories: string[]) => {
      if (currentCategories.includes(category)) {
        return currentCategories.filter((c) => c !== category);
      } else {
        return [...currentCategories, category];
      }
    });
  };
}
