function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["group-chat-group-chat-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/group-chat/group-chat.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/group-chat/group-chat.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGroupChatGroupChatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-down-outline\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"dots\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n<ion-item-divider>\n  <ion-label>\n    Signed in as: {{ currentUserEmail }}\n  </ion-label>\n</ion-item-divider>\n\n  <!-- Showing Groups created using \"Create A Group Button\" -->\n  <ion-item-divider *ngIf=\"listOfGroups2.length!=0\">\n    <ion-label>Your Groups</ion-label>\n  </ion-item-divider>\n  <ion-item button *ngFor=\"let item of listOfGroups2;\"\n    (click)=\"GroupChat(item.payload.doc.data().id,item.payload.doc.data().title)\"\n  >\n    <ion-label class=\"ion-text-wrap\">\n      <ion-text color=\"primary\">\n        <h3>{{ item.payload.doc.data().title }}</h3>\n        </ion-text>\n        <p>{{ item.payload.doc.data().users}} Users</p>\n        <!-- <p>Group id: {{ item.payload.doc.data().id }}</p> -->\n    </ion-label>\n  </ion-item>\n\n\n\n<ion-item-divider>\n  <ion-label>\n    Contacts (All Available Users)\n  </ion-label>\n</ion-item-divider>\n<ion-item button *ngFor=\"let item of listOfUsers;\"  (click)=\"oneOnOneChat(item.payload.doc.data().email,item.payload.doc.data().userName)\">\n  <ion-label>\n    {{ item.payload.doc.data().email }}\n    <p>{{ item.payload.doc.data().userName }}</p>\n  </ion-label>\n  <!-- Keep either a button or a routerlink--both togather will not work -->\n  <!-- <ion-button icon-only (click)=\"oneOnOneChat(item.payload.doc.data().email,item.payload.doc.data().nickname)\">\n    <ion-icon name=\"chatbubble-outline\"></ion-icon>\n  </ion-button> -->\n  <!-- <ion-button icon-only>\n    <ion-icon name=\"call-outline\"></ion-icon>\n  </ion-button> -->\n</ion-item>\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button color=\"light\" fill=\"clear\" expand=\"full\" routerLink=\"/start-chat\">Create a new Group</ion-button>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/Pages/group-chat/group-chat-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Pages/group-chat/group-chat-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: GroupChatPageRoutingModule */

  /***/
  function srcAppPagesGroupChatGroupChatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupChatPageRoutingModule", function () {
      return GroupChatPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _group_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./group-chat.page */
    "./src/app/Pages/group-chat/group-chat.page.ts");

    var routes = [{
      path: '',
      component: _group_chat_page__WEBPACK_IMPORTED_MODULE_3__["GroupChatPage"]
    }];

    var GroupChatPageRoutingModule = function GroupChatPageRoutingModule() {
      _classCallCheck(this, GroupChatPageRoutingModule);
    };

    GroupChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GroupChatPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pages/group-chat/group-chat.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Pages/group-chat/group-chat.module.ts ***!
    \*******************************************************/

  /*! exports provided: GroupChatPageModule */

  /***/
  function srcAppPagesGroupChatGroupChatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupChatPageModule", function () {
      return GroupChatPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _group_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./group-chat-routing.module */
    "./src/app/Pages/group-chat/group-chat-routing.module.ts");
    /* harmony import */


    var _group_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./group-chat.page */
    "./src/app/Pages/group-chat/group-chat.page.ts");

    var GroupChatPageModule = function GroupChatPageModule() {
      _classCallCheck(this, GroupChatPageModule);
    };

    GroupChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _group_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroupChatPageRoutingModule"]],
      declarations: [_group_chat_page__WEBPACK_IMPORTED_MODULE_6__["GroupChatPage"]]
    })], GroupChatPageModule);
    /***/
  },

  /***/
  "./src/app/Pages/group-chat/group-chat.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/Pages/group-chat/group-chat.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGroupChatGroupChatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2dyb3VwLWNoYXQvZ3JvdXAtY2hhdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/group-chat/group-chat.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Pages/group-chat/group-chat.page.ts ***!
    \*****************************************************/

  /*! exports provided: GroupChatPage */

  /***/
  function srcAppPagesGroupChatGroupChatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupChatPage", function () {
      return GroupChatPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_Services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Services/chat.service */
    "./src/app/Services/chat.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var GroupChatPage = /*#__PURE__*/function () {
      function GroupChatPage(chatService, db, router) {
        _classCallCheck(this, GroupChatPage);

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

      _createClass(GroupChatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log("check firebase user id set from home page here =" + this.currentFirebaseUserId); //checking or creating a user account for currenlty logged in user
          //if user exists, then load groups in which this user participates
          // this.checkOrCreateUserInFirebase();
          //this gets a list of all users

          this.listOfUsers = [];
          this.chatService.getAllUsers().subscribe(function (result) {
            // console.log("getting list of all users");
            result.forEach(function (r) {
              if (r.payload.doc.data()['email'] != _this.chatService.currentUser.email) {
                _this.listOfUsers.push(r);
              }
            });
          }); //get all groups for group chats

          this.listOfGroups2 = [];
          this.chatService.getAllGroups2().subscribe(function (result) {
            result.forEach(function (r) {
              if (r.payload.doc.data()['type'] == 'group') {
                // console.log("id of these groups =");
                // console.log(r.payload.doc.id);
                _this.listOfGroups2.push(r);
              }
            });
          });
        } //swipe down to refresh

      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          var _this2 = this;

          console.log('Begin async operation'); //this gets a list of all users

          this.listOfUsers = [];
          this.chatService.getAllUsers().subscribe(function (result) {
            // console.log("getting list of all users");
            result.forEach(function (r) {
              if (r.payload.doc.data()['email'] != _this2.chatService.currentUser.email) {
                _this2.listOfUsers.push(r);
              }
            });
          }); //get all groups for group chats

          this.listOfGroups2 = [];
          this.chatService.getAllGroups2().subscribe(function (result) {
            result.forEach(function (r) {
              if (r.payload.doc.data()['type'] == 'group') {
                // console.log("id of these groups =");
                // console.log(r.payload.doc.id);
                _this2.listOfGroups2.push(r);
              }
            });
          });
          setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
          }, 2000);
        }
      }, {
        key: "GroupChat",
        value: function GroupChat(id, title) {
          var _this3 = this;

          // console.log("group id passed ="+id);
          // console.log("current user's id in firebase ="+this.currentFirebaseUserId);
          var obs2 = this.chatService.findGroupById(id);
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(obs2).subscribe(function (res) {
            // console.log("res");
            // console.log(res);
            var _iterator = _createForOfIteratorHelper(res),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var data = _step.value;

                // console.log("data");
                // console.log(data.payload.id);
                _this3.router.navigateByUrl("/chat/".concat(data.payload.id)); //use following if passing 2 parameters
                // this.router.navigateByUrl(`/chat/${data.payload.id}/${this.currentFirebaseUserId}`);

              } // for (let data of res) {
              //   if (data.length > 0) {
              //     console.log("found an existing group with this group id ="+data[0].id);
              //     this.groupId = data[0].id;
              //     this.router.navigateByUrl(`/chat/${this.groupId}`);
              //   }
              // }

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          });
        } //---------one on one chat

      }, {
        key: "oneOnOneChat",
        value: function oneOnOneChat(email1, userName2) {
          var _this4 = this;

          //creating group name--------------------------------- stored in this.titleCheck (ordered alphabatically from both users' nickname)
          var userName1 = this.chatService.currentUser.userName;
          var x = userName1.localeCompare(userName2, undefined, {
            numeric: true,
            sensitivity: 'base'
          });

          if (x == -1) {
            // console.log("userName1 will come first");
            this.titleCheck = 'oOc_' + userName1 + '&' + userName2;
            console.log("this.titlecheck =" + this.titleCheck);
          } else {
            // console.log("userName2 will come first");
            this.titleCheck = 'oOc_' + userName2 + '&' + userName1;
            console.log("this.titlecheck =" + this.titleCheck);
          }

          var obs1 = this.findGroup(this.titleCheck);
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(obs1).subscribe(function (res) {
            var _iterator2 = _createForOfIteratorHelper(res),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var data = _step2.value;

                if (data.length > 0) {
                  console.log("found an existing group with this group id =" + data[0].id);
                  _this4.groupId = data[0].id;

                  _this4.router.navigateByUrl("/chat/".concat(_this4.groupId));
                } else {
                  console.log("group not found--in create group section"); //group not available--create group

                  setTimeout(function () {
                    _this4.addUser(email1);

                    console.log(_this4.users); // this.readyToCreateOneOnOneGroup();
                    // this.groupId  is assigned with new group id in createGroup
                  }, 1000);
                  setTimeout(function () {
                    _this4.readyToCreateOneOnOneGroup(); // this.groupId  is assigned with new group id in createGroup()

                  }, 2000);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          });
        }
      }, {
        key: "findGroup",
        value: function findGroup(title) {
          var group = this.db.collection('groupsTaskTracker', function (ref) {
            return ref.where('title', '==', title);
          }).valueChanges({
            idField: 'id'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
          return group;
        }
      }, {
        key: "addUser",
        value: function addUser(participant1) {
          var _this5 = this;

          this.participant = participant1;
          var obs = this.chatService.findUser(this.participant);
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(obs).subscribe(function (res) {
            var _iterator3 = _createForOfIteratorHelper(res),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var data = _step3.value;

                if (data.length > 0) {
                  if (_this5.users.indexOf(data[0]) > -1) {} else {
                    _this5.users.push(data[0]);
                  }
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            _this5.participant = '';
          });
        }
      }, {
        key: "readyToCreateOneOnOneGroup",
        value: function readyToCreateOneOnOneGroup() {
          var _this6 = this;

          this.createGroup(this.titleCheck, this.users).then(function (res) {
            console.log("group created"); // this.router.navigateByUrl('/chats');

            _this6.router.navigateByUrl("/chat/".concat(_this6.groupId));
          });
          this.users = [];
        }
      }, {
        key: "createGroup",
        value: function createGroup(title, users) {
          var _this7 = this;

          var current = {
            email: this.chatService.currentUser.email,
            id: this.chatService.currentUserIdFromFireabase,
            userName: this.chatService.currentUser.userName
          };
          var allUsers = [current];
          allUsers.push.apply(allUsers, _toConsumableArray(users));
          return this.db.collection('groupsTaskTracker').add({
            title: title,
            type: 'OneOnOne',
            users: allUsers
          }).then(function (res) {
            // console.log("new group's id ="+res.id);
            _this7.groupId = res.id;
            var promises = [];

            var _iterator4 = _createForOfIteratorHelper(allUsers),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var usr = _step4.value;

                var oneAdd = _this7.db.collection("usersTaskTracker/".concat(usr.id, "/groups")).add({
                  id: res.id,
                  type: 'OneOnOne'
                });

                promises.push(oneAdd);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            return Promise.all(promises);
          });
        }
      }]);

      return GroupChatPage;
    }();

    GroupChatPage.ctorParameters = function () {
      return [{
        type: src_app_Services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    GroupChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-group-chat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./group-chat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/group-chat/group-chat.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./group-chat.page.scss */
      "./src/app/Pages/group-chat/group-chat.page.scss"))["default"]]
    })], GroupChatPage);
    /***/
  }
}]);
//# sourceMappingURL=group-chat-group-chat-module-es5.js.map