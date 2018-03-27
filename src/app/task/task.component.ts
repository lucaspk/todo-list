import { Component, OnInit } from '@angular/core';
import { IssueService} from './issue.service';
import { Task } from './shared/task';
import { TaskService } from './shared/task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  isAddClicked = false;

  totalTodo: number = 0;
  
  task:Task = new Task();

  currentTask = '';
  newTaskName = ''; 

  _tasks: Task[] = [];
  editables: boolean[] = []; 

  constructor(
    private issueService: IssueService, 
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    let result = this.taskService.getAll();
    result.subscribe(data =>
      { 
        this.router.navigate(['/']);
        this._tasks = Object.values(data);
        this._tasks = this._tasks.filter(d => d.isChecked === false);
        this.totalTodo = this._tasks.length;
      } 
    );
  }

  saveTask() {
    this.isAddClicked = !this.isAddClicked;
    if (this.isAddClicked === false) {
      if (this.currentTask.trim() !== '') {
        this.editables.push(false);

        this.task.name = this.currentTask;
        this.task.isChecked = false;
        this.task.description = '';

        this.totalTodo++;

        this.save(this.task);

        this.task = new Task();
        this.currentTask = '';
      } else {
        this.issueService.emptyTaskDialogMsg();
      }
    }
  }

  save(task) { 
    let result = this.taskService.post(task);
    
    result.subscribe(data =>
      { 
        this.getAllTasks()
        this.router.navigate(['/']);
      } 
    );
  }

  updateStatus (index: number) {
    this.totalTodo--;
    this._tasks[index].isChecked = !this._tasks[index].isChecked;

    let task =  this._tasks[index];

    this.updateTask(task);
  }

  updateTask (task) {
    let result = this.taskService.update(task.id, task);
    
    result.subscribe(data =>
      {
        this.router.navigate(['/']);
      } 
    );
  } 

  update(index: number) {
    if (this.newTaskName.trim() === "") {
      this.issueService.emptyTaskDialogMsg();
    } else {
      this._tasks[index].name = this.newTaskName;
      let task =  this._tasks[index];
      this.updateTask(task);
      this.editTask(index);
      this.newTaskName = '';
    }
    
  }

  editTask(index: number) {
    this.editables[index] = !this.editables[index];
  }

  clearTasks() {
    if (this.totalTodo === 0) {
      this.issueService.noTasksDialogMsg();
    }

    this._tasks.forEach(d => {
      if (d.isChecked === false) {
        d.isChecked = true;
        this.updateTask(d);
        
        this.totalTodo--;
      }
    });
  }

  // Style binding to currentTask checked
  setCompletedTaskStyle(task_index) {
    const styles = {
      'color':  this._tasks[task_index].isChecked ? 'gray' : 'black',
      'text-decoration': this._tasks[task_index].isChecked ? 'line-through' : 'none',
      'font-style':  this._tasks[task_index].isChecked ? 'italic' : 'normal',
    };
    return styles;
  }

}
