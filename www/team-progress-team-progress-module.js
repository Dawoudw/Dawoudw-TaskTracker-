(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-progress-team-progress-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/today-tasks/today-tasks.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/today-tasks/today-tasks.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <div\r\n    class=\"ion-no-margin ; no-padding\"\r\n    style=\"\r\n      height: 0px;\r\n      text-align: center !important;\r\n      position: relative;\r\n      z-index: 1;\r\n    \"\r\n  >\r\n    <ion-refresher\r\n      style=\"position: relative; z-index: 2; top: 0px\"\r\n      slot=\"fixed\"\r\n      (ionRefresh)=\"doRefresh($event)\"\r\n    >\r\n      <ion-refresher-content refreshingSpinner=\"crescent\">\r\n      </ion-refresher-content>\r\n    </ion-refresher>\r\n  </div>\r\n\r\n  <!-- <ion-grid *ngIf=\"userProgress.length > 0\">\r\n    <ion-row class=\"ion-no-margin ; no-padding\">\r\n      <ion-col size-med=\"6\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\r\n        <ion-list\r\n          *ngFor=\"let item of userProgress; let i = index\"\r\n          [(ngModel)]=\"userProgress\"\r\n          ngDefaultControl\r\n          name=\"lstTaskProgress\"\r\n        >\r\n          <ion-row style=\"justify-items: left;\">\r\n            <ion-col>\r\n              <ion-item\r\n                [routerLink]=\"['/', 'tasktracker', 'taskview', item.id]\"\r\n                detail=\"true\"\r\n                md=\"ellipsis-vertical\"\r\n                ios=\"ellipsis-vertical \"\r\n              >\r\n                <ion-avatar slot=\"start\" name=\"avatar\">\r\n                  <img src=\"../assets/images/avatar.svg\" />\r\n                </ion-avatar>\r\n                <ion-label class=\"ion-text-start ion-text-capitalize\">\r\n                  <ion-label color=\"primary\" mode=\"ios\" position=\"stacked\">\r\n                    <b>{{ item.userName }}</b></ion-label\r\n                  >\r\n\r\n                  <ion-label mode=\"ios\" position=\"stacked\">\r\n                \r\n                    {{ i + 1 }}.{{ item.task }}\r\n\r\n                    <ion-label mode=\"ios\" style=\"float: right;\">\r\n                      <ion-badge\r\n                        style=\"float: right;\"\r\n                        [color]=\"\r\n                          item.progress > 99\r\n                            ? 'success'\r\n                            : item.progress < 50\r\n                            ? 'warning'\r\n                            : 'primary'\r\n                        \"\r\n                      >\r\n                        {{ item.progress }}%\r\n                      </ion-badge>\r\n                    </ion-label>\r\n                  </ion-label>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"auto\">\r\n\r\n              <ion-icon  \r\n              [routerLink]=\"['/tasktracker','chat',user? user.email:'',user? user.userId:'']\"\r\n                color=\"primary\"\r\n                name=\"chatbox-ellipses-outline\"\r\n                style=\"\r\n                  flex: left;\r\n                  margin-top: 10px;\r\n                  margin-left: 5px;\r\n                  margin-right: 5px;\r\n                  width: 20px;\r\n                  height: 20px;\r\n                \"\r\n                class=\"ion-text-start\"\r\n              ></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n\r\n  <ion-grid *ngIf=\"userProgress.length > 0\">\r\n    <ion-row class=\"ion-no-margin ; no-padding\">\r\n      <ion-col size-med=\"6\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\r\n        <ion-list\r\n          *ngFor=\"let item of userProgress; let i = index\"\r\n          [(ngModel)]=\"userProgress\"\r\n          ngDefaultControl\r\n          name=\"lstTaskProgress\"\r\n        >\r\n          <ion-row style=\"justify-items: left\">\r\n            <ion-col>\r\n              <ion-item\r\n                [routerLink]=\"['/', 'tasktracker', 'taskview', item.id]\"\r\n                detail=\"true\"\r\n              >\r\n                <ion-avatar slot=\"start\" name=\"avatar\">\r\n                  <text-avatar  text ={{item.userName}}></text-avatar>\r\n                  <!-- <img src=\"../assets/images/avatar.svg\" /> -->\r\n                </ion-avatar>\r\n                <ion-label class=\"ion-text-start ion-text-capitalize\">\r\n                  <ion-label color=\"primary\" mode=\"ios\" position=\"stacked\">\r\n                    <b>{{ item.userName }} </b></ion-label\r\n                  >\r\n\r\n                  <ion-label size=\"small\" mode=\"ios\" position=\"stacked\" class=\"ion-text-wrap\">\r\n                    <b style=\"font-size: smaller\"> {{ item.task }} </b>\r\n                  </ion-label>\r\n                  <ion-label mode=\"ios\" position=\"stacked\">\r\n                    <ion-badge\r\n                      style=\"margin: 0px\"\r\n                      [color]=\"\r\n                        item.progress > 99\r\n                          ? 'success'\r\n                          : item.progress < 50\r\n                          ? 'warning'\r\n                          : 'primary'\r\n                      \"\r\n                    >\r\n                      {{ item.progress }}%\r\n                    </ion-badge>\r\n                  </ion-label>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <!-- <ion-col size=\"auto\">\r\n              <ion-icon\r\n                [routerLink]=\"[\r\n                  '/tasktracker',\r\n                  'chat',\r\n                  user ? user.email : '',\r\n                  user ? user.userId : ''\r\n                ]\"\r\n                color=\"primary\"\r\n                name=\"chatbox-ellipses-outline\"\r\n                style=\"\r\n                  flex: left;\r\n                  margin-top: 10px;\r\n                  margin-left: 5px;\r\n                  margin-right: 5px;\r\n                  width: 20px;\r\n                  height: 20px;\r\n                \"\r\n                class=\"ion-text-start\"\r\n              ></ion-icon>\r\n            </ion-col> -->\r\n          </ion-row>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div\r\n    #divMsg\r\n    style=\"display: none\"\r\n    class=\"ion-no-padding ion-margin-top ion-margin-horizontal\"\r\n  >\r\n    <ion-chip\r\n      color=\"danger\"\r\n      class=\"ion-justify-content-center\"\r\n      style=\"width: 98%\"\r\n    >\r\n      <ion-label>There is no task(s) for anyone today .</ion-label>\r\n    </ion-chip>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/team-progress/team-progress.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/team-progress/team-progress.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-margin\">\n  <ion-toolbar>\n    <ion-segment color=\"secondary\" (ionChange)=\"0\" #checkTeam value=\"calendar\">\n      <ion-segment-button size=\"small\" value=\"calendar\" layout=\"icon-start\">\n        <ion-label position=\"float\">Today Tasks</ion-label>\n        <ion-icon name=\"calendar-outline\"></ion-icon>\n      </ion-segment-button>\n\n      <ion-segment-button size=\"small\" value=\"team\" layout=\"icon-start\">\n        <ion-label position=\"float\">Team Progress</ion-label>\n        <ion-icon name=\"people-outline\"></ion-icon>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div\n    class=\"ion-no-margin ; no-padding\"\n    style=\"\n      height: 0px;\n      text-align: center !important;\n      position: relative;\n      z-index: 1;\n    \"\n  >\n    <ion-refresher\n      #refTeamProgress\n      id=\"refTeamProgress\"\n      style=\"position: relative; z-index: 2; top: 0px\"\n      slot=\"fixed\"\n      (ionRefresh)=\"doRefresh($event)\"\n    >\n      <ion-refresher-content color=\"primary\" refreshingSpinner=\"crescent\">\n      </ion-refresher-content>\n    </ion-refresher>\n  </div>\n  <ion-grid *ngIf=' checkTeam.value==\"team\" '>\n    <ion-row class=\"ion-no-margin ; no-padding\">\n      <ion-col size-med=\"6\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\n        <!-- <div\n          style=\"\n            height: 0px;\n            text-align: center !important;\n            position: relative;\n            z-index: 1;\n          \"\n          *ngIf=\"isLoaded\"\n        >\n          <ion-spinner\n            style=\"position: relative; z-index: 2; top: 0px;\"\n            name=\"crescent\"\n          ></ion-spinner>\n        </div> -->\n\n        <ion-list\n          *ngFor=\"let item of userProgress; let i = index\"\n          [(ngModel)]=\"userProgress\"\n          ngDefaultControl\n          name=\"lstTaskProgress\"\n        >\n          <ion-row style=\"justify-items: left\">\n            <ion-col>\n              <ion-item [routerLink]=\"['./', item.userId]\" detail=\"true\">\n                <ion-avatar slot=\"start\" name=\"avatar\">\n                  <!-- <img src=\"../assets/images/avatar.svg\" /> -->\n                  <text-avatar text=\"{{item.userName}}\"></text-avatar>\n                </ion-avatar>\n                <ion-label class=\"ion-text-start ion-text-capitalize\">\n                  <ion-label color=\"primary\" mode=\"ios\" position=\"stacked\">\n                    <b>{{ item.userName }}</b></ion-label\n                  >\n\n                  <ion-label mode=\"ios\" position=\"stacked\">\n                    Total Tasks <b>({{ item.totaltasks }}) </b>\n                  </ion-label>\n                  <ion-label mode=\"ios\" position=\"stacked\">\n                    <ion-badge\n                      style=\"margin: 0px\"\n                      [color]=\"\n                        item.avgProgress > 99\n                          ? 'success'\n                          : item.avgProgress < 50\n                          ? 'warning'\n                          : 'primary'\n                      \"\n                    >\n                      {{ item.avgProgress }}%\n                    </ion-badge>\n                  </ion-label>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n\n            <!-- <ion-col size=\"auto\">\n              <ion-icon\n                [routerLink]=\"['/tasktracker','chat',user? user.email:'',user? user.userId:'']\"\n                color=\"primary\"\n                name=\"chatbox-ellipses-outline\"\n                style=\"\n                  flex: left;\n                  margin-top: 10px;\n                  margin-left: 5px;\n                  margin-right: 5px;\n                  width: 20px;\n                  height: 20px;\n                \"\n                class=\"ion-text-start\"\n              ></ion-icon>\n            </ion-col> -->\n          </ion-row>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-today-tasks *ngIf='checkTeam.value ==\"calendar\"'></app-today-tasks>\n  <ion-fab\n    *ngIf=\"auth.isLoggedIn()\"\n    (click)=\"openNewTaskModal()\"\n    vertical=\"bottom\"\n    horizontal=\"end\"\n    slot=\"fixed\"\n  >\n    <ion-fab-button size=\"small\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Components/today-tasks/today-tasks.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Components/today-tasks/today-tasks.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popover-content {\n  background: #222;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .popover-content {\n  background: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWphc3JhbWFuaS9PdGhlci13ZWJkZXYvaW9uaWMvVGFzay1UcmFja2VyLURldjIwMjAwODMwL3NyYy9hcHAvQ29tcG9uZW50cy90b2RheS10YXNrcy90b2RheS10YXNrcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy90b2RheS10YXNrcy90b2RheS10YXNrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUUsdUVBQUE7O0FBQ0E7RUFDRSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy90b2RheS10YXNrcy90b2RheS10YXNrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3BvdmVyLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gIH1cbiAgXG4gIC8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXG4gIC5teS1jdXN0b20tY2xhc3MgLnBvcG92ZXItY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogIzIyMjtcbiAgfSIsIi5wb3BvdmVyLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufVxuXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xuLm15LWN1c3RvbS1jbGFzcyAucG9wb3Zlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzIyMjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Components/today-tasks/today-tasks.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/today-tasks/today-tasks.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodayTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodayTasksComponent", function() { return TodayTasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/report.service */ "./src/app/Services/report.service.ts");
/* harmony import */ var src_app_Models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/user */ "./src/app/Models/user.ts");
/* harmony import */ var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/users.service */ "./src/app/Services/users.service.ts");
/* harmony import */ var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/authService.service */ "./src/app/Services/authService.service.ts");






