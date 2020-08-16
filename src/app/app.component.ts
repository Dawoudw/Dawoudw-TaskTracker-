import { Component } from "@angular/core";
import { Platform, NavController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
 
 
 
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
 
  ) {
    this.initializeApp();
            
    // this.auth.redirectAuthorizeUser();
    // console.log("AppComponent", this.auth.CurrentUser)
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

 
    });
  }
}
