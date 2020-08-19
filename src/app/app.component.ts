import { Component } from "@angular/core";
import {
  Platform,
  NavController,
  MenuController,
  ModalController,
} from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthService } from "./Services/authService.service";
import { User } from "./Models/user";
import { Router } from "@angular/router";
import { CreateTaskPage } from "./Pages/create-task/create-task.page";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  loggedin: boolean = true; // to get this value form Auth service

  constructor(
    // private router: ActivatedRoute,
    // private navCtrl: NavController,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private menuCtr: MenuController,
    private router: Router,
    private modalCtrl: ModalController,  private navCtrl: NavController
  ) {
    this.initializeApp();
    //console.log("AppComponent constructor");
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    if (this.getIsLogged()) {
      this.auth.logOut();
      this.auth.userChange.emit(new User());
      this.closeMenu();
    }
    // console.log("logout" , this.getIsLogged())
    // if (this.getIsLogged()) this.authServ.userLogout();
    // else return;
  }
  getIsLogged(): boolean {
    return this.auth.isLoggedIn();
  }
  async closeMenu() {
    await this.menuCtr.toggle();
  }
  openMenu() {
    this.menuCtr.enable(true, "main-menu");
    this.menuCtr.open("main-menu");
  }
  openTeamProgress()
  {
    this.navCtrl.navigateForward("tasktracker/users-progress")
  }

  openNewTaskModal() {
    this.modalCtrl
      .create({
        component: CreateTaskPage,
      })
      .then((modalElement) => {
        modalElement.present();
        return modalElement.onDidDismiss();
      })
      .then((resultData) => {
        this.router.navigate(['tasktracker/mytasks'])
        console.log("ResultData: ", resultData);
      });
    this.closeMenu();
  }
}
