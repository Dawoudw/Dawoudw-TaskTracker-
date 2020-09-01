(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/button-active-0d5784f9.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/button-active-0d5784f9.js ***!
  \*************************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-44bf8136.js */ "./node_modules/@ionic/core/dist/esm-es5/index-44bf8136.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm-es5/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm-es5/haptic-7b8ba70a.js");



var createButtonActiveGesture = function (el, isButton) {
    var currentTouchedButton;
    var initialTouchedButton;
    var activateButtonAtPoint = function (x, y, hapticFeedbackFn) {
        if (typeof document === 'undefined') {
            return;
        }
        var target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    var setActiveButton = function (button, hapticFeedbackFn) {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        var buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () { return buttonToModify.classList.add('ion-activated'); });
        hapticFeedbackFn();
    };
    var clearActiveButton = function (dispatchClick) {
        if (dispatchClick === void 0) { dispatchClick = false; }
        if (!currentTouchedButton) {
            return;
        }
        var buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function () { return buttonToModify.classList.remove('ion-activated'); });
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el: el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: function (ev) { return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]); },
        onMove: function (ev) { return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]); },
        onEnd: function () {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/framework-delegate-d1eb6504.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/framework-delegate-d1eb6504.js ***!
  \******************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var attachComponent = function (delegate, container, component, cssClasses, componentProps) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var el;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (delegate) {
                    return [2 /*return*/, delegate.attachViewToDom(container, component, componentProps, cssClasses)];
                }
                if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
                    throw new Error('framework delegate is missing');
                }
                el = (typeof component === 'string')
                    ? container.ownerDocument && container.ownerDocument.createElement(component)
                    : component;
                if (cssClasses) {
                    cssClasses.forEach(function (c) { return el.classList.add(c); });
                }
                if (componentProps) {
                    Object.assign(el, componentProps);
                }
                container.appendChild(el);
                if (!el.componentOnReady) return [3 /*break*/, 2];
                return [4 /*yield*/, el.componentOnReady()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/, el];
        }
    });
}); };
var detachComponent = function (delegate, element) {
    if (element) {
        if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-7b8ba70a.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-7b8ba70a.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
var HapticEngine = {
    getEngine: function () {
        var win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available: function () {
        return !!this.getEngine();
    },
    isCordova: function () {
        return !!window.TapticEngine;
    },
    isCapacitor: function () {
        var win = window;
        return !!win.Capacitor;
    },
    impact: function (options) {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style: style });
    },
    notification: function (options) {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style: style });
    },
    selection: function () {
        this.impact({ style: 'light' });
    },
    selectionStart: function () {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged: function () {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd: function () {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
var hapticImpact = function (options) {
    HapticEngine.impact(options);
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/spinner-configs-c78e170e.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/spinner-configs-c78e170e.js ***!
  \***************************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
var spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function (dur, index, total) {
            var animationDelay = (dur * index / total) - dur + "ms";
            var angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': 9 * Math.sin(angle) + "px",
                    'left': 9 * Math.cos(angle) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: function (dur, index, total) {
            var step = index / total;
            var animationDelay = (dur * step) - dur + "ms";
            var angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': 9 * Math.sin(angle) + "px",
                    'left': 9 * Math.cos(angle) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function () {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: function () {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: function (_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': 9 - (9 * index) + "px",
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
            var animationDelay = (dur * index / total) - dur + "ms";
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function (dur, index, total) {
            var transform = "rotate(" + (30 * index + (index < 6 ? 180 : -180)) + "deg)";
            var animationDelay = (dur * index / total) - dur + "ms";
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
var SPINNERS = spinners;



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-3f0b0c04.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-3f0b0c04.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction, animation) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction, animation)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
        this.currentUserIdFromFirebaseSetFromHomePage = "";
        this.currentUserIdFromFireabase = JSON.parse(localStorage.getItem("clientIdFirebase"));
    }
    ChatService.prototype.fromChatService = function () {
        console.log("fromChatService");
        console.log(this.usersList);
        this.usrServ.usersList.forEach(function (user) {
            console.log("user");
            console.log(user["email"]);
        });
    };
    ChatService.prototype.getAllUsers = function () {
        return this.db.collection("usersTaskTracker").snapshotChanges();
    };
    ChatService.prototype.getCurrentUser = function () {
        console.log("currentUser =" + this.currentUser);
        console.log("current user's email =" + this.currentUser.email);
        console.log("firebase id for this user");
    };
    ChatService.prototype.findUser = function (email) {
        var user = this.db
            .collection("usersTaskTracker", function (ref) { return ref.where("email", "==", email); })
            .valueChanges({ idField: "id" })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
        return user;
    };
    ChatService.prototype.getAllGroups2 = function () {
        try {
            return this.db
                .collection("usersTaskTracker/" + this.currentUserIdFromFirebaseSetFromHomePage + "/groups")
                .snapshotChanges();
        }
        catch (err) {
            console.log(err);
        }
    };
    ChatService.prototype.createGroup = function (title, users) {
        var _this = this;
        try {
            var current = {
                email: this.currentUser.email,
                id: this.currentUserIdFromFirebaseSetFromHomePage,
                userName: this.currentUser.userName,
            };
            // console.log("additional user(s) is/are: ");
            // console.log(users);
            var allUsers_1 = [current];
            allUsers_1.push.apply(allUsers_1, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(users));
            // console.log("allUsers for group chat");
            // console.log(allUsers);
            return this.db
                .collection("groupsTaskTracker")
                .add({
                title: title,
                type: "group",
                users: allUsers_1,
            })
                .then(function (res) {
                var e_1, _a;
                _this.groupId = res.id;
                var promises = [];
                try {
                    for (var allUsers_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(allUsers_1), allUsers_2_1 = allUsers_2.next(); !allUsers_2_1.done; allUsers_2_1 = allUsers_2.next()) {
                        var usr = allUsers_2_1.value;
                        // console.log("usr =");
                        // console.log(usr);
                        // console.log("usr.id ="+usr.id);
                        // console.log("res.id ="+res.id);
                        var oneAdd = _this.db
                            .collection("usersTaskTracker/" + usr.id + "/groups")
                            .add({
                            id: res.id,
                            title: title,
                            users: allUsers_1.length,
                            type: "group",
                        });
                        promises.push(oneAdd);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (allUsers_2_1 && !allUsers_2_1.done && (_a = allUsers_2.return)) _a.call(allUsers_2);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return Promise.all(promises);
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    ChatService.prototype.findGroupById = function (id) {
        try {
            var group = this.db
                .doc("groupsTaskTracker/" + id)
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
            return group;
        }
        catch (err) {
            console.log(err);
        }
    };
    ChatService.prototype.getOneGroup = function (id, user_group_key) {
        var _this = this;
        if (user_group_key === void 0) { user_group_key = null; }
        try {
            // console.log("firebase created current user's id");
            // console.log(this.auth.currentUserId);
            return this.db
                .doc("groupsTaskTracker/" + id)
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
                var count = 0;
                var data = changes.payload.data();
                _this.db
                    .collection("groupsTaskTracker/" + id + "/messages")
                    .snapshotChanges()
                    .forEach(function (result) {
                    result.forEach(function (r) {
                        // console.log("r ="+r);
                        //Get firebase created id of each messsage: r.payload.doc.id
                        var mId = r.payload.doc.id;
                        var uId = r.payload.doc.data()["from"];
                        // setTimeout(() => {
                        //   // console.log("mId ="+mId);
                        // }, 1000);
                        if (r.payload.doc.data()["readFlag"] == false &&
                            uId != _this.currentUserIdFromFirebaseSetFromHomePage) {
                            count = count + 1;
                        }
                    });
                });
                var group_id = changes.payload.id;
                // console.log("count");
                // console.log(count);
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ user_group_key: user_group_key, id: group_id }, data);
            }));
        }
        catch (err) {
            console.log(err);
        }
    };
    ChatService.prototype.getChatMessages = function (groupId) {
        try {
            var count = 0;
            return this.db
                .collection("groupsTaskTracker/" + groupId + "/messages", function (ref) {
                return ref.orderBy("createdAt");
            })
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) {
                return actions.map(function (a) {
                    var data = a.payload.doc.data();
                    var id = a.payload.doc.id;
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ id: id }, data);
                });
            }));
        }
        catch (err) {
            console.log(err);
        }
    };
    ChatService.prototype.addChatMessage = function (msg, chatId) {
        try {
            return this.db
                .collection("groupsTaskTracker/" + chatId + "/messages")
                .add({
                msg: msg,
                from: this.currentUserIdFromFirebaseSetFromHomePage,
                readFlag: false,
                unreadCount: 0,
                createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.serverTimestamp(),
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    ChatService.prototype.addFileMessage = function (file, chatId) {
        try {
            var newName = new Date().getTime() + "-" + this.currentUserIdFromFirebaseSetFromHomePage + ".png";
            var storageRef = this.storage.ref("/files/" + chatId + "/" + newName);
            return {
                task: storageRef.putString(file, "base64", {
                    contentType: "image/png",
                }),
                ref: storageRef,
            };
        }
        catch (err) {
            console.log(err);
        }
    };
    ChatService.prototype.saveFileMessage = function (filepath, chatId) {
        try {
            return this.db
                .collection("groupsTaskTracker/" + chatId + "/messages")
                .add({
                file: filepath,
                from: this.currentUserIdFromFirebaseSetFromHomePage,
                createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.serverTimestamp(),
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    ChatService.ctorParameters = function () { return [
        { type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
        { type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }
    ]; };
    ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        })
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/directives/color-generator.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/color-generator.ts ***!
  \***********************************************/
/*! exports provided: ColorGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorGenerator", function() { return ColorGenerator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorGenerator = /** @class */ (function () {
    function ColorGenerator() {
        this.COLORS = [
            "#f49daf",
            "#ff6565",
            "#9e3a3a",
            "#4854e0",
            "#777a9c",
            "#d397de",
            "#ad8df7",
            "#81b2f7",
            "#54e3ff",
            "#eed57b",
            "#bd2222",
            "#cae6ba",
            "#4da5ee",
            "#85e278",
            "#fca174",
            "#be5d1d",
            "#fff475",
            "#286886",
            "#5eebb7",
            "#9f3eac",
        ];
        console.log("created");
    }
    ColorGenerator.prototype.getColor = function (str) {
        return this.COLORS[Math.abs(this.toNumber(str)) % this.COLORS.length];
    };
    ColorGenerator.prototype.toNumber = function (str) {
        var h = 3;
        for (var i = 0; i < str.length; i++) {
            h = 31 * h + str.charCodeAt(i);
            h |= 0; // Convert to 32bit integer
        }
        return h;
    };
    ColorGenerator = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ColorGenerator);
    return ColorGenerator;
}());



/***/ }),

/***/ "./src/app/directives/text-avatar.directive.module.ts":
/*!************************************************************!*\
  !*** ./src/app/directives/text-avatar.directive.module.ts ***!
  \************************************************************/
/*! exports provided: TextAvatarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAvatarModule", function() { return TextAvatarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _text_avatar_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text-avatar.directive */ "./src/app/directives/text-avatar.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _color_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color-generator */ "./src/app/directives/color-generator.ts");





var TextAvatarModule = /** @class */ (function () {
    function TextAvatarModule() {
    }
    TextAvatarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
            declarations: [_text_avatar_directive__WEBPACK_IMPORTED_MODULE_2__["TextAvatarDirective"]],
            exports: [_text_avatar_directive__WEBPACK_IMPORTED_MODULE_2__["TextAvatarDirective"]],
            providers: [_color_generator__WEBPACK_IMPORTED_MODULE_4__["ColorGenerator"]]
        })
    ], TextAvatarModule);
    return TextAvatarModule;
}());



/***/ }),

/***/ "./src/app/directives/text-avatar.directive.scss":
/*!*******************************************************!*\
  !*** ./src/app/directives/text-avatar.directive.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".u-text-avatar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  max-width: 48px;\n  max-height: 48px;\n  border-radius: 500px;\n  margin-left: 3px;\n  --ion-1: #f49daf;\n  --ion-2: #ff6565;\n  --ion-3: #9e3a3a;\n  --ion-4: #4854e0;\n  --ion-5: #777a9c;\n  --ion-6: #d397de;\n  --ion-7: #ad8df7;\n  --ion-8: #81b2f7;\n  --ion-9: #54e3ff;\n  --ion-10: #eed57b;\n  --ion-11: #ff2b2b;\n  --ion-12: #cae6ba;\n  --ion-13: #4da5ee;\n  --ion-14: #85e278;\n  --ion-15: #fca174;\n  --ion-16: #be5d1d;\n  --ion-17: #fff475;\n  --ion-18: #47778d;\n  --ion-19: #5eebb7;\n  --ion-20: #9f3eac;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWphc3JhbWFuaS9PdGhlci13ZWJkZXYvaW9uaWMvVGFzay1UcmFja2VyLURldjIwMjAwODMwL3NyYy9hcHAvZGlyZWN0aXZlcy90ZXh0LWF2YXRhci5kaXJlY3RpdmUuc2NzcyIsInNyYy9hcHAvZGlyZWN0aXZlcy90ZXh0LWF2YXRhci5kaXJlY3RpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZGlyZWN0aXZlcy90ZXh0LWF2YXRhci5kaXJlY3RpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51LXRleHQtYXZhdGFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0OHB4O1xuICBtYXgtaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MDBweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgLS1pb24tMTogI2Y0OWRhZjtcbiAgLS1pb24tMjogI2ZmNjU2NTtcbiAgLS1pb24tMzogIzllM2EzYTtcbiAgLS1pb24tNDogIzQ4NTRlMDtcbiAgLS1pb24tNTogIzc3N2E5YztcbiAgLS1pb24tNjogI2QzOTdkZTtcbiAgLS1pb24tNzogI2FkOGRmNztcbiAgLS1pb24tODogIzgxYjJmNztcbiAgLS1pb24tOTogIzU0ZTNmZjtcbiAgLS1pb24tMTA6ICNlZWQ1N2I7XG4gIC0taW9uLTExOiAjZmYyYjJiO1xuICAtLWlvbi0xMjogI2NhZTZiYTtcbiAgLS1pb24tMTM6ICM0ZGE1ZWU7XG4gIC0taW9uLTE0OiAjODVlMjc4O1xuICAtLWlvbi0xNTogI2ZjYTE3NDtcbiAgLS1pb24tMTY6ICNiZTVkMWQ7XG4gIC0taW9uLTE3OiAjZmZmNDc1O1xuICAtLWlvbi0xODogIzQ3Nzc4ZDtcbiAgLS1pb24tMTk6ICM1ZWViYjc7XG4gIC0taW9uLTIwOiAjOWYzZWFjO1xufVxuIiwiLnUtdGV4dC1hdmF0YXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0OHB4O1xuICBtYXgtaGVpZ2h0OiA0OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MDBweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgLS1pb24tMTogI2Y0OWRhZjtcbiAgLS1pb24tMjogI2ZmNjU2NTtcbiAgLS1pb24tMzogIzllM2EzYTtcbiAgLS1pb24tNDogIzQ4NTRlMDtcbiAgLS1pb24tNTogIzc3N2E5YztcbiAgLS1pb24tNjogI2QzOTdkZTtcbiAgLS1pb24tNzogI2FkOGRmNztcbiAgLS1pb24tODogIzgxYjJmNztcbiAgLS1pb24tOTogIzU0ZTNmZjtcbiAgLS1pb24tMTA6ICNlZWQ1N2I7XG4gIC0taW9uLTExOiAjZmYyYjJiO1xuICAtLWlvbi0xMjogI2NhZTZiYTtcbiAgLS1pb24tMTM6ICM0ZGE1ZWU7XG4gIC0taW9uLTE0OiAjODVlMjc4O1xuICAtLWlvbi0xNTogI2ZjYTE3NDtcbiAgLS1pb24tMTY6ICNiZTVkMWQ7XG4gIC0taW9uLTE3OiAjZmZmNDc1O1xuICAtLWlvbi0xODogIzQ3Nzc4ZDtcbiAgLS1pb24tMTk6ICM1ZWViYjc7XG4gIC0taW9uLTIwOiAjOWYzZWFjO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/directives/text-avatar.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/text-avatar.directive.ts ***!
  \*****************************************************/
/*! exports provided: TextAvatarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAvatarDirective", function() { return TextAvatarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-generator */ "./src/app/directives/color-generator.ts");



