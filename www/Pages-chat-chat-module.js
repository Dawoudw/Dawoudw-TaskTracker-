(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-chat-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/chat/chat.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/chat/chat.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" class=\"ion-margin-right\">\n      <ion-back-button\n        text=\"\"\n        defaultHref=\"tasktracker/group-chat\"\n      ></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>{{ chat?.title }}</ion-title> -->\n\n    <ion-chip class=\"ion-margin-start\" color=\"primary\">\n      <ion-avatar>\n        <text-avatar text=\"{{chatTitle}}\"></text-avatar>\n      </ion-avatar>\n      <ion-label>{{ chatTitle }}</ion-label>\n    </ion-chip>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button  fill=\"clear\" (click)=\"leave()\">\n        Leave Group\n      </ion-button> -->\n      <!-- <ion-button *ngIf=\"leaveGroupFlag\" fill=\"clear\" (click)=\"leave()\">\n        Leave\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content #content class=\"ion-padding\">\n  <ion-list\n    class=\"ion-no-padding ion-no-margin\"\n    lines=\"none\"\n    detail=\"false\"\n    ngDefaultControl\n    [(ngModel)]=\"messages\"\n    name=\"lstmessages\"\n    #lstmessages\n    *ngFor=\"let message of messages | async\"\n  >\n    <!-- <strong> <small>{{ message.user }} </small></strong><br />\n        <span\n          >{{ message.msg }}\n          <img [src]=\"message.file\" *ngIf=\"message.file\" />\n        </span>\n\n        <div class=\"time ion-text-right\">\n          <br />{{ message.createdAt?.toMillis() | date:'short' }}\n        </div> -->\n\n    <ion-chip\n      *ngIf=\"message.from !== currentFirebaseUserId\"\n      slot=\"end\"\n      color=\"warning\"\n      outline=\"false\"\n      style=\"height: auto; float: left !important\"\n    >\n      <ion-label>\n       <small><b> {{ message.user }}</b></small>\n        <ion-note\n          ><p>{{message.msg}}</p>\n\n          <ion-label position=\"stacked\">\n            <img [src]=\"message.file\" *ngIf=\"message.file\" />\n            <ion-note position=\"stacked\"\n              ><p>\n                <small class=\"time ion-text-right\"\n                  >{{ message.createdAt?.toMillis() | date:'short' }}</small\n                >\n              </p>\n            </ion-note></ion-label\n          >\n        </ion-note>\n      </ion-label>\n      <!--  -->\n    </ion-chip>\n\n    <ion-chip\n      *ngIf=\"message.from === currentFirebaseUserId\"\n      slot=\"end\"\n      color=\"secondary\"\n      style=\"height: auto; float: right !important\"\n    >\n      <ion-label>\n        <small><b> {{ message.user }}</b></small>\n        <ion-note\n          ><p>{{message.msg}}</p>\n\n          <ion-label position=\"stacked\">\n            <img [src]=\"message.file\" *ngIf=\"message.file\" />\n            <ion-note position=\"stacked\"\n              ><p>\n                <small class=\"time ion-text-right\"\n                  >{{ message.createdAt?.toMillis() | date:'short' }}</small\n                >\n              </p>\n            </ion-note></ion-label\n          >\n        </ion-note>\n      </ion-label>\n      <!-- <small class=\"time ion-text-right\">{{ message.createdAt?.toMillis() | date:'short' }}</small> -->\n      <!-- <ion-label>\n        <ion-label position=\"fixed\">\n          <b> <small>{{ message.user }} </small></b></ion-label\n        >\n        <ion-label> <ion-text> {{ message.msg}} </ion-text></ion-label>\n        <ion-label>\n          <p><img [src]=\"message.file\" *ngIf=\"message.file\" /></p>\n        </ion-label>\n        <ion-label>\n          <ion-note class=\"time ion-text-right\">\n            <p>\n              <small>{{ message.createdAt?.toMillis() | date:'short' }}</small>\n            </p>\n          </ion-note>\n        </ion-label>\n      </ion-label> -->\n    </ion-chip>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button size=\"small\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-fab-button (click)=\"sendFileCamera()\">\n        <ion-icon name=\"camera\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button (click)=\"sendFileGallery()\">\n        <ion-icon name=\"image\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-textarea\n            class=\"message-input\"\n            rows=\"1\"\n            [(ngModel)]=\"newMsg\"\n          ></ion-textarea>\n        </ion-col>\n        <ion-col size=\"2\">\n          <!-- style=\"padding-bottom: 20px;\" -->\n          <ion-button\n            fill=\"clear\"\n            color=\"primary\"\n            [disabled]=\"newMsg === ''\"\n            (click)=\"sendMessage()\"\n          >\n            <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n  <!-- <ion-toolbar color=\"light\">\n    <ion-item>\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-textarea class=\"message-input\" #input rows=\"1\" maxLength=\"500\" (keyup)=\"resize()\" \n          [(ngModel)]=\"newMsg\"></ion-textarea>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-button fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\" (click)=\"sendMessage()\">\n            <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-toolbar> -->\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/Pages/chat/chat-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/chat/chat-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ChatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageRoutingModule", function() { return ChatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.page */ "./src/app/Pages/chat/chat.page.ts");




var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_3__["ChatPage"]
    }
];
var ChatPageRoutingModule = /** @class */ (function () {
    function ChatPageRoutingModule() {
    }
    ChatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChatPageRoutingModule);
    return ChatPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/Pages/chat/chat.module.ts":
/*!*******************************************!*\
  !*** ./src/app/Pages/chat/chat.module.ts ***!
  \*******************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/Pages/chat/chat-routing.module.ts");
/* harmony import */ var _directives_text_avatar_directive_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/text-avatar.directive.module */ "./src/app/directives/text-avatar.directive.module.ts");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat.page */ "./src/app/Pages/chat/chat.page.ts");








