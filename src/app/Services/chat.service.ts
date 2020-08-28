import { Injectable } from '@angular/core';
import { UsersService } from "src/app/Services/users.service";
import { AuthService } from "src/app/Services/authService.service";
import { User } from "../Models/user";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { forkJoin, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
// import { firebase } from '@firebase/app';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(
    public usrServ: UsersService,
    private auth: AuthService,
    public db: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  usersList = this.usrServ.usersList;
  currentUser = this.auth.getLoggedUser();
  listOfGroups = [];
  currentUserIdFromFirebaseSetFromHomePage = '';
  currentUserIdFromFireabase = JSON.parse(localStorage.getItem("clientIdFirebase"));

  fromChatService() {
    console.log("fromChatService");
    console.log(this.usersList);
    this.usrServ.usersList.forEach ( user => {
      console.log("user");
      console.log(user['email']);
    })
  }

  getAllUsers(){
    return this.db.collection('usersTaskTracker').snapshotChanges();
  }

  

  // getAllGroups(){
  //   console.log("in getAllGroups");
  //   console.log(this.currentUser.email);
  //   console.log("current user's id from firebase ="+this.currentUserIdFromFirebase);
  //   let currentUserIdFromFirebase = '';
  //   let userObservable = this.findUser(this.currentUser.email);
  //   forkJoin(userObservable).subscribe(res => {
  //     for (let data of res) {
  //       if (data.length > 0) {
  //         // console.log("found an existing user with this user id ="+data[0].id);
  //         currentUserIdFromFirebase = data[0].id;
  //         console.log("currentUserIdFromFirebase");
  //         console.log(currentUserIdFromFirebase);
  //         // this.groupId = data[0].id;
  //         // this.router.navigateByUrl(`/chat/${this.groupId}`);
  //       }
  //     }
  //   });
  //   console.log("before error");
  //   // setTimeout(() => {
  //     console.log(currentUserIdFromFirebase);
  //     return this.db.collection(`usersTaskTracker/${currentUserIdFromFirebase}/groups`).snapshotChanges();
  //   // }, 2000);
    
    
  // }

  getCurrentUser() {
    console.log("currentUser ="+this.currentUser);
    console.log("current user's email ="+this.currentUser.email);
    console.log("firebase id for this user");
    
  }



  // checkOrCreateUserInFirebase() {
  //   //for checking if users exists in firebase collection "usersTaskTracker"
  //   //if a user is found, then load groups for group chat for that user
  //   let userObservable = this.findUser(this.currentUser.email);
  //   forkJoin(userObservable).subscribe(res => {
  //     for (let data of res) {
  //       if (data.length > 0) {
  //         // console.log("found an existing user with this user id ="+data[0].id);
  //         this.currentUserIdFromFirebase = data[0].id;
  //         // this.groupId = data[0].id;
  //         // this.router.navigateByUrl(`/chat/${this.groupId}`);
          
  //         //getting list of groups
  //         this.listOfGroups = [];
  //         this.getAllGroups(this.currentUserIdFromFirebase)
  //           .subscribe(result => {
  //             result.forEach(r => {
  //               if(r.payload.doc.data()['type'] == 'group') {
  //                 console.log("id of these groups =");
  //                 console.log(r.payload.doc.id);
  //                 this.listOfGroups.push(r);
  //               }
  //             });   
  //         });      


  //       }
  //       else {
  //         //User not found in firebase collection "usersTaskTracker"--creating the user
  //         console.log("user not found in firebase--in create user section");
  //         this.db.collection('usersTaskTracker').add({
  //           email: this.currentUser.email,
  //           userId: this.currentUser.userId,
  //           userName: this.currentUser.userName,
  //           avatar: this.currentUser.avatar
  //         });
  //       }
  //     }
  //   });
  // }

  findUser(email) {
    let user = this.db.collection('usersTaskTracker', ref => 
      ref.where('email', '==', email)).valueChanges({ idField: 'id' }).pipe(
      take(1)
    );
    return user;
  }

  // getAllGroups(id){
  //   console.log("id received ==="+id);
  //   return this.db.collection(`usersTaskTracker/${id}/groups`).snapshotChanges();
  // }

  getAllGroups2(){
    return this.db.collection(`usersTaskTracker/${this.currentUserIdFromFireabase}/groups`).snapshotChanges();
  }

  createGroup(title, users) {
    let current = {
      email: this.currentUser.email,
      id: this.currentUserIdFromFireabase,
      userName: this.currentUser.userName
    };
    // console.log("additional user(s) is/are: ");
    // console.log(users);
    let allUsers = [current];
    allUsers.push(...users);
    // console.log("allUsers for group chat");
    // console.log(allUsers);

    return this.db.collection('groupsTaskTracker').add({
      title: title,
      type: 'group',
      users: allUsers
    }).then(res => {
      let promises = [];
      for (let usr of allUsers) {
        console.log("usr");
        console.log(usr);
        console.log("usr.id");
        console.log(usr.id);
        console.log("res.id");
        console.log(res.id);
        let oneAdd = this.db.collection(`usersTaskTracker/${usr.id}/groups`).add({
          id: res.id,
          title: title,
          users: allUsers.length,
          type: 'group'
        });
        promises.push(oneAdd);
      }
      return Promise.all(promises);
    })
  }

  findGroupById(id) {
    let group = this.db.doc(`groupsTaskTracker/${id}`).snapshotChanges().pipe(
      take(1)
    );
    return group;
  }


  getOneGroup(id,user_group_key = null) {
    // console.log("firebase created current user's id");
    // console.log(this.auth.currentUserId);
    return this.db.doc(`groupsTaskTracker/${id}`).snapshotChanges().pipe(
      take(1),
      map(changes => {
        let count = 0;
        const data = changes.payload.data();
        this.db.collection(`groupsTaskTracker/${id}/messages`).snapshotChanges().
        forEach(result => {
          result.forEach (r => {
            // console.log("r ="+r);
            //Get firebase created id of each messsage: r.payload.doc.id
            const mId = r.payload.doc.id;
            const uId = r.payload.doc.data()['from'];
            // setTimeout(() => {
            //   // console.log("mId ="+mId);
            // }, 1000);
            if((r.payload.doc.data()['readFlag'] == false) && (uId != this.currentUserIdFromFireabase)) {
              count = count+1;
            }
          });
        });

        const group_id = changes.payload.id;
        // console.log("count");
        // console.log(count);
        return { user_group_key, id: group_id, ...data as {} };
      })
    )      
  }

  getChatMessages(groupId) {
    let count = 0;

    return this.db.collection(`groupsTaskTracker/${groupId}/messages`, ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data as {} };
      }))
    );
  }


  addChatMessage(msg, chatId) {
    return this.db.collection('groupsTaskTracker/' + chatId + '/messages').add({
      msg: msg,
      from: this.currentUserIdFromFireabase,
      readFlag: false,
      unreadCount: 0,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  addFileMessage(file, chatId) {
    let newName = `${new Date().getTime()}-${this.currentUserIdFromFireabase}.png`;
    let storageRef: AngularFireStorageReference = this.storage.ref(`/files/${chatId}/${newName}`);

    return {
      task: storageRef.putString(file, 'base64', { contentType: 'image/png' }), 
      ref: storageRef
    };
  }

  saveFileMessage(filepath, chatId) {
    return this.db.collection('groupsTaskTracker/' + chatId + '/messages').add({
      file: filepath,
      from: this.currentUserIdFromFireabase,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }






















}
