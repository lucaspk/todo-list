import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule, MatIconModule, MatInputModule, MatListModule,
  MatSnackBarModule
} from '@angular/material';
import {IssueService} from './task/issue.service';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { TaskService } from './task/shared/task.service';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    RouterModule.forRoot([
      {
        path: 'tasks',
        component: TaskComponent
      }]),
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    IssueService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
