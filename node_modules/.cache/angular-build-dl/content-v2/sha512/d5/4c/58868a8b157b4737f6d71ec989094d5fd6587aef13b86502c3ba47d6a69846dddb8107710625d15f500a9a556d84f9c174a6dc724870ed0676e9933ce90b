function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/users-progress/users-progress.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/users-progress/users-progress.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUsersProgressUsersProgressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Card view  -->\r\n<!-- <ion-grid>\r\n  <ion-row *ngFor=\"let item of userProgress; let i = index\">\r\n    <ion-col size-med=\"6\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\r\n      <ion-card class=\"ion-no-margin\">\r\n        <ion-col>\r\n          <ion-img> </ion-img>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-row>\r\n            <ion-col style=\"float: left;\">\r\n              <ion-label\r\n                color=\"primary\"\r\n                class=\"ion-text-start ion-text-capitalize\"\r\n              >\r\n                {{ item.userName }}\r\n              </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label (click)=\"presentPopover()\" color=\"medium\">\r\n                Total Tasks\r\n              </ion-label>\r\n              <ion-label color=\"dark\"> ({{ item.totaltasks }}) </ion-label>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-badge\r\n                [color]=\"\r\n                  item.progress > 99\r\n                    ? 'success'\r\n                    : item.progress < 50\r\n                    ? 'warning'\r\n                    : 'primary'\r\n                \"\r\n              >\r\n                {{ item.progress }}%\r\n              </ion-badge>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon\r\n                name=\"chatbox-ellipses-outline\"\r\n                style=\"float: right;\"\r\n                size=\"large\"\r\n                class=\"ion-text-end\"\r\n              >\r\n              </ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-col>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid> -->\r\n\r\n<!-- List view  -->\r\n\r\n<ion-header class=\"ion-no-margin\">\r\n  <ion-toolbar>\r\n    <ion-icon\r\n      name=\"people-outline\"\r\n      color=\"primary\"\r\n      size=\"large\"\r\n      slot=\"start\"\r\n      style=\"\r\n        width: 24px !important;\r\n        height: 24px !important;\r\n        margin-right: 5px;\r\n        margin-left: 5px;\r\n      \"\r\n    ></ion-icon>\r\n    <ion-label slot=\"start\" color=\"primary\"> <p>Team Progress</p></ion-label>\r\n    <ion-buttons slot=\"end\">\r\n      <!-- <ion-button [routerLink]=\"['/', 'tasktracker', 'submit-my-progress', 'new']\"> -->\r\n      <ion-button #btnRefresh id=\"btnRefresh\" (click)=\"doRefresh($event)\">\r\n        <ion-icon slot=\"icon-only\" name=\"sync-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-no-margin ; no-padding\">\r\n      <ion-col size-med=\"6\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\r\n        <div\r\n          style=\"\r\n            height: 0px;\r\n            text-align: center !important;\r\n            position: relative;\r\n            z-index: 1;\r\n          \"\r\n          *ngIf=\"isLoaded\"\r\n        >\r\n          <ion-spinner\r\n            style=\"position: relative; z-index: 2; top: 0px;\"\r\n            name=\"crescent\"\r\n          ></ion-spinner>\r\n        </div>\r\n\r\n        <ion-list\r\n          *ngFor=\"let item of userProgress; let i = index\"\r\n          [(ngModel)]=\"userProgress\"\r\n          ngDefaultControl\r\n          name=\"lstTaskProgress\"\r\n        >\r\n          <ion-row style=\"justify-items: left;\">\r\n            <ion-col>\r\n              <ion-item [routerLink]=\"['./', item.userId]\" detail=\"true\">\r\n                <ion-avatar slot=\"start\" name=\"avatar\">\r\n                  <img src=\"../assets/images/avatar.svg\" />\r\n                </ion-avatar>\r\n                <ion-label class=\"ion-text-start ion-text-capitalize\">\r\n                  <ion-label color=\"primary\" mode=\"ios\" position=\"stacked\">\r\n                    <b>{{ item.userName }}</b></ion-label\r\n                  >\r\n\r\n                  <ion-label mode=\"ios\" position=\"stacked\">\r\n                    Total Tasks <b>({{ item.totaltasks }}) </b>\r\n                  </ion-label>\r\n                  <ion-label mode=\"ios\" position=\"stacked\">\r\n                    <ion-badge\r\n                      style=\"margin: 0px;\"\r\n                      [color]=\"\r\n                        item.avgProgress > 99\r\n                          ? 'success'\r\n                          : item.avgProgress < 50\r\n                          ? 'warning'\r\n                          : 'primary'\r\n                      \"\r\n                    >\r\n                      {{ item.avgProgress }}%\r\n                    </ion-badge>\r\n                  </ion-label>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"auto\">\r\n              <ion-icon\r\n                color=\"primary\"\r\n                name=\"chatbox-ellipses-outline\"\r\n                style=\"\r\n                  flex: left;\r\n                  margin-top: 10px;\r\n                  margin-left: 5px;\r\n                  margin-right: 5px;\r\n                  width: 20px;\r\n                  height: 20px;\r\n                \"\r\n                class=\"ion-text-start\"\r\n              ></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tab1/tab1.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tab1/tab1.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTab1Tab1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \r\n\r\n<!-- \r\n<ion-header class=\"ion-no-margin\">\r\n  <ion-toolbar>\r\n \r\n    <ion-icon name=\"people-outline\"  color=\"primary\"    size=\"large\" slot=\"start\"></ion-icon> \r\n    <ion-label slot=\"start\"   color=\"primary\"   >Team Progress </ion-label>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content >\r\n  <app-users-progress></app-users-progress>\r\n</ion-content> -->\r\n\r\n<ion-header class=\"ion-no-margin\">\r\n  <ion-toolbar>\r\n    <ion-icon\r\n      name=\"people-outline\"\r\n      color=\"primary\"\r\n      size=\"large\"\r\n      slot=\"start\"\r\n      style=\"\r\n        width: 24px !important;\r\n        height: 24px !important;\r\n        margin-right: 5px;\r\n        margin-left: 5px;\r\n      \"\r\n    ></ion-icon>\r\n    <ion-label slot=\"start\" color=\"primary\"> <p>Team Progress</p></ion-label>\r\n    <ion-buttons slot=\"end\">\r\n      <!-- <ion-button [routerLink]=\"['/', 'tasktracker', 'submit-my-progress', 'new']\"> -->\r\n      <ion-button #btnRefresh id=\"btnRefresh\" (click)=\"doRefresh($event)\">\r\n        <ion-icon slot=\"icon-only\" name=\"sync-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-no-margin ; no-padding\">\r\n      <ion-col size-med=\"6\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\r\n        <div\r\n          style=\"\r\n            height: 0px;\r\n            text-align: center !important;\r\n            position: relative;\r\n            z-index: 1;\r\n          \"\r\n          *ngIf=\"isLoaded\"\r\n        >\r\n          <ion-spinner\r\n            style=\"position: relative; z-index: 2; top: 0px;\"\r\n            name=\"crescent\"\r\n          ></ion-spinner>\r\n        </div>\r\n\r\n        <ion-list\r\n          *ngFor=\"let item of userProgress; let i = index\"\r\n          [(ngModel)]=\"userProgress\"\r\n          ngDefaultControl\r\n          name=\"lstTaskProgress\"\r\n        >\r\n          <ion-row style=\"justify-items: left;\">\r\n            <ion-col>\r\n              <ion-item [routerLink]=\"['./', item.userId]\" detail=\"true\">\r\n                <ion-avatar slot=\"start\" name=\"avatar\">\r\n                  <img src=\"../assets/images/avatar.svg\" />\r\n                </ion-avatar>\r\n                <ion-label class=\"ion-text-start ion-text-capitalize\">\r\n                  <ion-label color=\"primary\" mode=\"ios\" position=\"stacked\">\r\n                    <b>{{ item.userName }}</b></ion-label\r\n                  >\r\n\r\n                  <ion-label mode=\"ios\" position=\"stacked\">\r\n                    Total Tasks <b>({{ item.totaltasks }}) </b>\r\n                  </ion-label>\r\n                  <ion-label mode=\"ios\" position=\"stacked\">\r\n                    <ion-badge\r\n                      style=\"margin: 0px;\"\r\n                      [color]=\"\r\n                        item.avgProgress > 99\r\n                          ? 'success'\r\n                          : item.avgProgress < 50\r\n                          ? 'warning'\r\n                          : 'primary'\r\n                      \"\r\n                    >\r\n                      {{ item.avgProgress }}%\r\n                    </ion-badge>\r\n                  </ion-label>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"auto\">\r\n              <ion-icon\r\n                color=\"primary\"\r\n                name=\"chatbox-ellipses-outline\"\r\n                style=\"\r\n                  flex: left;\r\n                  margin-top: 10px;\r\n                  margin-left: 5px;\r\n                  margin-right: 5px;\r\n                  width: 20px;\r\n                  height: 20px;\r\n                \"\r\n                class=\"ion-text-start\"\r\n              ></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/Components/users-progress/users-progress.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/users-progress/users-progress.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUsersProgressUsersProgressComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".popover-content {\n  background: #222;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class .popover-content {\n  background: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy91c2Vycy1wcm9ncmVzcy9EOlxcV29ya1xcTFRJXFxQcm9qZWN0c1xcSW9uaWNcXFRhc2tUcmFja2VyL3NyY1xcYXBwXFxDb21wb25lbnRzXFx1c2Vycy1wcm9ncmVzc1xcdXNlcnMtcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvdXNlcnMtcHJvZ3Jlc3MvdXNlcnMtcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVFLHVFQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvdXNlcnMtcHJvZ3Jlc3MvdXNlcnMtcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wb3Zlci1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbiAgLm15LWN1c3RvbS1jbGFzcyAucG9wb3Zlci1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgfSIsIi5wb3BvdmVyLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xufVxuXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xuLm15LWN1c3RvbS1jbGFzcyAucG9wb3Zlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogIzIyMjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Components/users-progress/users-progress.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Components/users-progress/users-progress.component.ts ***!
    \***********************************************************************/

  /*! exports provided: UsersProgressComponent */

  /***/
  function srcAppComponentsUsersProgressUsersProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersProgressComponent", function () {
      return UsersProgressComponent;
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


    var src_app_Models_user_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Models/user-progress */
    "./src/app/Models/user-progress.ts");
    /* harmony import */


    var src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/task-progress-service.service */
    "./src/app/Services/task-progress-service.service.ts");
    /* harmony import */


    var src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/report.service */
    "./src/app/Services/report.service.ts");
    /* harmony import */


    var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/users.service */
    "./src/app/Services/users.service.ts");
    /* harmony import */


    var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/tasks.service */
    "./src/app/Services/tasks.service.ts");

    var UsersProgressComponent = /*#__PURE__*/function () {
      function UsersProgressComponent(datasev, repServ, usrServ, taskServ) {
        var _this = this;

        _classCallCheck(this, UsersProgressComponent);

        this.datasev = datasev;
        this.repServ = repServ;
        this.usrServ = usrServ;
        this.taskServ = taskServ;
        this.userProgress = new Array();
        this.tasks = new Array();
        this.users = new Array();
        this.isLoaded = false;
        this.repServ.getTasks().subscribe(function (data) {
          _this.tasks = data;
        }); //Get All Users

        this.users = this.usrServ.usersList;
        this.doRefresh(undefined);
      }

      _createClass(UsersProgressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.doRefresh(undefined); //  this.isLoaded = true;
          //  this.getTotalUserTasks();
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {}
      }, {
        key: "ionViewDisLeave",
        value: function ionViewDisLeave() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.userProgress = this.getUserProgress();
        }
      }, {
        key: "getUserProgress",
        value: function getUserProgress() {
          var _this2 = this;

          //  if (!this.isLoaded) {
          var userProgAr = new Array();
          console.log("ionViewWillEnter this.tasks", this.tasks); //Group Tasks By   getTotalUserTasks() {User ID

          var tasksGroupByUsr = new Array();
          tasksGroupByUsr = this.tasks.reduce(function (r, a) {
            r[a.userid] = r[a.userid] || [];
            r[a.userid].push(a);
            return r;
          }, Object.create(null));
          var prom = new Promise(function (resolve) {
            resolve(tasksGroupByUsr);
          }).then(function (res) {
            console.log("Array<Array<Task>> ", res);
            return Array.of(res);
          }).then(function (res) {
            var up;
            var totaltasks, totalInProgress, totalInCompeletd, avgProgress; // Iterate over the grouped Array by  group by value :

            var _loop = function _loop() {
              var id = _Object$keys[_i];
              up = new src_app_Models_user_progress__WEBPACK_IMPORTED_MODULE_2__["UserProgress"]();
              totaltasks = totalInProgress = totalInCompeletd = avgProgress = 0;
              up.userId = id;
              up.userName = _this2.users.find(function (x) {
                return x.userId == id;
              }).userName;
              var val = res[0][id];
              console.log("id, val", id, val); //Get the Task Object from the arry

              for (var _i2 = 0, _Object$keys2 = Object.keys(val); _i2 < _Object$keys2.length; _i2++) {
                var tid = _Object$keys2[_i2];
                ++totaltasks;

                var percentage = _this2.parsPercentage(val[tid].progress);

                var val2 = val[tid].task;

                if (percentage < 100) {
                  avgProgress += percentage;
                  ++totalInProgress;
                }

                if (percentage >= 100) ++totalInCompeletd;
                console.log("tid, val2", tid, val2);
              }

              up.totaltasks = totaltasks;
              up.totalInCompeletd = totalInCompeletd;
              up.totalInProgress = totalInProgress;
              if (avgProgress > 0 && totalInProgress > 0) avgProgress = avgProgress / totalInProgress;
              up.avgProgress = avgProgress;
              userProgAr.push(up);
            };

            for (var _i = 0, _Object$keys = Object.keys(res[0]); _i < _Object$keys.length; _i++) {
              _loop();
            }
          });
          console.log("userProgAr", userProgAr);
          this.isLoaded = false;
          return userProgAr; // }
        }
      }, {
        key: "parsPercentage",
        value: function parsPercentage(val) {
          return parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100;
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isLoaded = true;
                    _context.next = 3;
                    return new Promise(function () {
                      event.target ? event.target.disabled = true : false;
                      setTimeout(function () {
                        _this3.ionViewWillEnter();

                        event.target ? event.target.disabled = false : true;
                        _this3.isLoaded = false;
                      }, 1500);
                    })["catch"](function (error) {
                      return error;
                    });

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return UsersProgressComponent;
    }();

    UsersProgressComponent.ctorParameters = function () {
      return [{
        type: src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_3__["TaskProgressService"]
      }, {
        type: src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]
      }, {
        type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
      }, {
        type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_6__["TasksService"]
      }];
    };

    UsersProgressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-team-progress",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./users-progress.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/users-progress/users-progress.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./users-progress.component.scss */
      "./src/app/Components/users-progress/users-progress.component.scss"))["default"]]
    })], UsersProgressComponent);
    /***/
  },

  /***/
  "./src/app/Models/user-progress.ts":
  /*!*****************************************!*\
    !*** ./src/app/Models/user-progress.ts ***!
    \*****************************************/

  /*! exports provided: UserProgress */

  /***/
  function srcAppModelsUserProgressTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProgress", function () {
      return UserProgress;
    });

    var UserProgress = function UserProgress(userid, username, avgProgress, totaltasks, totalInProgress, totalInCompeletd) {
      _classCallCheck(this, UserProgress);

      this.userId = userid;
      this.userName = username;
      this.avgProgress = avgProgress;
      this.totaltasks = totaltasks;
      this.totalInProgress = totalInProgress;
      this.totalInCompeletd = totalInCompeletd;
    };
    /***/

  },

  /***/
  "./src/app/Pages/tab1/tab1-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/Pages/tab1/tab1-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: Tab1PageRoutingModule */

  /***/
  function srcAppPagesTab1Tab1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function () {
      return Tab1PageRoutingModule;
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


    var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/Pages/tab1/tab1.page.ts");

    var routes = [{
      path: "",
      component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"]
    }, // {
    //   path: "", //redirectTo: 'team-progress', // loadChildren:'../tab1/tab1.module#Tab1PageModule',
    //   loadChildren: () =>
    //     import("../tab1/tab1.module").then((m) => m.Tab1PageModule),
    //   //component: Tab1Page,
    // },
    {
      path: ":userid",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | user-tasks-user-tasks-module */
        "user-tasks-user-tasks-module").then(__webpack_require__.bind(null,
        /*! ../user-tasks/user-tasks.module */
        "./src/app/Pages/user-tasks/user-tasks.module.ts")).then(function (m) {
          return m.UserTasksModule;
        });
      }
    }];

    var Tab1PageRoutingModule = function Tab1PageRoutingModule() {
      _classCallCheck(this, Tab1PageRoutingModule);
    };

    Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pages/tab1/tab1.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/Pages/tab1/tab1.module.ts ***!
    \*******************************************/

  /*! exports provided: Tab1PageModule */

  /***/
  function srcAppPagesTab1Tab1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function () {
      return Tab1PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab1.page */
    "./src/app/Pages/tab1/tab1.page.ts");
    /* harmony import */


    var _Components_users_progress_users_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../Components/users-progress/users-progress.component */
    "./src/app/Components/users-progress/users-progress.component.ts");
    /* harmony import */


    var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab1-routing.module */
    "./src/app/Pages/tab1/tab1-routing.module.ts");

    var Tab1PageModule = function Tab1PageModule() {
      _classCallCheck(this, Tab1PageModule);
    };

    Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"]],
      declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"], _Components_users_progress_users_progress_component__WEBPACK_IMPORTED_MODULE_6__["UsersProgressComponent"]]
    })], Tab1PageModule);
    /***/
  },

  /***/
  "./src/app/Pages/tab1/tab1.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/Pages/tab1/tab1.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTab1Tab1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3RhYjEvdGFiMS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/tab1/tab1.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/Pages/tab1/tab1.page.ts ***!
    \*****************************************/

  /*! exports provided: Tab1Page */

  /***/
  function srcAppPagesTab1Tab1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab1Page", function () {
      return Tab1Page;
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


    var src_app_Models_user_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Models/user-progress */
    "./src/app/Models/user-progress.ts");
    /* harmony import */


    var src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/task-progress-service.service */
    "./src/app/Services/task-progress-service.service.ts");
    /* harmony import */


    var src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/report.service */
    "./src/app/Services/report.service.ts");
    /* harmony import */


    var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/users.service */
    "./src/app/Services/users.service.ts");
    /* harmony import */


    var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/tasks.service */
    "./src/app/Services/tasks.service.ts");

    var Tab1Page = /*#__PURE__*/function () {
      function Tab1Page(datasev, repServ, usrServ, taskServ) {
        var _this4 = this;

        _classCallCheck(this, Tab1Page);

        this.datasev = datasev;
        this.repServ = repServ;
        this.usrServ = usrServ;
        this.taskServ = taskServ;
        this.userProgress = new Array();
        this.tasks = new Array();
        this.users = new Array();
        this.isLoaded = false;
        this.repServ.getTasks().subscribe(function (data) {
          _this4.tasks = data;
        }); //Get All Users

        this.users = this.usrServ.usersList;
      }

      _createClass(Tab1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.doRefresh(undefined); //  this.isLoaded = true;
          //  this.getTotalUserTasks();
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {}
      }, {
        key: "ionViewDisLeave",
        value: function ionViewDisLeave() {}
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {} //@HostListener()

      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.userProgress = this.getUserProgress();
        }
      }, {
        key: "getUserProgress",
        value: function getUserProgress() {
          var _this5 = this;

          //  if (!this.isLoaded) {
          var userProgAr = new Array();
          console.log("ionViewWillEnter this.tasks", this.tasks); //Group the Tasks By User ID

          var tasksGroupByUsr = new Array();
          tasksGroupByUsr = this.tasks.reduce(function (r, a) {
            r[a.userid] = r[a.userid] || [];
            r[a.userid].push(a);
            return r;
          }, Object.create(null));
          var prom = new Promise(function (resolve) {
            resolve(tasksGroupByUsr);
          }).then(function (res) {
            console.log("Array<Array<Task>> ", res);
            return Array.of(res);
          }).then(function (res) {
            var up;
            var totaltasks, totalInProgress, totalInCompeletd, avgProgress; // Iterate over the grouped Array by  group by value :

            var _loop2 = function _loop2() {
              var id = _Object$keys3[_i3];
              up = new src_app_Models_user_progress__WEBPACK_IMPORTED_MODULE_2__["UserProgress"]();
              totaltasks = totalInProgress = totalInCompeletd = avgProgress = 0;
              up.userId = id;
              up.userName = _this5.users.find(function (x) {
                return x.userId == id;
              }).userName;
              var val = res[0][id];
              console.log("id, val", id, val); //Get the Task Object from the arry

              for (var _i4 = 0, _Object$keys4 = Object.keys(val); _i4 < _Object$keys4.length; _i4++) {
                var tid = _Object$keys4[_i4];
                ++totaltasks;

                var percentage = _this5.parsPercentage(val[tid].progress);

                var val2 = val[tid].task;

                if (percentage < 100) {
                  avgProgress += percentage;
                  ++totalInProgress;
                }

                if (percentage >= 100) ++totalInCompeletd;
                console.log("tid, val2", tid, val2);
              }

              up.totaltasks = totaltasks;
              up.totalInCompeletd = totalInCompeletd;
              up.totalInProgress = totalInProgress;
              if (avgProgress > 0 && totalInProgress > 0) avgProgress = avgProgress / totalInProgress;
              up.avgProgress = Number(avgProgress.toFixed(2)); //round the number

              userProgAr.push(up);
            };

            for (var _i3 = 0, _Object$keys3 = Object.keys(res[0]); _i3 < _Object$keys3.length; _i3++) {
              _loop2();
            }
          });
          console.log("userProgAr", userProgAr);
          this.isLoaded = false;
          return userProgAr; // }
        }
      }, {
        key: "parsPercentage",
        value: function parsPercentage(val) {
          return Number((parseFloat(val) >= 1 ? parseFloat(val) : parseFloat(val) * 100).toFixed(0));
        }
      }, {
        key: "doRefresh",
        value: function doRefresh(event) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isLoaded = true;
                    _context2.next = 3;
                    return new Promise(function () {
                      event.target ? event.target.disabled = true : false;
                      setTimeout(function () {
                        _this6.ionViewWillEnter();

                        event.target ? event.target.disabled = false : true;
                        _this6.isLoaded = false;
                      }, 1500);
                    })["catch"](function (error) {
                      return error;
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return Tab1Page;
    }();

    Tab1Page.ctorParameters = function () {
      return [{
        type: src_app_Services_task_progress_service_service__WEBPACK_IMPORTED_MODULE_3__["TaskProgressService"]
      }, {
        type: src_app_Services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]
      }, {
        type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
      }, {
        type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_6__["TasksService"]
      }];
    };

    Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tab1",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tab1/tab1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab1.page.scss */
      "./src/app/Pages/tab1/tab1.page.scss"))["default"]]
    })], Tab1Page);
    /***/
  }
}]);
//# sourceMappingURL=tab1-tab1-module-es5.js.map