import { TasksManagerService } from 'src/shared/tasksArrayService.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { TaskModel } from 'src/shared/tasks.model';
import { CategoryModel } from 'src/shared/categories.model';
import { __disposeResources } from 'tslib';

@Component({
  selector: 'app-event-section',
  templateUrl: './event-section.component.html',
  styleUrls: ['./event-section.component.scss'],
})
export class EventSectionComponent implements OnInit {
  tasks: TaskModel[] = [];
  categoryId: any = [];
  categories: CategoryModel[] = this.tasksManagerService.categories;
  constructor(
    private tasksManagerService: TasksManagerService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {
    route.params.subscribe((params) => {
      this.categoryId = params['id'];
    });
    this.tasks = this.tasksManagerService.GetTaskList(this.categoryId);
  }

  onChangeStyle(event: any) {
    if (event.currentTarget.classList.contains('active')) {
      this.renderer.removeClass(event.currentTarget, 'active');
    } else {
      this.renderer.addClass(event.currentTarget, 'active');
    }
  }
  onDeleteTask(tasksId: number) {
    this.tasks.splice(tasksId, 1);
    console.log(tasksId);
  }
  ngOnInit() {}
}
