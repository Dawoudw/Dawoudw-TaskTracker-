import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskSubviewPageRoutingModule } from './task-subview-routing.module';

import { TaskSubviewPage } from './task-subview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskSubviewPageRoutingModule
  ],
  declarations: [TaskSubviewPage]
})
export class TaskSubviewPageModule {}
