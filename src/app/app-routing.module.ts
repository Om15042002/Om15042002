import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTaskComponent } from './task-pages/add-task/add-task.component';
import { ViewtaskComponent } from './task-pages/viewtask/viewtask.component';

const routes:Routes=[
  {
    path:'',
    component: AddTaskComponent
  },
  {
    path:'viewtask',
    component: ViewtaskComponent
  }, 
  // {
  //   path:'Completedtasks',
  //   component: 
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }