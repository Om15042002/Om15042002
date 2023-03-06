import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';

import { ViewtaskComponent } from './viewtask/viewtask.component';
import { CommonPartsModule } from "../common-parts/common-parts.module";



@NgModule({
    declarations: [
        AddTaskComponent,
        ViewtaskComponent
    ],
    exports: [
        AddTaskComponent,
        ViewtaskComponent
    ],
    imports: [
        CommonModule,
        CommonPartsModule
    ]
})
export class TaskPagesModule { }
