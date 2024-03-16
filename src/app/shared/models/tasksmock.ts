import { Task } from "./task";


export const TASKS: Task[] = [
  { idTask: 1, taskDescription: 'Task 1', completed: false, dueDate: new Date('2024-03-20') },
  { idTask: 2, taskDescription: 'Task 2', completed: true, dueDate: new Date('2024-03-18') },
  { idTask: 3, taskDescription: 'Task 3', completed: false, dueDate: new Date('2024-03-22') },
  { idTask: 4, taskDescription: 'Task 4', completed: true, dueDate: new Date('2024-03-16') },
  // Add more tasks as needed
];
