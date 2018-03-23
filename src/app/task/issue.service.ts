import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class IssueService {

  constructor(private snackBar: MatSnackBar) { }

  noTasksDialogMsg() {
    this.snackBar.open('Your tasklist is already empty.', 'Close' , {
      duration: 3000,
    });
  }

  emptyTaskDialogMsg() {
    this.snackBar.open('Task name is empty. Please, type the name of your currentTask.', 'Close' , {
      duration: 3000,
      verticalPosition: 'bottom',
    });
  }

}
