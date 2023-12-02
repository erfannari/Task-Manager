import { TasksManagerService } from 'src/shared/tasksArrayService.service';
import { Component } from '@angular/core';
import { CategoryModel } from 'src/shared/categories.model';


@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent {
  categories: CategoryModel[] = this.tasksManagerService.GetCategories();
  categoriesTasksNumber: number = 0;
  totalTasksNumber: number = 0;
  constructor(private tasksManagerService: TasksManagerService) {
    this.categories.map((categoryTasks) => {
      this.categoriesTasksNumber = categoryTasks.tasksNumber;
      this.totalTasksNumber += this.categoriesTasksNumber;
    });
  }
}