var TextAvatarDirective = /** @class */ (function () {
    function TextAvatarDirective(colorGenerator) {
        this.colorGenerator = colorGenerator;
        this.firstLetter = "";
        this.styles = {
            "background-color": "#fff",
            color: "#000",
        };
    }
    TextAvatarDirective.prototype.ngOnChanges = function (changes) {
        var text = changes["text"] ? changes["text"].currentValue : null;
        var color = changes["color"] ? changes["color"].currentValue : null;
        var textColor = changes["textColor"]
            ? changes["textColor"].currentValue
            : this.styles.color;
        this.firstLetter = this.extractFirstCharacter(text);
        this.styles = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.styles), { "background-color": this.backgroundColorHexString(color, text), color: textColor });
    };
    TextAvatarDirective.prototype.extractFirstCharacter = function (text) {
        // if (text) {
        //   return text.charAt(0) || "";
        // } else return " ";
        return this.getUppercase(text);
    };
    TextAvatarDirective.prototype.getUppercase = function (str) {
        if (str) {
            var array1 = str.split(" ");
            var newarray1 = [];
            for (var x = 0; x < array1.length; x++) {
                if (x < 2)
                    newarray1.push(array1[x].charAt(0).toUpperCase());
                else
                    break;
            }
            return newarray1.join("");
        }
        else
            return "??";
    };
    TextAvatarDirective.prototype.backgroundColorHexString = function (color, text) {
        return color || this.colorGenerator.getColor(text);
    };
    TextAvatarDirective.ctorParameters = function () { return [
        { type: _color_generator__WEBPACK_IMPORTED_MODULE_2__["ColorGenerator"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TextAvatarDirective.prototype, "text", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TextAvatarDirective.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TextAvatarDirective.prototype, "textColor", void 0);
    TextAvatarDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "text-avatar",
            template: "\n    <div class=\"u-text-avatar\" [ngStyle]=\"styles\">{{ firstLetter }}</div>\n  ",
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./text-avatar.directive.scss */ "./src/app/directives/text-avatar.directive.scss")).default]
        })
    ], TextAvatarDirective);
    return TextAvatarDirective;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map