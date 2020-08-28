import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/Services/chat.service';
import { forkJoin, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-group-chat',
  templateUrl: './group-chat.page.html',
  styleUrls: ['./group-chat.page.scss'],
})
export class GroupChatPage implements OnInit {
  
  constructor(
    public chatService: ChatService,
    public db: AngularFirestore,
    private router: Router
  ) { }

  listOfUsers = [];
  currentUserEmail = this.chatService.currentUser.email;
  listOfGroups = this.chatService.listOfGroups;
  listOfGroups2 = [];
  currentFirebaseUserId = this.chatService.currentUserIdFromFireabase;
  titleCheck = '';
  groupId: any;
  participant = '';
  users = [];

  ngOnInit() {
    console.log("check firebase user id set from home page here ="+this.currentFirebaseUserId);
    //checking or creating a user account for currenlty logged in user
    //if user exists, then load groups in which this user participates
    // this.checkOrCreateUserInFirebase();


    //this gets a list of all users
    this.listOfUsers = [];
    this.chatService.getAllUsers().subscribe(result => {
      // console.log("getting list of all users");
      result.forEach(r => {
        if(r.payload.doc.data()['email'] != this.chatService.currentUser.email) {
          this.listOfUsers.push(r);
        }
      });   
    });


    //get all groups for group chats
    this.listOfGroups2 = [];
    this.chatService.getAllGroups2().subscribe(result => {
      result.forEach(r => {
        if(r.payload.doc.data()['type'] == 'group') {
          // console.log("id of these groups =");
          // console.log(r.payload.doc.id);
          this.listOfGroups2.push(r);
        }
      });   
    }); 


  }

   //swipe down to refresh
   doRefresh(event) {
    console.log('Begin async operation');
    //this gets a list of all users
    this.listOfUsers = [];
    this.chatService.getAllUsers().subscribe(result => {
      // console.log("getting list of all users");
      result.forEach(r => {
        if(r.payload.doc.data()['email'] != this.chatService.currentUser.email) {
          this.listOfUsers.push(r);
        }
      });   
    });


    //get all groups for group chats
    this.listOfGroups2 = [];
    this.chatService.getAllGroups2().subscribe(result => {
      result.forEach(r => {
        if(r.payload.doc.data()['type'] == 'group') {
          // console.log("id of these groups =");
          // console.log(r.payload.doc.id);
          this.listOfGroups2.push(r);
        }
      });   
    }); 

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }




  GroupChat(id,title) {
    // console.log("group id passed ="+id);
    // console.log("current user's id in firebase ="+this.currentFirebaseUserId);
    let obs2 = this.chatService.findGroupById(id);
    forkJoin(obs2).subscribe(res => {
      // console.log("res");
      // console.log(res);
      for(let data of res){
        // console.log("data");
        // console.log(data.payload.id);
        this.router.navigateByUrl(`/chat/${data.payload.id}`);
        //use following if passing 2 parameters
        // this.router.navigateByUrl(`/chat/${data.payload.id}/${this.currentFirebaseUserId}`);
      }
      // for (let data of res) {
      //   if (data.length > 0) {
      //     console.log("found an existing group with this group id ="+data[0].id);
      //     this.groupId = data[0].id;
      //     this.router.navigateByUrl(`/chat/${this.groupId}`);
      //   }
      // }
    });
  }

  //---------one on one chat
  oneOnOneChat(email1,userName2) {
    //creating group name--------------------------------- stored in this.titleCheck (ordered alphabatically from both users' nickname)
    let userName1 = this.chatService.currentUser.userName;
    let x = userName1.localeCompare(userName2, undefined, {numeric: true, sensitivity: 'base'});
    if(x==-1){
      // console.log("userName1 will come first");
      this.titleCheck = 'oOc_'+userName1 +'&'+ userName2;
      console.log("this.titlecheck ="+this.titleCheck);
    } else {
      // console.log("userName2 will come first");
      this.titleCheck = 'oOc_'+userName2 +'&'+ userName1;
      console.log("this.titlecheck ="+this.titleCheck);
    }

    let obs1 = this.findGroup(this.titleCheck);
    forkJoin(obs1).subscribe(res => {
      for (let data of res) {
        if (data.length > 0) {
          console.log("found an existing group with this group id ="+data[0].id);
          this.groupId = data[0].id;
          this.router.navigateByUrl(`/chat/${this.groupId}`);
        }
        else {
          console.log("group not found--in create group section");   //group not available--create group
          setTimeout(() => {
            this.addUser(email1);
            console.log(this.users);
            // this.readyToCreateOneOnOneGroup();
          // this.groupId  is assigned with new group id in createGroup
          }, 1000);
          setTimeout(() => {
            this.readyToCreateOneOnOneGroup();
          // this.groupId  is assigned with new group id in createGroup()
          
          }, 2000);
        }
      }
    });
  }


  findGroup(title) {
    let group = this.db.collection('groupsTaskTracker', ref => 
      ref.where('title', '==', title)).valueChanges({ idField: 'id' }).pipe(
      take(1)
    );
    return group;
  }

  addUser(participant1) {
    this.participant = participant1;
    let obs = this.chatService.findUser(this.participant);
    forkJoin(obs).subscribe(res => {
      for (let data of res) {
        if (data.length > 0) {
          if(this.users.indexOf(data[0]) > -1) {
          } else {
            this.users.push(data[0]);
          }
        }
      }
      this.participant = '';
    });
  }

  readyToCreateOneOnOneGroup() {
    this.createGroup(this.titleCheck, this.users).then(res => {
      console.log("group created");
      // this.router.navigateByUrl('/chats');
      this.router.navigateByUrl(`/chat/${this.groupId}`);
    });
    this.users = [];
  }

  createGroup(title, users) {
    let current = {
      email: this.chatService.currentUser.email,
      id: this.chatService.currentUserIdFromFireabase,
      userName: this.chatService.currentUser.userName
    };
    let allUsers = [current];
    allUsers.push(...users);
    return this.db.collection('groupsTaskTracker').add({
      title: title,
      type: 'OneOnOne',
      users: allUsers
    }).then(res => {
      // console.log("new group's id ="+res.id);
      this.groupId = res.id;
      let promises = [];
      for (let usr of allUsers) {
        let oneAdd = this.db.collection(`usersTaskTracker/${usr.id}/groups`).add({
          id: res.id,
          type: 'OneOnOne'
        });
        promises.push(oneAdd);
      }
      return Promise.all(promises);
    })
  }






}
