import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";
import { ActivateGuard } from "src/app/Services/activate.guard";
import { Tab1Page } from "../tab1/tab1.page";

// const routes: Routes = [
//   {
//     path: "",
//     component: TabsPage,
//       // pathMatch: "prefix",
//     // pathMatch:"full",
//     // redirectTo:"team-progress",
//     children: [
//       {
//         path: "team-progress", // loadChildren: () => //   import("../tab1/tab1.module").then((m) => m.Tab1PageModule), // loadChildren:'../tab1/tab1.module#Tab1PageModule',
//         //component:Tab1Page, //Eager Load
//         loadChildren: () =>
//           import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
//       },
//       {
//         path: "reports",
//         loadChildren: () =>
//           import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
//       },
//       {
//         path: "mytasks",
//         loadChildren: () =>
//           import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
//         canActivate: [ActivateGuard],
//       },
//       {
//         path: "home",
//         loadChildren: () =>
//           import("../home/home.module").then((m) => m.HomePageModule),

//       },
//     ],
//   },
// ];
const routes: Routes = [
  {
    path: "tasktracker",
    component: TabsPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: "../home/home.module#HomePageModule",
          },
        ],
      },
      {
        path: "team-progress",
        children: [
          {
            path: "",
            loadChildren: "../tab1/tab1.module#Tab1PageModule",
          },
        ],
      },
      {
        path: "mytasks",
        children: [
          {
            path: "",
            loadChildren: "../tab3/tab3.module#Tab3PageModule",
          },
        ],
      },
      {
        path: "reports",
        children: [
          {
            path: "",
            loadChildren: "../tab2/tab2.module#Tab2PageModule",
          },
        ],
      },
      {
        path: "login",
        children: [
          {
            path: "",
            loadChildren: "../login/login.module#LoginPageModule",
          },
        ],
      },
      // { path: 'tab2/products/:id', loadChildren: '../tab2/view-product/view-product.module#ViewProductPageModule' },
      {
        path: "reports",
        children: [
          {
            path: "",
            loadChildren: "../tab3/tab3.module#Tab3PageModule",
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tasktracker/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "index",
    pathMatch: "full",
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
