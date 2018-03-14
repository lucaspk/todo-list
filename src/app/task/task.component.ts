import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  private taskName = "";

  private tasks = [];

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    this.tasks.push(this.taskName);
    this.taskName = "";
  }

  numTasks() {
    this.tasks.length;
  }

}
