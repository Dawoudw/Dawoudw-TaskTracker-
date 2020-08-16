import { Component, OnInit } from "@angular/core";

import { UsersService } from "src/app/Services/users.service";

import { AuthService } from "src/app/Services/authService.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(private authServ: AuthService, private userServ: UsersService) {
    if (authServ.checkCurrentUser()) {
      authServ.redirectToHome();
    }
  }

  email: any;
  pass: any;
  message: any;
  messageType: any;
  loggedIn: boolean;
  loading: boolean;
  ngOnInit() {
    // this.authServ.auth.sharedUser.subscribe((user) => (this.email = user));
    // this.authServ.auth.sharedLoggedIn.subscribe(
    //   (loggedIn) => (this.loggedIn = loggedIn)
    // );
  }

  async signIn() {
    this.loading = true;
    await new Promise(() => {
      console.log("Sign In");
      setTimeout(() => {
        try {
       let user =   this.authServ.userLogin(this.email, this.pass);
       console.log("emit user" ,user)
          this.authServ.loginChange.emit(user)
        } catch (err) {
          this.loading = false;
          this.message = err;
        }
      }, 1000);
    }).catch((error) => (this.message = error));
  }
}
