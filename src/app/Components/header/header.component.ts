import { Component, OnInit, OnChanges, DoCheck } from "@angular/core";
import * as moment from "moment";
import { AuthService } from "src/app/Services/authService.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit , OnChanges , DoCheck {
  userName: any;
  isLogged: boolean = false;
  constructor(private authServ: AuthService) {}
  ngDoCheck(): void {
    this.authServ.loginChange.subscribe((user) => {
      this.userName = user != null ? user.userName : "Wael ngDoCheck";
    });
  }

  public currentDateTime: any = moment().format("MM-DD-YYYY HH:mm:ss");

  ngOnInit(): void {
    this.authServ.loginChange.subscribe((user) => {
      this.userName = user != null ? user.userName : "Wael ngOnInit";
    });
    console.log("ngOnInit", this.getIsLogged());
    
    //   setInterval(() => {
    //     this.currentDateTime = moment().format("MM-DD-YYYY HH:mm:ss");
    //  //   console.log(this.currentDateTime);
    //   }, 1000);
    // if (this.AutServ.checkCurrentUser()) {
    // this.userName = this.AutServ.CurrentUser.userName;
    // this.isLogged = this.AutServ.isLogged;
    // this.AutServ.userObs.subscribe({
    //   next: (cu) => {
    //     console.log("ccccccccccccccc",cu);
    //     this.userName =this.AutServ.CurrentUser.userName;
    //     this.isLogged = this.AutServ.isLogged;
    //   },
    // });
    // "HeaderComponent",
    // this.AutServ.CurrentUser,
    // this.AutServ.isLogged,
    // this.isLogged
    // this.userName = this.AutServ.getLoggedUser().userName;
    //   }
    //else this.AutServ.redirectToLogin();
  }

  ngOnChanges()
  {
    this.authServ.loginChange.subscribe((user) => {
      this.userName = user != null ? user.userName : "Wael ngOnChanges";
    });
    console.log("ngOnChanges", this.getIsLogged());
  }
  logout() {

    this.authServ.userLogout();
    // console.log("logout", this.getIsLogged());
    // if (this.getIsLogged()) this.authServ.userLogout();
    // else return;
  }
  getIsLogged(): boolean {
    return this.authServ && this.authServ.isLogged;
  }

  ionViewWillEnter() {
    this.authServ.loginChange.subscribe((user) => {
      this.userName = user != null ? user.userName : "Wael ionViewWillEnter";
    });
    console.log("ionViewWillEnter", this.getIsLogged());
  }
  ionViewDidEnter()
  {
    this.authServ.loginChange.subscribe((user) => {
      this.userName = user != null ? user.userName : "Wael ionViewDidEnter";
    });
    console.log("ionViewDidEnter", this.getIsLogged());
  }
  ionViewWillLeave()
  {
    this.authServ.loginChange.subscribe((user) => {
      this.userName = user != null ? user.userName : "Wael ionViewWillLeave";
    });
    console.log("ionViewWillLeave", this.getIsLogged());
  }
  ionViewDidLeave()
  {
    this.authServ.loginChange.subscribe((user) => {
      this.userName = user != null ? user.userName : "Wael ionViewDidLeave";
    });
    console.log("ionViewDidLeave", this.getIsLogged());
  }

  ngAfterContentInit()
  {
    this.authServ.loginChange.subscribe((user) => {
      this.userName = user != null ? user.userName : "Wael ngAfterContentInit";
    });
    console.log("ionViewDidLeave", this.getIsLogged());
  }
  ngAfterContentChecked()
  {
    this.authServ.loginChange.subscribe((user) => {
      this.userName = user != null ? user.userName : "Wael ngAfterContentChecked";
    });
    console.log("ionViewDidLeave", this.getIsLogged());
  }
  ngAfterViewInit()
  {
    this.authServ.loginChange.subscribe((user) => {
      this.userName = user != null ? user.userName : "Wael ngAfterViewInit";
    });
    console.log("ionViewDidLeave", this.getIsLogged());
  }
  ngAfterViewChecked()
  {
    this.authServ.loginChange.subscribe((user) => {
      this.userName = user != null ? user.userName : "Wael ngAfterViewChecked";
    });
    console.log("ionViewDidLeave", this.getIsLogged());
  }

}
