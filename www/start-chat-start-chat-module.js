(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["start-chat-start-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/start-chat/start-chat.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/start-chat/start-chat.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- ////////////////////////////////////////////////////////////// -->\n<ion-header translucent=\"false\">\n  <ion-toolbar>\n    <ion-label slot=\"start\" color=\"primary\" (click)=\"back()\">\n      <ion-icon\n        slot=\"icon-only\"\n        size=\"large\"\n        name=\"chevron-back-outline\"\n      ></ion-icon>\n    </ion-label>\n\n    <ion-label position=\"fixed\" color=\"primary\">\n      <p\n        style=\"\n          font-size: 18px;\n\n          text-align: center !important;\n        \"\n      >\n        Create New Group Chat\n      </p>\n    </ion-label>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        text=\"\"\n        routerLink=\"/tasktracker/group-chat\"\n      ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" calss=\"ion-no-padding ion-no-margin\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\" offset-med=\"3\" offset-lg=\"3\">\n        <ion-row style=\"justify-items: left\">\n          <ion-col class=\"ion-no-margin ion-no-padding\">\n            <ion-list>\n              <ion-item detail=\"false\">\n                <ion-label position=\"floating\">\n                  Group Title <ion-text color=\"danger\"> * </ion-text></ion-label\n                >\n                <ion-input [(ngModel)]=\"title\"></ion-input>\n              </ion-item>\n\n              <ion-item detail=\"true\" (click)=\"openSelect()\">\n                <ion-buttons>\n                  <!-- <ion-icon name=\"add\" slot=\"start\">\n                    </ion-icon> -->\n                  <ion-label>\n                    Select Group Members<ion-text color=\"danger\"> * </ion-text>\n                  </ion-label>\n                </ion-buttons>\n\n                <ion-select\n                  hidden=\"true\"\n                  #lstallusers\n                  #ddlUsers\n                  [(ngModel)]=\"selectedUsers\"\n                  name=\"lstallusers\"\n                  multiple\n                  okText=\"OK\"\n                  cancelText=\"Cancel\"\n                  [selectedText]=\"\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let item of listOfUsers\"\n                    [value]=\"item\"\n                    selectedText=\"\"\n                  >\n                    {{ item.userName }}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col\n            class=\"ion-no-padding ion-no-margin\"\n            size=\"12\"\n            class=\"ion-border\"\n            color=\"light\"\n          >\n            <!-- <ion-item-divider color=\"secondary\" mode=\"ios\" outline=\"true\">\n              <ion-label><p>Group Members</p></ion-label>\n            </ion-item-divider> -->\n\n            <ion-list\n              class=\"ion-no-padding ion-no-margin\"\n              lines=\"none\"\n              detail=\"false\"\n              ngDefaultControl\n              [(ngModel)]=\"selectedUsers\"\n              name=\"lstusers\"\n              #lstusers\n            >\n              <ion-chip\n                *ngFor=\"let item of selectedUsers;let i =index\"\n                color=\"primary\"\n                mode=\"ios\"\n                outline=\"true\"\n                style=\"height: auto\"\n              >\n                <ion-avatar color=\"dark\">\n                  <!-- <img src=\"../assets/images/avatar.svg\"/> -->\n                  <text-avatar  text ={{item.userName}}></text-avatar>\n                </ion-avatar>\n                <ion-label position=\"stacked\">\n                  {{item.userName}}\n                  <ion-note position=\"stacked\"\n                    ><p>{{item.email}}</p>\n                  </ion-note></ion-label\n                >\n                <ion-icon\n                  name=\"close\"\n                  class=\"ion-float-right\"\n                  color=\"danger\"\n                  (click)=\"removeUser(i)\"\n                ></ion-icon>\n              </ion-chip>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <ion-button\n    class=\"ion-text-capitalize ion-margin\"\n    color=\"primary\"\n    expand=\"block\"\n    (click)=\"createGroup()\"\n    [disabled]=\"!title||selectedUsers.length<1\"\n    >Create\n  </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/Pages/start-chat/start-chat-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/start-chat/start-chat-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: StartChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartChatPageRoutingModule", function() { return StartChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-chat.page */ "./src/app/Pages/start-chat/start-chat.page.ts");




var routes = [
    {
        path: '',
        component: _start_chat_page__WEBPACK_IMPORTED_MODULE_3__["StartChatPage"]
    }
];
var StartChatPageRoutingModule = /** @class */ (function () {
    function StartChatPageRoutingModule() {
    }
    StartChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], StartChatPageRoutingModule);
    return StartChatPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/Pages/start-chat/start-chat.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/start-chat/start-chat.module.ts ***!
  \*******************************************************/
/*! exports provided: StartChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartChatPageModule", function() { return StartChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _start_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-chat-routing.module */ "./src/app/Pages/start-chat/start-chat-routing.module.ts");
/* harmony import */ var _directives_text_avatar_directive_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/text-avatar.directive.module */ "./src/app/directives/text-avatar.directive.module.ts");
/* harmony import */ var _start_chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./start-chat.page */ "./src/app/Pages/start-chat/start-chat.page.ts");








