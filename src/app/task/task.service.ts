import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class TaskService {

  constructor(private snackBar: MatSnackBar) { }

  saveTask(task: String) {
    console.log(task);
  }

  noTasksDialogMsg() {
    this.snackBar.open('Your tasklist is already empty.', 'Close' , {
      duration: 3000,
    });
  }

  emptyTaskDialogMsg() {
    this.snackBar.open('Task name is empty. Please, type the name of your task.', 'Close' , {
      duration: 3000,
      verticalPosition: 'bottom',

    });
  }

}
