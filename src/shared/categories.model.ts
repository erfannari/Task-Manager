import { TaskModel } from './tasks.model';

export class CategoryModel {
  public id: number = 0;
  public imgPath: string = '';
  public name: string = '';
  public tasksNumber: number = 0;
  public alt: string = '';
  public tasks: TaskModel[] = [new TaskModel()];

  constructor(
    name?: string,
    img?: string,
    tasksNumber?: number,
    id?: number,
    alt?: string,
    tasks?: TaskModel[]
  ) {
    this.id === id ? id : 0;
    this.imgPath === img ? img : '';
    this.name === name ? name : '';
    this.tasksNumber === tasksNumber ? tasksNumber : 0;
    this.alt === alt ? alt : '';
    this.tasks === tasks ? tasks : [new TaskModel()];
  }
}
