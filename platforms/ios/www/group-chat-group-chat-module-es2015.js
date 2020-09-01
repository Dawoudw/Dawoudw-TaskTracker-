(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-chat-group-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/group-chat/group-chat.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/group-chat/group-chat.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-down-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"dots\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n<ion-item-divider>\n  <ion-label>\n    Signed in as: {{ currentUserEmail }}\n  </ion-label>\n</ion-item-divider>\n\n  <!-- Showing Groups created using \"Create A Group Button\" -->\n  <ion-item-divider *ngIf=\"listOfGroups2.length!=0\">\n    <ion-label>Your Groups</ion-label>\n  </ion-item-divider>\n  <ion-item button *ngFor=\"let item of listOfGroups2;\"\n    (click)=\"GroupChat(item.payload.doc.data().id,item.payload.doc.data().title)\"\n  >\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3>{{ item.payload.doc.data().title }}</h3>\n        </ion-text>\n        <p>{{ item.payload.doc.data().users}} Users</p>\n        <!-- <p>Group id: {{ item.payload.doc.data().id }}</p> -->\n    </ion-label>\n  </ion-item>\n\n\n\n<ion-item-divider>\n  <ion-label>\n    Contacts (All Available Users)\n  </ion-label>\n</ion-item-divider>\n<ion-item button *ngFor=\"let item of listOfUsers;\"  (click)=\"oneOnOneChat(item.payload.doc.data().email,item.payload.doc.data().userName)\">\n  <ion-label>\n    {{ item.payload.doc.data().email }}\n    <p>{{ item.payload.doc.data().userName }}</p>\n  </ion-label>\n  <!-- Keep either a button or a routerlink--both togather will not work -->\n  <!-- <ion-button icon-only (click)=\"oneOnOneChat(item.payload.doc.data().email,item.payload.doc.data().nickname)\">\n    <ion-icon name=\"chatbubble-outline\"></ion-icon>\n  </ion-button> -->\n  <!-- <ion-button icon-only>\n    <ion-icon name=\"call-outline\"></ion-icon>\n  </ion-button> -->\n</ion-item>\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button color=\"light\" fill=\"clear\" expand=\"full\" routerLink=\"/start-chat\">Create a new Group</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/Pages/group-chat/group-chat-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/group-chat/group-chat-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: GroupChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupChatPageRoutingModule", function() { return GroupChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _group_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-chat.page */ "./src/app/Pages/group-chat/group-chat.page.ts");




const routes = [
    {
        path: '',
        component: _group_chat_page__WEBPACK_IMPORTED_MODULE_3__["GroupChatPage"]
    }
];
let GroupChatPageRoutingModule = class GroupChatPageRoutingModule {
};
GroupChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GroupChatPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/group-chat/group-chat.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/group-chat/group-chat.module.ts ***!
  \*******************************************************/
/*! exports provided: GroupChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupChatPageModule", function() { return GroupChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _group_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-chat-routing.module */ "./src/app/Pages/group-chat/group-chat-routing.module.ts");
/* harmony import */ var _group_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-chat.page */ "./src/app/Pages/group-chat/group-chat.page.ts");







let GroupChatPageModule = class GroupChatPageModule {
};
GroupChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _group_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroupChatPageRoutingModule"]
        ],
        declarations: [_group_chat_page__WEBPACK_IMPORTED_MODULE_6__["GroupChatPage"]]
    })
], GroupChatPageModule);



/***/ }),

/***/ "./src/app/Pages/group-chat/group-chat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/group-chat/group-chat.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2dyb3VwLWNoYXQvZ3JvdXAtY2hhdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Pages/group-chat/group-chat.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/group-chat/group-chat.page.ts ***!
  \*****************************************************/