var TodayTasksComponent = /** @class */ (function () {
    function TodayTasksComponent(repServ, usrServ, auth) {
        this.repServ = repServ;
        this.usrServ = usrServ;
        this.auth = auth;
        this.userProgress = new Array();
        this.tasks = new Array();
        this.users = new Array();
        this.user = new src_app_Models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.nodata = false;
        this.isLoaded = false;
        //Get All Users
        this.getUsersTodayTasks();
        this.nodata = false;
    }
    TodayTasksComponent.prototype.ngAfterViewInit = function () { };
    TodayTasksComponent.prototype.ngOnInit = function () {
        this.user = this.auth.getLoggedUser();
        // this.doRefresh();
        //  this.isLoaded = true;
        //  this.getTotalUserTasks();
        // this.userProgress = this.getUsersTodayTasks();
    };
    TodayTasksComponent.prototype.ionViewWillEnter = function () { };
    TodayTasksComponent.prototype.getUsersTodayTasks = function () {
        var _this = this;
        //  if (!this.isLoaded) {
        this.repServ.getTasksToday().then(function (data) {
            var e_1, _a;
            _this.users = _this.usrServ.usersList;
            _this.tasks = data;
            var userProgAr = new Array();
            //  console.log("ionViewWillEnter this.tasks", this.tasks);
            console.log("Task getUsersTodayTasks", _this.users);
            var _loop_1 = function (t) {
                if (t.userid) {
                    console.log("Task getUsersTodayTasks t.userid", t.userid);
                    var us = Object.create(_this.users.find(function (x) { return x.userId == t.userid; }));
                    console.log("bject.create(this.users.find(x=>x.userId==t.userid))", us);
                    var obj = {
                        id: t.id,
                        task: t.task,
                        taskdate: t.taskdate,
                        userid: t.userid,
                        userName: _this.users.find(function (u) { return u.userId == t.userid; }).userName,
                        progress: _this.parsPercentage(t.progress),
                    };
                    //  console.log("   userProgAr.push(obj);", obj);
                    userProgAr.push(obj);
                }
            };
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.tasks), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var t = _c.value;
                    _loop_1(t);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            console.log("getUsersTodayTasks", userProgAr);
            _this.userProgress = userProgAr;
            _this.userProgress.length < 1
                ? (_this.divMsg.nativeElement.style.display = "block")
                : "none";
        });
        // }
    };
    TodayTasksComponent.prototype.parsPercentage = function (val) {
        return parseInt(val) > 1 ? parseInt(val) : parseInt(val) * 100;
    };
    TodayTasksComponent.prototype.doRefresh = function (e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // console.log("UsersProgressComponent.doRefresh started");
                    return [4 /*yield*/, new Promise(function () {
                            _this.isLoaded = true;
                            setTimeout(function () {
                                _this.getUsersTodayTasks();
                                e.target.complete();
                                // this.ionViewWillEnter();
                                _this.isLoaded = false;
                            }, 1000);
                        }).catch(function (error) { return error; })];
                    case 1:
                        // console.log("UsersProgressComponent.doRefresh started");
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TodayTasksComponent.ctorParameters = function () { return [
        { type: src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"] },
        { type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
        { type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("divMsg")
    ], TodayTasksComponent.prototype, "divMsg", void 0);
    TodayTasksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-today-tasks",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./today-tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/today-tasks/today-tasks.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./today-tasks.component.scss */ "./src/app/Components/today-tasks/today-tasks.component.scss")).default]
        })
    ], TodayTasksComponent);
    return TodayTasksComponent;
}());



