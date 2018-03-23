import { Component, OnInit } from '@angular/core';
import { IssueService} from './issue.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  currentTask = '';
  newTaskName = '';

  isAddClicked = false;

  tasks = [];
  taskCheckStatus = [];
  editables = [];

  constructor(private issueService: IssueService) { }

  ngOnInit() {
  }

  saveTask() {
    this.isAddClicked = !this.isAddClicked;
    if (this.isAddClicked === false) {
      if (this.currentTask.trim() !== '') {
        this.tasks.push(this.currentTask);
        this.taskCheckStatus.push(false);
        this.editables.push(false);
        this.currentTask = '';
      } else {
        this.issueService.emptyTaskDialogMsg();
      }
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  update(index: number) {
    this.tasks[index] = this.newTaskName;
    this.editTask(index);
    this.newTaskName = '';
  }

  editTask(index: number) {
    this.editables[index] = !this.editables[index];
  }

  clearTasks() {
    if (this.tasks.length === 0) {
      this.issueService.noTasksDialogMsg();
    }
    this.tasks = [];
  }

  // Style binding to currentTask checked
  setCompletedTaskStyle(task_index) {
    const styles = {
      'color':  this.taskCheckStatus[task_index] ? 'gray' : 'black',
      'text-decoration': this.taskCheckStatus[task_index] ? 'line-through' : 'none',
      'font-style':  this.taskCheckStatus[task_index] ? 'italic' : 'normal',
    };
    return styles;
  }

}
