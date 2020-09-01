import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { ChatService } from "src/app/Services/chat.service";

import { NavController, IonSelect } from "@ionic/angular";
import { RouterOutlet, Router, ActivationStart } from "@angular/router";

@Component({
  selector: "app-start-chat",
  templateUrl: "./start-chat.page.html",
  styleUrls: ["./start-chat.page.scss"],
})
export class StartChatPage implements OnInit ,OnDestroy {
  constructor(
    public chatService: ChatService,
    private navCtrl: NavController,
    private router: Router
  ) {}

  listOfUsers = [];
  currentUserEmail = this.chatService.currentUser.email;
  users: any[] = new Array();
  selectedUsers: any[] = new Array();

  participant = "";
  participant1 = "";
  title = "";
  @ViewChild(RouterOutlet) outlet: RouterOutlet;
  @ViewChild("lstallusers") mySelect: IonSelect;
  ngOnInit() {
    //this gets a list of all users
    this.getAllUsers();
    this.router.events.subscribe((e) => {
      if (e instanceof ActivationStart && e.snapshot.outlet === "start-chat")
        this.outlet.deactivate();
    });
  }
  openSelect() {
    this.mySelect.open();
  }
  getAllUsers() {
    this.listOfUsers = [];
    this.chatService.getAllUsers().subscribe((result) => {
      result.forEach((r) => {
        if (
          r.payload.doc.data()["email"] != this.chatService.currentUser.email
        ) {
          let user = {
            email: r.payload.doc.data()["email"],
            userName: r.payload.doc.data()["userName"],
          };
          this.listOfUsers.push(user);
        }
      });
    });
    console.log("getAllUsers", this.listOfUsers);
  }
  removeUser(i) {
    this.selectedUsers.splice(i, 1);
  }
  // addUser(participant1) {
  //   // console.log("when calling addUser function, users array =");
  //   // console.log(this.users);
  //   this.participant = participant1;
  //   let obs = this.chatService.findUser(this.participant);
  //   forkJoin(obs).subscribe(res => {
  //     for (let data of res) {
  //       if (data.length > 0) {
  //         if(this.users.indexOf(data[0]) > -1) {
  //         } else {
  //           console.log("data[0]");
  //           console.log(data[0]);
  //           this.users.push(data[0]);
  //         }
  //       }
  //     }
  //     this.participant = '';
  //   });
  // }

  addUser(obj) {
    this.users.push(obj);
    // try {
    //   console.log("obj ", obj);
    //   if (obj) {
    //     for (let i in obj) {
    //       console.log(" for (let i in obj)", i);
    //     }
    //   }
    console.log(
      "when calling addUser function, this.selectedUsers array =",
      this.users
    );
    //   obj = null;
    // } catch (err) {
    //   console.log(err);
    // }
  }

  createGroup() {
    this.users = new Array();
    console.log("this.title");
    console.log(this.title);
    console.log("this.users");
    console.log(this.users);

    console.log("Selected users array length: ");
    console.log(this.selectedUsers.length);
    this.selectedUsers.forEach((u) => {
      this.users.push(u.email);
    });
    console.log("users array length: ");
    console.log(this.users.length);

    this.chatService.createGroup(this.title, this.users).then((res) => {
      console.log("group created");
    });
    this.users = [];
    this.selectedUsers = [];
    this.title = "";
    //this.navCtrl.navigateRoot(["/tasktracker/group-chat"]);
  }
  back() {
    this.navCtrl.back();
  }
  reset() {
    this.listOfUsers = [];
    this.currentUserEmail = this.chatService.currentUser.email;
    this.users = [];
    this.selectedUsers = [];

    // this.participant = "";
    // this.participant1 = "";
    this.title = "";
  }
  ionViewWillLeave()
  {
    this.reset();
  }
  ngOnDestroy() {
    this.reset();
  }
}
