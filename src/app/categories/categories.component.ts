import { Component } from '@angular/core';
import { CategoryModel } from 'src/shared/categories.model';
import { TasksManagerService } from 'src/shared/tasksArrayService.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  constructor(private tasksManagerService: TasksManagerService) {}
  currentCategoryId = 0;
  categories: CategoryModel[] = this.tasksManagerService.GetCategories();
}
