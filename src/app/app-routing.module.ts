import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { ActivateGuard } from './Services/activate.guard';
import { HomePage } from './Pages/home/home.page';
 

const routes: Routes = [
  {
    path: "",
    component:HomePage,
    // loadChildren: () =>
    //   import("./Pages/home/home.module").then((m) => m.HomePageModule),
    // component:HomePage
    // loadChildren: './Pages/home/home.module#HomePageModule',
    pathMatch: "full",
  },
  {
    path: "report",
    loadChildren: () => import("./Pages/report/report.module").then( m => m.ReportPageModule)
  },
  {
    path: "tasktracker",
  
    //loadChildren: () =>import("./Pages/tabs/tabs.module").then((m) => m.TabsPageModule),
    children: [
      //   { path: "", loadChildren: "./Pages/tabs/tabs.module#TabsPageModule" },

      {
        path: "",
        loadChildren: () =>
          import("./Pages/tabs/tabs.module").then((m) => m.TabsPageModule),
      },
      // {
      //   path: "reports", 
      //    canActivate:[ActivateGuard],
      //   loadChildren: () =>
      //     import("./Pages/tab2/tab2.module").then((m) => m.Tab2PageModule),
      // },
    ],
  },
  {
    path: "create-task",
    canActivate:[ActivateGuard],
    loadChildren: () =>
      import("./Pages/create-task/create-task.module").then(
        (m) => m.CreateTaskPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./Pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./Pages/home/home.module").then((m) => m.HomePageModule),
  },
 
  // {
  //   path: "**",
  //   loadChildren: () =>
  //     import("./Pages/home/home.module").then((m) => m.HomePageModule),
  // },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