/*! exports provided: GroupChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupChatPage", function() { return GroupChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/chat.service */ "./src/app/Services/chat.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let GroupChatPage = class GroupChatPage {
    constructor(chatService, db, router) {
        this.chatService = chatService;
        this.db = db;
        this.router = router;
        this.listOfUsers = [];
        this.currentUserEmail = this.chatService.currentUser.email;
        this.listOfGroups = this.chatService.listOfGroups;
        this.listOfGroups2 = [];
        this.currentFirebaseUserId = this.chatService.currentUserIdFromFireabase;
        this.titleCheck = '';
        this.participant = '';
        this.users = [];
    }
    ngOnInit() {
        console.log("check firebase user id set from home page here =" + this.currentFirebaseUserId);
        //checking or creating a user account for currenlty logged in user
        //if user exists, then load groups in which this user participates
        // this.checkOrCreateUserInFirebase();
        //this gets a list of all users
        this.listOfUsers = [];
        this.chatService.getAllUsers().subscribe(result => {
            // console.log("getting list of all users");
            result.forEach(r => {
                if (r.payload.doc.data()['email'] != this.chatService.currentUser.email) {
                    this.listOfUsers.push(r);
                }
            });
        });
        //get all groups for group chats
        this.listOfGroups2 = [];
        this.chatService.getAllGroups2().subscribe(result => {
            result.forEach(r => {
                if (r.payload.doc.data()['type'] == 'group') {
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
                if (r.payload.doc.data()['email'] != this.chatService.currentUser.email) {
                    this.listOfUsers.push(r);
                }
            });
        });
        //get all groups for group chats
        this.listOfGroups2 = [];
        this.chatService.getAllGroups2().subscribe(result => {
            result.forEach(r => {
                if (r.payload.doc.data()['type'] == 'group') {
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
    GroupChat(id, title) {
        // console.log("group id passed ="+id);
        // console.log("current user's id in firebase ="+this.currentFirebaseUserId);
        let obs2 = this.chatService.findGroupById(id);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(obs2).subscribe(res => {
            // console.log("res");
            // console.log(res);
            for (let data of res) {
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
    oneOnOneChat(email1, userName2) {
        //creating group name--------------------------------- stored in this.titleCheck (ordered alphabatically from both users' nickname)
        let userName1 = this.chatService.currentUser.userName;
        let x = userName1.localeCompare(userName2, undefined, { numeric: true, sensitivity: 'base' });
        if (x == -1) {
            // console.log("userName1 will come first");
            this.titleCheck = 'oOc_' + userName1 + '&' + userName2;
            console.log("this.titlecheck =" + this.titleCheck);
        }
        else {
            // console.log("userName2 will come first");
            this.titleCheck = 'oOc_' + userName2 + '&' + userName1;
            console.log("this.titlecheck =" + this.titleCheck);
        }
        let obs1 = this.findGroup(this.titleCheck);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(obs1).subscribe(res => {
            for (let data of res) {
                if (data.length > 0) {
                    console.log("found an existing group with this group id =" + data[0].id);
                    this.groupId = data[0].id;
                    this.router.navigateByUrl(`/chat/${this.groupId}`);
                }
                else {
                    console.log("group not found--in create group section"); //group not available--create group
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
        let group = this.db.collection('groupsTaskTracker', ref => ref.where('title', '==', title)).valueChanges({ idField: 'id' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
        return group;
    }
    addUser(participant1) {
        this.participant = participant1;
        let obs = this.chatService.findUser(this.participant);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(obs).subscribe(res => {
            for (let data of res) {
                if (data.length > 0) {
                    if (this.users.indexOf(data[0]) > -1) {
                    }
                    else {
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
        });
    }
};
GroupChatPage.ctorParameters = () => [
    { type: src_app_Services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
GroupChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-chat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./group-chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/group-chat/group-chat.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./group-chat.page.scss */ "./src/app/Pages/group-chat/group-chat.page.scss")).default]
    })
], GroupChatPage);



/***/ })

}]);
//# sourceMappingURL=group-chat-group-chat-module-es2015.js.map