var StartChatPageModule = /** @class */ (function () {
    function StartChatPageModule() {
    }
    StartChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _start_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartChatPageRoutingModule"],
                _directives_text_avatar_directive_module__WEBPACK_IMPORTED_MODULE_6__["TextAvatarModule"]
            ],
            declarations: [_start_chat_page__WEBPACK_IMPORTED_MODULE_7__["StartChatPage"]]
        })
    ], StartChatPageModule);
    return StartChatPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/start-chat/start-chat.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/start-chat/start-chat.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Set the width to the full container and center the content */\nion-select {\n  /* Applies to the value and placeholder color */\n  color: #545ca7;\n  color: var(--ion-color-primary);\n  /* Set a different placeholder color */\n  --placeholder-color:var(--ion-color-primary) ;\n  /* Set full opacity on the placeholder */\n  --placeholder-opacity: 1;\n}\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWphc3JhbWFuaS9PdGhlci13ZWJkZXYvaW9uaWMvVGFzay1UcmFja2VyLURldjIwMjAwODMwL3NyYy9hcHAvUGFnZXMvc3RhcnQtY2hhdC9zdGFydC1jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvc3RhcnQtY2hhdC9zdGFydC1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBQTtBQUNBO0VBQ0ksK0NBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLDZDQUFBO0VBRUEsd0NBQUE7RUFDQSx3QkFBQTtBQ0FKO0FERUU7RUFDRSxXQUFBO0VBRUEsdUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3N0YXJ0LWNoYXQvc3RhcnQtY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgdGhlIHdpZHRoIHRvIHRoZSBmdWxsIGNvbnRhaW5lciBhbmQgY2VudGVyIHRoZSBjb250ZW50ICovXG5pb24tc2VsZWN0IHtcbiAgICAvKiBBcHBsaWVzIHRvIHRoZSB2YWx1ZSBhbmQgcGxhY2Vob2xkZXIgY29sb3IgKi9cbiAgICBjb2xvcjogIzU0NWNhNztcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC8qIFNldCBhIGRpZmZlcmVudCBwbGFjZWhvbGRlciBjb2xvciAqL1xuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDtcbiAgXG4gICAgLyogU2V0IGZ1bGwgb3BhY2l0eSBvbiB0aGUgcGxhY2Vob2xkZXIgKi9cbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG4gIH07XG4gIGlvbi1zZWxlY3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfTtcbiAgXG4vLyAgICIsIi8qIFNldCB0aGUgd2lkdGggdG8gdGhlIGZ1bGwgY29udGFpbmVyIGFuZCBjZW50ZXIgdGhlIGNvbnRlbnQgKi9cbmlvbi1zZWxlY3Qge1xuICAvKiBBcHBsaWVzIHRvIHRoZSB2YWx1ZSBhbmQgcGxhY2Vob2xkZXIgY29sb3IgKi9cbiAgY29sb3I6ICM1NDVjYTc7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC8qIFNldCBhIGRpZmZlcmVudCBwbGFjZWhvbGRlciBjb2xvciAqL1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSA7XG4gIC8qIFNldCBmdWxsIG9wYWNpdHkgb24gdGhlIHBsYWNlaG9sZGVyICovXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Pages/start-chat/start-chat.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/start-chat/start-chat.page.ts ***!
  \*****************************************************/
/*! exports provided: StartChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartChatPage", function() { return StartChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/chat.service */ "./src/app/Services/chat.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var StartChatPage = /** @class */ (function () {
    function StartChatPage(chatService, navCtrl, router) {
        this.chatService = chatService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.currentFirebaseUserId = this.chatService.currentUserIdFromFirebaseSetFromHomePage;
        this.listOfUsers = [];
        this.currentUserEmail = this.chatService.currentUser.email;
        this.users = new Array();
        this.selectedUsers = new Array();
        this.participant = "";
        this.participant1 = "";
        this.title = "";
    }
    StartChatPage.prototype.ngOnInit = function () {
        var _this = this;
        //getting firebase userid if not found
        if (this.currentFirebaseUserId == null || this.currentFirebaseUserId == '') {
            console.log("firebase userid not found");
            var user = this.chatService.findUser(this.currentUserEmail);
            //console.log(user);  //observable
            user.subscribe(function (result) {
                // console.log("firebase user id retrieved ="+result[0].id);
                _this.chatService.currentUserIdFromFirebaseSetFromHomePage = result[0].id;
                _this.currentFirebaseUserId = result[0].id;
            });
        }
        setTimeout(function () {
            console.log("check firebase user id here =" +
                _this.currentFirebaseUserId);
            //this gets a list of all users
            _this.getAllUsers();
            _this.router.events.subscribe(function (e) {
                if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivationStart"] && e.snapshot.outlet === "start-chat")
                    _this.outlet.deactivate();
            });
        }, 2000);
    };
    StartChatPage.prototype.openSelect = function () {
        this.mySelect.open();
    };
    StartChatPage.prototype.getAllUsers = function () {
        var _this = this;
        this.listOfUsers = [];
        this.chatService.getAllUsers().subscribe(function (result) {
            result.forEach(function (r) {
                if (r.payload.doc.data()["email"] != _this.chatService.currentUser.email) {
                    // console.log("check following");
                    // console.log(r.payload.doc.data());
                    // console.log("firebase user id of this user ="+r.payload.doc.id);
                    var user = {
                        email: r.payload.doc.data()["email"],
                        userName: r.payload.doc.data()["userName"],
                        id: r.payload.doc.id
                    };
                    _this.listOfUsers.push(user);
                }
            });
        });
        console.log("getAllUsers", this.listOfUsers);
    };
    StartChatPage.prototype.removeUser = function (i) {
        this.selectedUsers.splice(i, 1);
    };
    // addUser(obj) {
    //   this.users.push(obj);
    //   // try {
    //   //   console.log("obj ", obj);
    //   //   if (obj) {
    //   //     for (let i in obj) {
    //   //       console.log(" for (let i in obj)", i);
    //   //     }
    //   //   }
    //   console.log(
    //     "when calling addUser function, this.selectedUsers array =",
    //     this.users
    //   );
    //   //   obj = null;
    //   // } catch (err) {
    //   //   console.log(err);
    //   // }
    // }
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
    StartChatPage.prototype.createGroup = function () {
        var _this = this;
        this.users = new Array();
        // console.log("this.title ="+this.title);
        // console.log("this.users =");
        // console.log(this.users);
        // console.log("Selected users array length: ");
        // console.log(this.selectedUsers.length);
        this.selectedUsers.forEach(function (u) {
            // console.log("u =");
            // console.log(u);
            _this.users.push(u);
        });
        // console.log("users array length: ");
        // console.log(this.users.length);
        // console.log(this.users);
        // console.log("current user's firebase uid ="+this.chatService.currentUserIdFromFirebaseSetFromHomePage);
        this.chatService.createGroup(this.title, this.users).then(function (res) {
            console.log("group created");
            // console.log("res");
            // console.log(res);
            // console.log(res.values);
            // this.router.navigateByUrl('/tasktracker/group-chat');
            _this.navCtrl.navigateRoot("/chat/" + _this.chatService.groupId);
        });
        this.users = [];
        this.selectedUsers = [];
        this.title = "";
        //this.navCtrl.navigateRoot(["/tasktracker/group-chat"]);
    };
    StartChatPage.prototype.back = function () {
        this.navCtrl.back();
    };
    StartChatPage.prototype.reset = function () {
        this.listOfUsers = [];
        this.currentUserEmail = this.chatService.currentUser.email;
        this.users = [];
        this.selectedUsers = [];
        // this.participant = "";
        // this.participant1 = "";
        this.title = "";
    };
    StartChatPage.prototype.ionViewWillLeave = function () {
        this.reset();
    };
    StartChatPage.prototype.ngOnDestroy = function () {
        this.reset();
    };
    StartChatPage.ctorParameters = function () { return [
        { type: src_app_Services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"])
    ], StartChatPage.prototype, "outlet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("lstallusers")
    ], StartChatPage.prototype, "mySelect", void 0);
    StartChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-start-chat",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./start-chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/start-chat/start-chat.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./start-chat.page.scss */ "./src/app/Pages/start-chat/start-chat.page.scss")).default]
        })
    ], StartChatPage);
    return StartChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=start-chat-start-chat-module.js.map