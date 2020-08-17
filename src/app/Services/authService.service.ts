import { Injectable, EventEmitter } from "@angular/core";
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
} from "amazon-cognito-identity-js";
// import { Observable } from 'rxjs/Observable';
import Observable from "zen-observable";
import { BehaviorSubject, throwError } from "rxjs";
import { User } from "../Models/user";
import { NavController } from "@ionic/angular";
import { UsersService } from "./users.service";

const poolData = {
  UserPoolId: "us-east-2_JQy9YBUJg", // Your user pool id here
  ClientId: "13fbvqm3f0032tnpqd2cr68jbc", // Your client id here
};
const userPool = new CognitoUserPool(poolData);

@Injectable({
  providedIn: "root",
})
export class AuthService {
  cognitoUser: any;
  newPassword;
  errmessage: EventEmitter<any> = new EventEmitter();
  userChange: EventEmitter<User> = new EventEmitter();
  constructor(private navCtrl: NavController, private userServ: UsersService) {}

  register(email, password) {
    const attributeList = [];

    return new Observable((observer) => {
      userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
          //  console.log("signUp error", err);
          observer.error(err);
        }

        this.cognitoUser = result.user;
        //   console.log("signUp success", result);
        observer.next(result);
        observer.complete();
      });
    });
  }

  confirmAuthCode(code) {
    const user = {
      Username: this.cognitoUser.username,
      Pool: userPool,
    };
    return new Observable((observer) => {
      const cognitoUser = new CognitoUser(user);
      cognitoUser.confirmRegistration(code, true, function (err, result) {
        if (err) {
          // console.log(err);
          observer.error(err);
        }
        // console.log("confirmAuthCode() success", result);
        observer.next(result);
        observer.complete();
      });
    });
  }

  signIn(email, password) {
    let self = this;

    const authenticationData = {
      Username: email,
      Password: password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const userData = {
      Username: email,
      Pool: userPool,
    };
    const cognitoUser = new CognitoUser(userData);
    new Observable((observer) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
          //    console.log("result", result);
          observer.next(result);
          observer.complete();
        },
        onFailure: function (err) {
          // console.log("onFailure", err);
          // self.errmessage.next(err.message);
          self.errmessage.emit(err.message);
          observer.error(err);
        },
        // newPasswordRequired: async function(userAttributes) {
        //   let newPassword = await self.openDialog(userData.Username);
        //   console.log('The new password is')
        //   console.log(newPassword)
        //   delete userAttributes.email_verified;
        //   cognitoUser.completeNewPasswordChallenge(newPassword, userAttributes, this);
        // }
      });
    }).subscribe(
      (data) => {
        console.log("signIn data", data);

        if (self.isLoggedIn()) {
          let currentUser = this.userServ.getUserByEmail(email);
          if (currentUser) {
            self.setLoggedUser(currentUser);
            self.userChange.next(currentUser);
            self.redirectToHome();
            // this.sendUser(username);
            // this.sendState(true);
          }
        } else self.redirectToLogin();
      },
      (err) => {
        self.errmessage = err.message;
        console.log("signIn err", err.message);
        //throw err;
      }
    );
  }

  isLoggedIn() {
    // console.log(
    //   "userPool.getCurrentUser() != null",
    //   userPool.getCurrentUser() != null
    // );
    // console.log(
    //   "userPool.getCurrentUser() != undefined",
    //   userPool.getCurrentUser() != undefined
    // );
    return userPool.getCurrentUser() != null;
  }

  getAuthenticatedUser(): User {
    // gets the current user from the local storage
    if (this.isLoggedIn()) {
      let usr = new Promise((resolve) => {
        resolve(userPool.getCurrentUser());
      })
        .then((res) => {
          usr = JSON.parse(res["storage"].client);
          return new User(usr.userId, usr.userName, usr.email, usr.avatar);
          //  console.log(".then((res)=>", usr);
        })
        .catch((err) => {
          //return err;
        });
    } else return null;
    //return userPool.getCurrentUser();
  }
  setLoggedUser(user: User) {
    localStorage.setItem("client", JSON.stringify(user));
  }
  setGuestUser(email: string) {
    sessionStorage.setItem("email", email);
  }
  getLoggedUser(): User {
    let val = localStorage.getItem("client");
    let client = new User();
    client = JSON.parse(val);
    console.log("getLoggedUser", client);
    // this.CurrentUser = client;
    // this.isLogged = true;
    return client;
  }
  getGuestUser(): any {
    //return sessionStorage.getItem("email");
    let email = sessionStorage.getItem("email");
    console.log("getGuestUser", email);
    return email;
  }
  public redirectToHome(): void {
    //  if (this.checkCurrentUser())
    // console.log("this.navCtrl.navigateRoot(/);");
    this.navCtrl.navigateRoot("tasktracker/users-progress");
    //this.router.navigate["/"];
  }
  public redirectToLogin(): void {
    // if (!this.checkCurrentUser())
    this.navCtrl.navigateRoot("/");
    // this.router.navigate["login"];
  }

  logOut() {
    userPool.getCurrentUser().signOut();
    this.cognitoUser = null;
    localStorage.clear();
    this.redirectToLogin();
  }
  // async openDialog(email): Promise <any>{
  // let dialogRef = this.dialog.open(ForgotComponent, {data : {email: email}});
  // let password: string = '';

  //   return dialogRef.afterClosed().toPromise().then(result => {
  //    this.newPassword = result.data;
  //    console.log(`New password is: ${password}`);
  //    return Promise.resolve(result.data)
  //   });
  // }
}
