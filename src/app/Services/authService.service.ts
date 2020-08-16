import { Injectable, EventEmitter } from "@angular/core";
import { User } from "../Models/user";
import { HttpClient } from "@angular/common/http";
import { AuthApi } from "./authApi.service";
import { NavController } from "@ionic/angular";
import { throwError, BehaviorSubject, Observable, pipe, from } from "rxjs";
import { UsersService } from "./users.service";
import { EventService } from "./event-service.service";
import { Router } from "@angular/router";
import { map, scan } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public CurrentUser: User = new User();
  error: boolean;
  isLogged: boolean = false;
  private user = new BehaviorSubject("");
  private loggedIn = new BehaviorSubject(false);
  sharedUser = this.user.asObservable();
  sharedLoggedIn = this.loggedIn.asObservable();
  public loginChange: EventEmitter<User> = new EventEmitter();
  public userObs: Observable<User>;

  constructor(
    public auth: AuthApi,
    private navCtrl: NavController,
    private userServ: UsersService,
    public eventServ: EventService,
    private router: Router
  ) {}

  //################ Start of Client Section ###################
  userLogin(username: any, pass: any): User {
    //let loginuser 
    this.auth.signIn(username, pass).subscribe(
      (data) => {
        this.loginChange.next(this.CurrentUser)
        this.CurrentUser = this.userServ.getUserByEmail(username);
        console.log(" this.CurrentUser!==null" ,this.CurrentUser!==null);
        console.log(" this.CurrentUser!==undefined" ,this.CurrentUser!==undefined);
        console.log(" this.CurrentUser!=null" ,this.CurrentUser!=null);
        console.log(" this.CurrentUser!=undefined" ,this.CurrentUser!=undefined);
        if (
          this.CurrentUser != null &&
          this.CurrentUser !== undefined &&
          this.CurrentUser.userId >= 0
        ) {
          this.setLoggedUser(this.CurrentUser);
          // this.userObs.subscribe((user) => {
          //   user = this.CurrentUser;
          //      console.log(" this.userObs.subscribe((user)", user);
          // });

          // this.sendUser(username);
          // this.sendState(true);
          this.redirectToHome();
        } else throwError("Login Faild");
      },
      (err) => {
        this.error = true;
        return err;
      }

    );
    return this.CurrentUser
  }

  setLoggedUser(user: User) {
    localStorage.setItem("client", JSON.stringify(user));
    this.isLogged = true;
  }
  //to be used anywhere the user object is needed, it is better to call it in the component constructor
  getLoggedUser(): User {
    let val = localStorage.getItem("client");
    let client = new User();
    client = JSON.parse(val);
    console.log("getLoggedUser", this.loggedIn);
    this.CurrentUser = client;
    this.isLogged = true;
    return client;
  }
  //used on logout
  userLogout() {
    //if (this.auth.isLoggedIn()) {
    this.auth.logOut();
    // this.auth.sendState(false);
    //}
    this.CurrentUser = new User();
    this.error = false;
    this.isLogged = false;
    localStorage.clear();
    this.redirectToLogin();
  }
  checkCurrentUser(): boolean {
    this.CurrentUser = this.getLoggedUser();
    console.log("checkCurrentUser():", this.CurrentUser);
    if (this.CurrentUser == null || this.CurrentUser === undefined)
      return false;
    else return true;
  }
  public redirectToHome(): void {
    //  if (this.checkCurrentUser())
    console.log("    this.navCtrl.navigateRoot(/);");
    this.navCtrl.navigateRoot("tasktracker/users-progress");
    //this.router.navigate["/"];
  }
  public redirectToLogin(): void {
    // if (!this.checkCurrentUser())
    this.navCtrl.navigateRoot("/");
    // this.router.navigate["login"];
  }

  sendUser(user: string) {
    //  this.user.next(user);
  }

  sendState(state: boolean) {
    // this.loggedIn.next(state);
  }
}
