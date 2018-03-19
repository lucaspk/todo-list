import { Component, OnInit } from '@angular/core';
import { TaskService} from '../task/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  private task = '';

  private isAddClicked = false;

  private tasks = [];
  private taskCheckStatus = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  saveTask() {
    this.isAddClicked = !this.isAddClicked;
    if (this.isAddClicked === false) {
      if (this.task.trim() !== '') {
        this.tasks.push(this.task);
        this.taskCheckStatus.push(false);
        this.task = '';
      } else {
        this.taskService.emptyTaskDialogMsg();
      }
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  clearTasks() {
    if (this.tasks.length === 0) {
      this.taskService.noTasksDialogMsg();
    }
    this.tasks = [];
  }

  // Style binding to task checked
  setCompletedTaskStyle(task_index) {
    const styles = {
      'color':  this.taskCheckStatus[task_index] ? 'gray' : 'black',
      'text-decoration': this.taskCheckStatus[task_index] ? 'line-through' : 'none',
      'font-style':  this.taskCheckStatus[task_index] ? 'italic' : 'normal',
    };
    return styles;
  }

}
