import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { ActivateGuard } from "src/app/Services/activate.guard";
import { Tab1Page } from "../tab1/tab1.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    // redirectTo:"users-progress",
    children: [
      {
        path: "users-progress", // loadChildren: () => //   import("../tab1/tab1.module").then((m) => m.Tab1PageModule), // loadChildren:'../tab1/tab1.module#Tab1PageModule',
        //component:Tab1Page, //Eager Load
        loadChildren: () =>
          import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
      },
      {
        path: "reports",
        loadChildren: () =>
          import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
      },
      {
        path: "mytasks",
        loadChildren: () =>
          import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
        canActivate: [ActivateGuard],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