/***/ }),

/***/ "./src/app/Models/user-progress.ts":
/*!*****************************************!*\
  !*** ./src/app/Models/user-progress.ts ***!
  \*****************************************/
/*! exports provided: UserProgress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProgress", function() { return UserProgress; });
var UserProgress = /** @class */ (function () {
    function UserProgress(userid, username, avgProgress, totaltasks, totalInProgress, totalInCompeletd) {
        this.userId = userid;
        this.userName = username;
        this.avgProgress = avgProgress;
        this.totaltasks = totaltasks;
        this.totalInProgress = totalInProgress;
        this.totalInCompeletd = totalInCompeletd;
    }
    return UserProgress;
}());



/***/ }),

/***/ "./src/app/Pages/team-progress/team-progress-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Pages/team-progress/team-progress-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TeamProgressPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProgressPageRoutingModule", function() { return TeamProgressPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _team_progress_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team-progress.page */ "./src/app/Pages/team-progress/team-progress.page.ts");




var routes = [
    {
        path: "",
        component: _team_progress_page__WEBPACK_IMPORTED_MODULE_3__["TeamProgressPage"],
    },
    {
        path: ":userid",
        loadChildren: function () {
            return __webpack_require__.e(/*! import() | user-tasks-user-tasks-module */ "user-tasks-user-tasks-module").then(__webpack_require__.bind(null, /*! ../user-tasks/user-tasks.module */ "./src/app/Pages/user-tasks/user-tasks.module.ts")).then(function (m) { return m.UserTasksModule; });
        },
    },
];
var TeamProgressPageRoutingModule = /** @class */ (function () {
    function TeamProgressPageRoutingModule() {
    }
    TeamProgressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TeamProgressPageRoutingModule);
    return TeamProgressPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/Pages/team-progress/team-progress.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Pages/team-progress/team-progress.module.ts ***!
  \*************************************************************/
/*! exports provided: TeamProgressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProgressPageModule", function() { return TeamProgressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _team_progress_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-progress-routing.module */ "./src/app/Pages/team-progress/team-progress-routing.module.ts");
/* harmony import */ var _team_progress_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-progress.page */ "./src/app/Pages/team-progress/team-progress.page.ts");
/* harmony import */ var src_app_directives_text_avatar_directive_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/text-avatar.directive.module */ "./src/app/directives/text-avatar.directive.module.ts");
/* harmony import */ var src_app_Components_today_tasks_today_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Components/today-tasks/today-tasks.component */ "./src/app/Components/today-tasks/today-tasks.component.ts");









