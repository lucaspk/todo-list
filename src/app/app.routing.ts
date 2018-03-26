import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
 
import { TaskComponent } from './task/task.component';
 
 
// Cria Rotas
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: TaskComponent },
  { path: 'task/new', component: TaskComponent},
  { path: 'task/:id', component: TaskComponent},
  { path: 'task/:id/edit', component: TaskComponent}
];
 
// Exporta a constante routing para importarmos ela no arquivo app.module.ts
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
