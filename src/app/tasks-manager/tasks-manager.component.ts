import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/models/task';
import { TaskService } from '../shared/services/task.service';

@Component({
  selector: 'app-tasks-manager',
  templateUrl: './tasks-manager.component.html',
  styleUrls: ['./tasks-manager.component.scss']
})
export class TasksManagerComponent implements OnInit {

  ngOnInit(){
    //this.getTasks();
  }

  tasks: Task[] = [];
  constructor(private taskService:TaskService ){
  }

  // getTasks(){
  //   //this.taskService.getTasks().subscribe( tasks => this.tasks = tasks);
  //   //this.taskService.getTasks()( tasks => this.tasks = tasks);
  //   this.tasks = this.taskService.getTasks();
  // }

}
