export interface Task{
    idTask : number;
    taskDescription : string;
    completed : boolean;
    dueDate : Date;
}

export interface TaskData {
    idTask: number;
    taskDescription: string;
    completed: boolean;
    dueDate: Date;
    repeat?: any; // Change this type to match the actual type if known
}