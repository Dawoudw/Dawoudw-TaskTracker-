import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-start-chat',
  templateUrl: './start-chat.page.html',
  styleUrls: ['./start-chat.page.scss'],
})
export class StartChatPage implements OnInit {
  constructor(
    public chatService: ChatService,
    private router: Router
  ) { }

  listOfUsers = [];
  currentUserEmail = this.chatService.currentUser.email;
  users= [];
  participant = '';
  participant1 = '';
  title = '';
  

  ngOnInit() {
    //this gets a list of all users
    this.listOfUsers = [];
    this.chatService.getAllUsers().subscribe(result => {
      result.forEach(r => {
        if(r.payload.doc.data()['email'] != this.chatService.currentUser.email) {
          this.listOfUsers.push(r);
        }
      });   
    });
  }

  addUser(participant1) {
    // console.log("when calling addUser function, users array =");
    // console.log(this.users);
    this.participant = participant1;
    let obs = this.chatService.findUser(this.participant);
    forkJoin(obs).subscribe(res => {
      for (let data of res) {
        if (data.length > 0) {
          if(this.users.indexOf(data[0]) > -1) {
          } else {
            console.log("data[0]");
            console.log(data[0]);
            this.users.push(data[0]);
          }
        }
      }
      this.participant = '';
    });
  }

  createGroup() {
    console.log("this.title");
    console.log(this.title);
    console.log("this.users");
    console.log(this.users);
    console.log("users array length: ");
    console.log(this.users.length);
    this.chatService.createGroup(this.title, this.users).then(res => {
      console.log("group created");
      this.router.navigateByUrl('/chats');
    });
    this.users = [];
  }











}
