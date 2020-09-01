(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-chat-chat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/chat/chat.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/chat/chat.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/chats\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>{{ chat?.title }}</ion-title> -->\n    <ion-title>{{ chatTitle }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button  fill=\"clear\" (click)=\"leave()\">\n        Leave Group\n      </ion-button> -->\n      <!-- <ion-button *ngIf=\"leaveGroupFlag\" fill=\"clear\" (click)=\"leave()\">\n        Leave\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content #content class=\"ion-padding\">\n\n  <ion-grid>\n      <ion-row *ngFor=\"let message of messages | async\">\n\n        <ion-col size=\"9\" size-md=\"6\" *ngIf=\"message.from !== currentUserId\" class=\"message other-message\">\n          <small>{{ message.user }}</small><br>\n          <span>{{ message.msg }}\n            <img [src]=\"message.file\" *ngIf=\"message.file\">\n          </span>\n  \n          <div class=\"time ion-text-right\"><br>{{ message.createdAt?.toMillis() | date:'short' }}</div>\n        </ion-col>\n  \n        <ion-col offset=\"3\" offset-md=\"6\" size=\"9\" size-md=\"6\" *ngIf=\"message.from === currentUserId\" class=\"message my-message\">\n        <small>{{ message.user }}</small><br>\n          <span>{{ message.msg }}\n            <img [src]=\"message.file\" *ngIf=\"message.file\">\n          </span>\n          <div class=\"time ion-text-right\"><br>{{ message.createdAt?.toMillis() | date:'short' }}</div>\n        </ion-col>\n  \n      </ion-row>\n    </ion-grid>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button>\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-list side=\"top\">\n          <ion-fab-button  (click)=\"sendFileCamera()\"> \n            <ion-icon name=\"camera\"></ion-icon>\n          </ion-fab-button>\n          <ion-fab-button  (click)=\"sendFileGallery()\">\n            <ion-icon name=\"image\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab-list>\n    </ion-fab>\n      \n    \n\n\n</ion-content>\n\n<ion-footer>\n<ion-toolbar>\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"10\">\n      <ion-textarea class=\"message-input\" rows=\"1\"\n          [(ngModel)]=\"newMsg\"></ion-textarea>\n    </ion-col>\n    <ion-col size=\"2\">\n      <!-- style=\"padding-bottom: 20px;\" -->\n      <ion-button fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\" (click)=\"sendMessage()\">\n        <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-toolbar>\n  <!-- <ion-toolbar color=\"light\">\n    <ion-item>\n      <ion-row>\n        <ion-col size=\"10\">\n          <ion-textarea class=\"message-input\" #input rows=\"1\" maxLength=\"500\" (keyup)=\"resize()\" \n          [(ngModel)]=\"newMsg\"></ion-textarea>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-button fill=\"clear\" color=\"primary\" [disabled]=\"newMsg === ''\" (click)=\"sendMessage()\">\n            <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-toolbar> -->\n</ion-footer>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-routing.module */ "./src/app/Pages/chat/chat-routing.module.ts");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/Pages/chat/chat.page.ts");







var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _chat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatPageRoutingModule"]
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".message {\n  padding: 10px !important;\n  border-radius: 10px !important;\n  margin-bottom: 4px !important;\n}\n.message img {\n  width: 100%;\n}\n.my-message {\n  background: darkslategray;\n  color: white;\n}\n.other-message {\n  background: #3d3b3b;\n  color: white;\n}\n.time {\n  color: var(--ion-color-medium);\n  float: right;\n  font-size: small;\n}\n.message-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #272626;\n  color: white;\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWphc3JhbWFuaS9PdGhlci13ZWJkZXYvaW9uaWMvVGFzay1UcmFja2VyLURldjIwMjAwODI2L3NyYy9hcHAvUGFnZXMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvUGFnZXMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtBQ0NKO0FEQ0k7RUFDRSxXQUFBO0FDQ047QURFRTtFQUVFLHlCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0U7RUFJRSxtQkFBQTtFQUNBLFlBQUE7QUNISjtBRE1BO0VBRUUsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRE9BO0VBQ0ksV0FBQTtFQUNBLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9jaGF0L2NoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Uge1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4ICFpbXBvcnRhbnQ7XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIC5teS1tZXNzYWdlIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICAgIGJhY2tncm91bmQ6IGRhcmtzbGF0ZWdyYXk7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgLy8gY29sb3I6ICNmZmY7XG4gIH1cbiAgLm90aGVyLW1lc3NhZ2Uge1xuICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIC8vIGNvbG9yOiAjZmZmO1xuICAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgYmFja2dyb3VuZDogcmdiKDYxLCA1OSwgNTkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4udGltZSB7XG4gIC8vIGNvbG9yOiAjZGZkZmRmO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDM5LCAzOCwgMzgpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbiIsIi5tZXNzYWdlIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xufVxuLm1lc3NhZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5teS1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogZGFya3NsYXRlZ3JheTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ub3RoZXItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICMzZDNiM2I7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRpbWUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuLm1lc3NhZ2UtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMyNzI2MjY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcmVzaXplOiBub25lO1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ChatPage = /** @class */ (function () {
    function ChatPage(route, chatService, router, camera) {
        this.route = route;
        this.chatService = chatService;
        this.router = router;
        this.camera = camera;
        this.newMsg = '';
        this.chatTitle = '';
        this.currentUserId = this.chatService.currentUserIdFromFirebaseSetFromHomePage;
        // currentUserId = JSON.parse(localStorage.getItem("clientIdFirebase"));
        // currentUserId = this.chatService.currentUserIdFromFireabase;
        this.chat = null;
    }
    ChatPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log("this.currentUserId on chat page =" + this.currentUserId);
        // //scroll to bottom on init
        // this.scrollToBottomOnInit();
        this.route.params.subscribe(function (data) {
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
                        // console.log(element);
                        // console.log(element['id']);
                        if (element['id'] != _this.currentUserId) {
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