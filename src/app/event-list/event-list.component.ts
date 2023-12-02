import { CategoryModel } from 'src/shared/categories.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TasksManagerService } from 'src/shared/tasksArrayService.service';
import { TaskModel } from 'src/shared/tasks.model';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
  providers: [],
})
export class EventListComponent implements OnInit {
  inputValue: string = '';
  currentDate: string = new Date().toDateString();
  categories: CategoryModel[] = this.taskManagerService.GetCategories();
  categoryName: string = '';
  categoryId = '';
  tasks: any = [];
  constructor(
    private taskManagerService: TasksManagerService,
    private route: ActivatedRoute
  ) {
    this.routeParamDetector(route);
  }

  ngOnInit() {}

  AddTaskEventHandler() {
    if (this.inputValue) {
      let task: TaskModel = new TaskModel(this.inputValue);
      this.taskManagerService.AddTask(task, this.categoryId);
    }
  }

  routeParamDetector(route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.categoryId = params['id'];
      this.categoryName = this.taskManagerService.GetCategoryName(this.categoryId);
    });
  }
}
