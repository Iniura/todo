import { Injectable } from "@angular/core";
import { Task } from "../models/task";
import { Observable, catchError, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TASKS } from "../models/tasksmock";

@Injectable({
    providedIn: 'root'
})
export class TaskService {    
    //private serverUrl = 'http://10.0.0.11:8934/api/Tasks'
    private serverUrl = 'https://todo-api.forzatrans.app/api/Tasks'

    constructor(private http:HttpClient){}

    createTask(task:Task) : Observable<any>{
        task.dueDate = new Date();
        task.completed = false;
        return this.http.post(`${this.serverUrl}`, task)
    }

    getTaskstest() : Observable<any>{
        //const formData: FormData = new FormData();
        //formData.append('values', JSON.stringify({ completed: tasks[0].completed.toString()}));
        //return this.http.get(`${this.serverUrl}/`);
        //return TASKS;
        //return this.http.get(this.serverUrl2);
        //return this.http.get(`${this.serverUrl2}`);
        return this.http.get(this.serverUrl);
    }    

    getTasks2(): Observable<any> {
        return this.http.get(this.serverUrl).pipe(
            catchError((error: any) => {
                console.error('Error fetching tasks:', error);
                return throwError('Something went wrong while fetching tasks. Please try again later.');
            })
        );
    }

    getTasksPrueba(): Observable<Task[]> {
        return this.http.get<Task[]>(this.serverUrl).pipe(
            catchError((error: any) => {
                console.error('Error fetching tasks:', error);
                return throwError('Something went wrong while fetching tasks. Please try again later.');
            })
        );
    }
    
    getTasks(){
        //const formData: FormData = new FormData();
        debugger;
        //formData.append('values', JSON.stringify({ completed: tasks[0].completed.toString()}));
        //return this.http.get(`${this.serverUrl}/`, formData);
        return TASKS;
    }   

    updateTask(task:Task):Observable<any>{
        const formData: FormData = new FormData();
        formData.append('values', JSON.stringify({ completed: task.completed.toString()}));
        formData.append('key', task.idTask.toString());
        return this.http.put(`${this.serverUrl}/`, formData)
    }
    
    deleteTask(idTask:number):Observable<any>{
        const body: FormData = new FormData();
        body.append('key', idTask.toString());
        return this.http.delete(`${this.serverUrl}`, { body })
    }
}