var TeamProgressPageModule = /** @class */ (function () {
    function TeamProgressPageModule() {
    }
    TeamProgressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_directives_text_avatar_directive_module__WEBPACK_IMPORTED_MODULE_7__["TextAvatarModule"],
                _team_progress_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamProgressPageRoutingModule"],
            ],
            declarations: [_team_progress_page__WEBPACK_IMPORTED_MODULE_6__["TeamProgressPage"], src_app_Components_today_tasks_today_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TodayTasksComponent"]],
        })
    ], TeamProgressPageModule);
    return TeamProgressPageModule;
}());



/***/ }),

/***/ "./src/app/Pages/team-progress/team-progress.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/Pages/team-progress/team-progress.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3RlYW0tcHJvZ3Jlc3MvdGVhbS1wcm9ncmVzcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Pages/team-progress/team-progress.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/Pages/team-progress/team-progress.page.ts ***!
  \***********************************************************/
/*! exports provided: TeamProgressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProgressPage", function() { return TeamProgressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_Models_user_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Models/user-progress */ "./src/app/Models/user-progress.ts");
/* harmony import */ var src_app_Models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Models/user */ "./src/app/Models/user.ts");
/* harmony import */ var src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/task-progress-service.service */ "./src/app/Services/task-progress-service.service.ts");
/* harmony import */ var src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/report.service */ "./src/app/Services/report.service.ts");
/* harmony import */ var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Services/users.service */ "./src/app/Services/users.service.ts");
/* harmony import */ var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/tasks.service */ "./src/app/Services/tasks.service.ts");
/* harmony import */ var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Services/authService.service */ "./src/app/Services/authService.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _create_task_create_task_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../create-task/create-task.page */ "./src/app/Pages/create-task/create-task.page.ts");











