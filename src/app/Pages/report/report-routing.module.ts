import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportPage } from './report.page';

const routes: Routes = [
  {
    path: '',
    component: ReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD
export class ReportPageRoutingModule {}
=======
export class ReportPageRoutingModule {}
>>>>>>> 2c647cc1c8f775be4455e001409fcda8841cb29c
