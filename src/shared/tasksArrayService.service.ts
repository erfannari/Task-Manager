import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryModel } from './categories.model';
import { TaskModel } from './tasks.model';

@Injectable({
  providedIn: 'root',
})
export class TasksManagerService {
  categories: CategoryModel[] = [
    {
      id: 0,
      imgPath: '../../assets/Icons/briefcase.png',
      name: 'Work',
      tasksNumber: 4,
      alt: 'briefcase',
      tasks: [],
    },
    {
      id: 1,
      imgPath: '../../assets/Icons/User.png',
      name: 'Personal',
      tasksNumber: 5,
      alt: 'User',
      tasks: [],
    },
    {
      id: 2,
      imgPath: '../../assets/Icons/heart.png',
      name: 'Family',
      tasksNumber: 1,
      alt: 'heart',
      tasks: [],
    },
    {
      id: 3,
      imgPath: '../../assets/Icons/gym.png',
      name: 'Gym',
      tasksNumber: 6,
      alt: 'gym',
      tasks: [],
    },
  ];
  constructor(route: ActivatedRoute) {}

  public GetCategories(): CategoryModel[] {
    return this.categories;
  }

  public GetTaskList(categoryId: any): TaskModel[] {
    let myTasks: TaskModel[] = [new TaskModel()];
    this.GetCategories().map((category: CategoryModel) => {
      if (category.id == categoryId) {
        myTasks = category.tasks;
      }
    });
    return myTasks;    
  }

  public GetCategoryName(categoryId: any): string {
    let categoryName = '';
    this.categories.map((Category: CategoryModel) => {
      if (categoryId == Category.id) {
        categoryName = Category.name;
      }
    });
    return categoryName;
  }

  public AddTask(task: TaskModel, categoryId: any) {
    this.categories.map((category) => {
      if (category.id == categoryId) {
        category.tasks.push(task);
      }
    });
  }
}