var TeamProgressPage = /** @class */ (function () {
    function TeamProgressPage(datasev, repServ, usrServ, taskServ, auth, modalCtrl, navCtrl) {
        this.datasev = datasev;
        this.repServ = repServ;
        this.usrServ = usrServ;
        this.taskServ = taskServ;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.userProgress = new Array();
        this.tasks = new Array();
        this.users = new Array();
        this.user = new src_app_Models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.isLoaded = false;
        this.getUserProgress();
    }
    TeamProgressPage.prototype.ngOnInit = function () {
        this.user = this.auth.getLoggedUser();
        //  this.isLoaded = true;
        //  this.getTotalUserTasks();
    };
    // ionViewWillLeave() {}
    // ionViewDidLeave() {}
    // ionViewDidEnter() {}
    TeamProgressPage.prototype.ionViewWillEnter = function () {
        this.getUserProgress();
    };
    TeamProgressPage.prototype.getUserProgress = function () {
        //  if (!this.isLoaded) {
        var _this = this;
        //Get All Users
        this.users = this.usrServ.usersList;
        var userProgAr = new Array();
        var tasksGroupByUsr = new Array();
        this.repServ.getTasks().subscribe(function (data) {
            // console.log("ionViewWillEnter this.tasks", data);
            tasksGroupByUsr = data.reduce(function (r, a) {
                r[a.userid] = r[a.userid] || [];
                r[a.userid].push(a);
                return r;
            }, Object.create(null));
            new Promise(function (resolve) {
                resolve(tasksGroupByUsr);
            })
                .then(function (res) {
                // console.log("Array<Array<Task>> ", res);
                return Array.of(res);
            })
                .then(function (res) {
                var e_1, _a;
                var taskid = "";
                var _loop_1 = function (id) {
                    var e_2, _a;
                    if (id) {
                        var up = new src_app_Models_user_progress__WEBPACK_IMPORTED_MODULE_2__["UserProgress"]();
                        var totaltasks = 0;
                        var totalInProgress = 0;
                        var totalInCompeletd = 0;
                        var avgProgress = 0;
                        var taskid_1 = "";
                        up.userId = id;
                        up.userName = _this.users.find(function (x) { return x.userId == id; }).userName;
                        var val = res[0][id];
                        try {
                            // console.log("userid, val", id, val);
                            //Get the Task Object from the arry
                            for (var _b = (e_2 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(val))), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var tid = _c.value;
                                totaltasks++;
                                var percentage = 0;
                                percentage = _this.parsPercentage(val[tid].progress);
                                var val2 = val[tid].task;
                                if (percentage < 100) {
                                    // console.log(
                                    //   "if (percentage < 100) ",
                                    //   percentage,
                                    //   percentage < 100
                                    // );
                                    avgProgress = percentage + avgProgress;
                                    taskid_1 = val[tid].id;
                                    totalInProgress++;
                                    // console.log(" totalInProgress++", totalInProgress, id);
                                }
                                else if (percentage >= 100)
                                    ++totalInCompeletd;
                                // console.log("tid, val2", tid, val2);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        up.totaltasks = totaltasks;
                        up.totalInCompeletd = totalInCompeletd;
                        up.totalInProgress = totalInProgress;
                        if (avgProgress > 0 && totalInProgress > 0) {
                            var avg = avgProgress / totalInProgress;
                            up.avgProgress = Number(avg.toFixed(2)); //round the number
                        }
                        userProgAr.push(up);
                    }
                };
                try {
                    // Iterate over the grouped Array by  group by value :
                    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(res[0])), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var id = _c.value;
                        _loop_1(id);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                _this.userProgress = userProgAr;
            });
            //Group the Tasks By User ID
        });
        //console.log("userProgAr", userProgAr);
        this.isLoaded = false;
        //  return userProgAr;
        // }
    };
    TeamProgressPage.prototype.parsPercentage = function (val) {
        //  console.log("val", val);
        var progress = (parseFloat(val) > 1
            ? parseFloat(val)
            : parseFloat(val) * 100).toFixed(0);
        // console.log("progress", progress);
        return Number((parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100).toFixed(0));
    };
    TeamProgressPage.prototype.openNewTaskModal = function () {
        var _this = this;
        this.modalCtrl
            .create({
            component: _create_task_create_task_page__WEBPACK_IMPORTED_MODULE_10__["CreateTaskPage"],
        })
            .then(function (modalElement) {
            modalElement.present();
            return modalElement.onDidDismiss();
        })
            .then(function (resultData) {
            _this.navCtrl.navigateRoot(["tasktracker/mytasks"]);
            console.log("ResultData: ", resultData);
        });
    };
    TeamProgressPage.prototype.doRefresh = function (e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function () {
                            _this.isLoaded = true;
                            setTimeout(function () {
                                _this.ionViewWillEnter();
                                e.target.complete();
                                _this.isLoaded = false;
                            }, 1500);
                        }).catch(function (error) { return error; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamProgressPage.ctorParameters = function () { return [
        { type: src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_4__["TaskProgressService"] },
        { type: src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"] },
        { type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] },
        { type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"] },
        { type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] }
    ]; };
    TeamProgressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-team-progress",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./team-progress.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/team-progress/team-progress.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./team-progress.page.scss */ "./src/app/Pages/team-progress/team-progress.page.scss")).default]
        })
    ], TeamProgressPage);
    return TeamProgressPage;
}());



/***/ })

}]);
//# sourceMappingURL=team-progress-team-progress-module.js.map