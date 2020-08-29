(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-chat-chat-module~Pages-start-chat-start-chat-module~group-chat-group-chat-module~home-~d4eeb33b"],{

/***/ "./src/app/Services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/users.service */ "./src/app/Services/users.service.ts");
/* harmony import */ var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/authService.service */ "./src/app/Services/authService.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);







// import { firebase } from '@firebase/app';

var ChatService = /** @class */ (function () {
    function ChatService(usrServ, auth, db, storage) {
        this.usrServ = usrServ;
        this.auth = auth;
        this.db = db;
        this.storage = storage;
        this.usersList = this.usrServ.usersList;
        this.currentUser = this.auth.getLoggedUser();
        this.listOfGroups = [];
        this.currentUserIdFromFirebaseSetFromHomePage = '';
        this.currentUserIdFromFireabase = JSON.parse(localStorage.getItem("clientIdFirebase"));
    }
    ChatService.prototype.fromChatService = function () {
        console.log("fromChatService");
        console.log(this.usersList);
        this.usrServ.usersList.forEach(function (user) {
            console.log("user");
            console.log(user['email']);
        });
    };
    ChatService.prototype.getAllUsers = function () {
        return this.db.collection('usersTaskTracker').snapshotChanges();
    };
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
    ChatService.prototype.getCurrentUser = function () {
        console.log("currentUser =" + this.currentUser);
        console.log("current user's email =" + this.currentUser.email);
        console.log("firebase id for this user");
    };
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
    ChatService.prototype.findUser = function (email) {
        var user = this.db.collection('usersTaskTracker', function (ref) {
            return ref.where('email', '==', email);
        }).valueChanges({ idField: 'id' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
        return user;
    };
    // getAllGroups(id){
    //   console.log("id received ==="+id);
    //   return this.db.collection(`usersTaskTracker/${id}/groups`).snapshotChanges();
    // }
    ChatService.prototype.getAllGroups2 = function () {
        return this.db.collection("usersTaskTracker/" + this.currentUserIdFromFirebaseSetFromHomePage + "/groups").snapshotChanges();
    };
    ChatService.prototype.createGroup = function (title, users) {
        var _this = this;
        var current = {
            email: this.currentUser.email,
            id: this.currentUserIdFromFirebaseSetFromHomePage,
            userName: this.currentUser.userName
        };
        // console.log("additional user(s) is/are: ");
        // console.log(users);
        var allUsers = [current];
        allUsers.push.apply(allUsers, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(users));
        // console.log("allUsers for group chat");
        // console.log(allUsers);
        return this.db.collection('groupsTaskTracker').add({
            title: title,
            type: 'group',
            users: allUsers
        }).then(function (res) {
            var e_1, _a;
            var promises = [];
            try {
                for (var allUsers_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(allUsers), allUsers_1_1 = allUsers_1.next(); !allUsers_1_1.done; allUsers_1_1 = allUsers_1.next()) {
                    var usr = allUsers_1_1.value;
                    console.log("usr");
                    console.log(usr);
                    console.log("usr.id");
                    console.log(usr.id);
                    console.log("res.id");
                    console.log(res.id);
                    var oneAdd = _this.db.collection("usersTaskTracker/" + usr.id + "/groups").add({
                        id: res.id,
                        title: title,
                        users: allUsers.length,
                        type: 'group'
                    });
                    promises.push(oneAdd);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (allUsers_1_1 && !allUsers_1_1.done && (_a = allUsers_1.return)) _a.call(allUsers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return Promise.all(promises);
        });
    };
    ChatService.prototype.findGroupById = function (id) {
        var group = this.db.doc("groupsTaskTracker/" + id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
        return group;
    };
    ChatService.prototype.getOneGroup = function (id, user_group_key) {
        var _this = this;
        if (user_group_key === void 0) { user_group_key = null; }
        // console.log("firebase created current user's id");
        // console.log(this.auth.currentUserId);
        return this.db.doc("groupsTaskTracker/" + id).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
            var count = 0;
            var data = changes.payload.data();
            _this.db.collection("groupsTaskTracker/" + id + "/messages").snapshotChanges().
                forEach(function (result) {
                result.forEach(function (r) {
                    // console.log("r ="+r);
                    //Get firebase created id of each messsage: r.payload.doc.id
                    var mId = r.payload.doc.id;
                    var uId = r.payload.doc.data()['from'];
                    // setTimeout(() => {
                    //   // console.log("mId ="+mId);
                    // }, 1000);
                    if ((r.payload.doc.data()['readFlag'] == false) && (uId != _this.currentUserIdFromFirebaseSetFromHomePage)) {
                        count = count + 1;
                    }
                });
            });
            var group_id = changes.payload.id;
            // console.log("count");
            // console.log(count);
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ user_group_key: user_group_key, id: group_id }, data);
        }));
    };
    ChatService.prototype.getChatMessages = function (groupId) {
        var count = 0;
        return this.db.collection("groupsTaskTracker/" + groupId + "/messages", function (ref) { return ref.orderBy('createdAt'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: id }, data);
        }); }));
    };
    ChatService.prototype.addChatMessage = function (msg, chatId) {
        return this.db.collection('groupsTaskTracker/' + chatId + '/messages').add({
            msg: msg,
            from: this.currentUserIdFromFirebaseSetFromHomePage,
            readFlag: false,
            unreadCount: 0,
            createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.serverTimestamp()
        });
    };
    ChatService.prototype.addFileMessage = function (file, chatId) {
        var newName = new Date().getTime() + "-" + this.currentUserIdFromFirebaseSetFromHomePage + ".png";
        var storageRef = this.storage.ref("/files/" + chatId + "/" + newName);
        return {
            task: storageRef.putString(file, 'base64', { contentType: 'image/png' }),
            ref: storageRef
        };
    };
    ChatService.prototype.saveFileMessage = function (filepath, chatId) {
        return this.db.collection('groupsTaskTracker/' + chatId + '/messages').add({
            file: filepath,
            from: this.currentUserIdFromFirebaseSetFromHomePage,
            createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.serverTimestamp()
        });
    };
    ChatService.ctorParameters = function () { return [
        { type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
        { type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }
    ]; };
    ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ChatService);
    return ChatService;
}());



/***/ })

}]);
//# sourceMappingURL=default~Pages-chat-chat-module~Pages-start-chat-start-chat-module~group-chat-group-chat-module~home-~d4eeb33b.js.map