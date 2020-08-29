(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-start-chat-start-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/start-chat/start-chat.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/start-chat/start-chat.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/group-chat\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Creating a new Group</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-divider>\n    <ion-label>\n      Signed in as: {{ currentUserEmail }}\n    </ion-label>\n  </ion-item-divider>\n  <ion-item>\n    <ion-input placeholder=\"Please enter a name for this new group\" [(ngModel)]=\"title\"></ion-input>\n  </ion-item>\n<br>\n\n  <!-- shows users added to this group -->\n  <ion-item-divider *ngIf=\"users.length!=0\">\n    <!-- <ion-label *ngIf=\"(users | async)?.length!=0\"> -->\n    <ion-label>\n      Users added to this group\n    </ion-label>\n  </ion-item-divider>\n  <ion-item *ngFor=\"let usr of users\">\n    <ion-label>\n      {{ usr.email }}\n      <p>{{ usr.nickname }}</p>\n    </ion-label>\n  </ion-item>\n\n<br><br>\n  <ion-item-divider>\n    <ion-label>\n      Contacts (All Available Users)\n    </ion-label>\n  </ion-item-divider>\n  <ion-item button *ngFor=\"let item of listOfUsers;\">\n    <ion-label>\n      {{ item.payload.doc.data().email }}\n      <p>{{ item.payload.doc.data().userName }}</p>\n    </ion-label>\n    <ion-button icon-only (click)=\"addUser(item.payload.doc.data().email)\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-button>\n    <!-- Keep either a button or a routerlink--both togather will not work -->\n    <!-- <ion-button icon-only (click)=\"oneOnOneChat(item.payload.doc.data().email,item.payload.doc.data().nickname)\">\n      <ion-icon name=\"chatbubble-outline\"></ion-icon>\n    </ion-button> -->\n    <!-- <ion-button icon-only>\n      <ion-icon name=\"call-outline\"></ion-icon>\n    </ion-button> -->\n  </ion-item>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button color=\"light\" expand=\"full\" fill=\"clear\" [disabled]=\"title == '' || users.length == 0\" \n    (click)=\"createGroup()\">Start\n      Group</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _start_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start-chat-routing.module */ "./src/app/Pages/start-chat/start-chat-routing.module.ts");
/* harmony import */ var _start_chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./start-chat.page */ "./src/app/Pages/start-chat/start-chat.page.ts");







var StartChatPageModule = /** @class */ (function () {
    function StartChatPageModule() {
    }
    StartChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _start_chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["StartChatPageRoutingModule"]
            ],
            declarations: [_start_chat_page__WEBPACK_IMPORTED_MODULE_6__["StartChatPage"]]
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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3N0YXJ0LWNoYXQvc3RhcnQtY2hhdC5wYWdlLnNjc3MifQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_Services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/chat.service */ "./src/app/Services/chat.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var StartChatPage = /** @class */ (function () {
    function StartChatPage(chatService, router) {
        this.chatService = chatService;
        this.router = router;
        this.listOfUsers = [];
        this.currentUserEmail = this.chatService.currentUser.email;
        this.users = [];
        this.participant = '';
        this.participant1 = '';
        this.title = '';
    }
    StartChatPage.prototype.ngOnInit = function () {
        var _this = this;
        //this gets a list of all users
        this.listOfUsers = [];
        this.chatService.getAllUsers().subscribe(function (result) {
            result.forEach(function (r) {
                if (r.payload.doc.data()['email'] != _this.chatService.currentUser.email) {
                    _this.listOfUsers.push(r);
                }
            });
        });
    };
    StartChatPage.prototype.addUser = function (participant1) {
        var _this = this;
        // console.log("when calling addUser function, users array =");
        // console.log(this.users);
        this.participant = participant1;
        var obs = this.chatService.findUser(this.participant);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(obs).subscribe(function (res) {
            var e_1, _a;
            try {
                for (var res_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(res), res_1_1 = res_1.next(); !res_1_1.done; res_1_1 = res_1.next()) {
                    var data = res_1_1.value;
                    if (data.length > 0) {
                        if (_this.users.indexOf(data[0]) > -1) {
                        }
                        else {
                            console.log("data[0]");
                            console.log(data[0]);
                            _this.users.push(data[0]);
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (res_1_1 && !res_1_1.done && (_a = res_1.return)) _a.call(res_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.participant = '';
        });
    };
    StartChatPage.prototype.createGroup = function () {
        var _this = this;
        console.log("this.title");
        console.log(this.title);
        console.log("this.users");
        console.log(this.users);
        console.log("users array length: ");
        console.log(this.users.length);
        this.chatService.createGroup(this.title, this.users).then(function (res) {
            console.log("group created");
            _this.router.navigateByUrl('/tasktracker/group-chat');
        });
        this.users = [];
    };
    StartChatPage.ctorParameters = function () { return [
        { type: src_app_Services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    StartChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start-chat',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./start-chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/start-chat/start-chat.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./start-chat.page.scss */ "./src/app/Pages/start-chat/start-chat.page.scss")).default]
        })
    ], StartChatPage);
    return StartChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-start-chat-start-chat-module.js.map