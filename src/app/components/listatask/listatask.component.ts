import { Component } from '@angular/core';
import { Task } from 'src/app/shared/models/task';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-listatask',
  templateUrl: './listatask.component.html',
  styleUrls: ['./listatask.component.scss']
})
export class ListataskComponent {

  ngOnInit(){
    this.getTasks();
    this.getTasksP();
  }

  tasksList: Task[] = [];
  tasks2: Task[] = [];
  constructor(private taskService:TaskService ){
  }

  getTasks(){
    this.tasksList = this.taskService.getTasks();
  }

  getTasksP(){
    this.taskService.getTasksPrueba()
    .subscribe(
      (tasks: Task[]) => {
        console.log('Tasks:', tasks);
        this.tasksList = tasks;
        // Handle tasks as needed
      },
      (error) => {
        console.error('Error fetching tasks:', error);
        // Handle error
      }
    );
  }


}
