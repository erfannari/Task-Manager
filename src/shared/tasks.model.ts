export class TaskModel {
  public name: string = '';
  public status: boolean = false;
  public createdDate = new Date();
  public id: number = 0;
  constructor(name?: string, status?: boolean, id?: number) {
    this.name = name ? name : '';
    this.status = status ? status : false;
    this.id = id ? id : 0;

    // // this.name === name ? name : '';
    // if (name) {
    //   this.name = name;
    // } else {
    //   name = '';
    // }
    // // this.status = status;
  }
}
