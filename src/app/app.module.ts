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


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    IssueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