var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _directives_text_avatar_directive_module__WEBPACK_IMPORTED_MODULE_6__["TextAvatarModule"],
                _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"],
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_7__["ChatPage"]],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/chat/chat.page.scss":
/*!*******************************************!*\
  !*** ./src/app/Pages/chat/chat.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message {\n  padding: 10px !important;\n  border-radius: 10px !important;\n  margin-bottom: 4px !important;\n}\n.message img {\n  width: 100%;\n}\n.my-message {\n  background: darkslategray;\n  color: black;\n  font-size: small;\n}\n.other-message {\n  background: #3d3b3b;\n  color: black;\n  font-size: small;\n}\n.time {\n  color: var(--ion-color-medium);\n  float: right;\n  font-size: x-small;\n  font-style: italic;\n}\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-secondary);\n  border-radius: 10px;\n  background: white;\n  color: black;\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWphc3JhbWFuaS9PdGhlci13ZWJkZXYvaW9uaWMvVGFzay1UcmFja2VyLURldjIwMjAwODMwL3NyYy9hcHAvUGFnZXMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0FDQ0o7QURFQTtFQUNFLHlCQUFBO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQTtFQUtFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSkY7QURPQTtFQUVFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0UsV0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLm15LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVncmF5O1xuICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjE2LCAyNTIsIDI1Myk7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIC8vIGNvbG9yOiAjZmZmO1xufVxuLm90aGVyLW1lc3NhZ2Uge1xuICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLy8gY29sb3I6ICNmZmY7XG4gIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIC8vIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDUsIDIxNiwgMC45ODYpO1xuICBiYWNrZ3JvdW5kOiByZ2IoNjEsIDU5LCA1OSk7XG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi50aW1lIHtcbiAgLy8gY29sb3I6ICNkZmRmZGY7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgcmVzaXplOiBub25lO1xufVxuIiwiLm1lc3NhZ2Uge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG59XG4ubWVzc2FnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm15LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVncmF5O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbi5vdGhlci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogIzNkM2IzYjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4udGltZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHgtc21hbGw7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIHJlc2l6ZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Pages/chat/chat.page.ts":
/*!*****************************************!*\
  !*** ./src/app/Pages/chat/chat.page.ts ***!
  \*****************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_Services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/chat.service */ "./src/app/Services/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ChatPage = /** @class */ (function () {
    function ChatPage(route, chatService, router, camera) {
        this.route = route;
        this.chatService = chatService;
        this.router = router;
        this.camera = camera;
        this.newMsg = '';
        this.chatTitle = '';
        this.currentFirebaseUserId = this.chatService.currentUserIdFromFirebaseSetFromHomePage;
        this.currentUserEmail = this.chatService.currentUser.email;
        // currentUserId = this.chatService.currentUserIdFromFirebaseSetFromHomePage;
        // currentUserId = JSON.parse(localStorage.getItem("clientIdFirebase"));
        // currentUserId = this.chatService.currentUserIdFromFireabase;
        this.chat = null;
    }
    ChatPage.prototype.ngOnInit = function () {
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
            // //scroll to bottom on init
            // this.scrollToBottomOnInit();
            _this.route.params.subscribe(function (data) {
                // // path: 'chat/:groupId/:CurrentUserIdFromFirebase',
                // this.route.params.subscribe(data => {
                //   // console.log("data");
                //   // console.log("data['groupId'] ="+data['groupId']);
                //   // console.log("data['groupId'] ="+data['CurrentUserIdFromFirebase']);
                // console.log(data);
                console.log("group id received =" + data.id);
                _this.chatService.getOneGroup(data.id).subscribe(function (res) {
                    // console.log(res);
                    // console.log("this.currentUserId");
                    // console.log(this.currentUserId);
                    //setting title for this chat page
                    if (res['type'] == 'OneOnOne') {
                        // console.log(res['users']);
                        res['users'].forEach(function (element) {
                            console.log(element);
                            console.log(element['id']);
                            if (element['id'] != _this.currentFirebaseUserId) {
                                // console.log("this is the other user's nickname");
                                // console.log(element['nickname']);
                                _this.chatTitle = element['userName'];
                            }
                        });
                        // this.chatTitle = this.getMsgFromName(this.currentUserId);
                        // console.log(this.chatTitle);
                    }
                    if (res['type'] == 'group') {
                        _this.chatTitle = res['title'];
                        _this.leaveGroupFlag = true;
                    }
                    _this.chat = res;
                    // console.log('my chat: ', this.chat);
                    // console.log("users: ");
                    // console.log(this.chat.users);
                    _this.messages = _this.chatService.getChatMessages(_this.chat.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (messages) {
                        var e_1, _a;
                        try {
                            for (var messages_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(messages), messages_1_1 = messages_1.next(); !messages_1_1.done; messages_1_1 = messages_1.next()) {
                                var msg = messages_1_1.value;
                                // console.log("msg");
                                // console.log(msg);
                                msg['user'] = _this.getMsgFromName(msg['from']);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (messages_1_1 && !messages_1_1.done && (_a = messages_1.return)) _a.call(messages_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        // console.log('messages: ', messages);
                        //scroll to bottom on init
                        _this.scrollToBottomOnInit();
                        return messages;
                    }));
                });
            });
        }, 2000);
    };
    //function for scroll to bottom
    ChatPage.prototype.scrollToBottomOnInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom(400);
            }
        }, 500);
    };
    ChatPage.prototype.getMsgFromName = function (userId) {
        var e_2, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.chat.users), _c = _b.next(); !_c.done; _c = _b.next()) {
                var usr = _c.value;
                if (usr.id == userId) {
                    return usr.userName;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return 'Deleted';
    };
    ChatPage.prototype.sendMessage = function () {
        var _this = this;
        this.chatService.addChatMessage(this.newMsg, this.chat.id).then(function () {
            _this.newMsg = '';
            // this.content.scrollToBottom();
            //for autoscrolling to bottom...
            setTimeout(function () {
                _this.content.scrollToBottom(200);
            });
        });
    };
    // resize() {
    //   this.msgInput.nativeElement.style.height = this.msgInput.nativeElement.scrollHeight + 'px';
    // }
    ChatPage.prototype.sendFileCamera = function () {
        var _this = this;
        var options = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (data) {
            var obj = _this.chatService.addFileMessage(data, _this.chat.id);
            var task = obj.task;
            task.then(function (res) {
                obj.ref.getDownloadURL().subscribe(function (url) {
                    _this.chatService.saveFileMessage(url, _this.chat.id);
                });
            });
            task.percentageChanges().subscribe(function (change) {
                // console.log('change: ', change);
            });
        });
    };
    ChatPage.prototype.sendFileGallery = function () {
        var _this = this;
        var options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: 70,
            targetWidth: 1000,
            targetHeight: 1000,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
            // mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (data) {
            var obj = _this.chatService.addFileMessage(data, _this.chat.id);
            var task = obj.task;
            task.then(function (res) {
                obj.ref.getDownloadURL().subscribe(function (url) {
                    _this.chatService.saveFileMessage(url, _this.chat.id);
                });
            });
            task.percentageChanges().subscribe(function (change) {
                // console.log('change: ', change);
            });
        });
    };
    ChatPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_Services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"])
    ], ChatPage.prototype, "content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('input', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] })
    ], ChatPage.prototype, "msgInput", void 0);
    ChatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-chat',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/chat/chat.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./chat.page.scss */ "./src/app/Pages/chat/chat.page.scss")).default]
        })
    ], ChatPage);
    return ChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-chat-chat-module.js.map