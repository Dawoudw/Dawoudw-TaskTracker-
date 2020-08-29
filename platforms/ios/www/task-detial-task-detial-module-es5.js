function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-detial-task-detial-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/task-detial/task-detial.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/task-detial/task-detial.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTaskDetialTaskDetialPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/tasktracker/mytasks\"  text=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title size=\"small\" color=\"primary\"><p>My Tasks</p> </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"danger\" (click)=\"deleteTask()\">\r\n        <ion-icon slot=\"icon-only\" size=\"small\" name=\"trash-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<!-- Card view  -->\r\n<ion-content fullscreen>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-med=\"6\" size-lg=\"6\" offset-med=\"3\" offset-lg=\"3\">\r\n        <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\r\n          <ion-item>\r\n            <ion-label position=\"stacked\" color=\"primary\"\r\n              >Task Title <ion-text color=\"danger\">*</ion-text></ion-label\r\n            >\r\n            <ion-input\r\n              style=\"background-color: transparent;\"\r\n              required\r\n              type=\"text\"\r\n              [(ngModel)]=\"loadedTask.task\"\r\n              (focusout)=\"updateTask()\"\r\n            ></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label position=\"stacked\" color=\"primary\"\r\n              >Progress % <ion-text color=\"danger\">*</ion-text></ion-label\r\n            >\r\n            <ion-input\r\n              style=\"background-color: transparent;\"\r\n              required\r\n              type=\"number\"\r\n              [(ngModel)]=\"loadedTask.progress\"\r\n              (focusout)=\"updateTask()\"\r\n            ></ion-input>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label position=\"stacked\" color=\"primary\"\r\n              >Description</ion-label\r\n            >\r\n            <ion-textarea\r\n              rows=\"20\"\r\n              cols=\"20\"\r\n              style=\"background-color: transparent;\"\r\n              [(ngModel)]=\"loadedTask.details\"\r\n              (focusout)=\"updateTask()\"\r\n            ></ion-textarea>\r\n          </ion-item>\r\n        </ion-list>\r\n        <!--     \r\n        <div class=\"ion-padding\">\r\n          <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\"\r\n            >Save</ion-button\r\n          >\r\n        </div> -->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/Pages/task-detial/task-detial-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/Pages/task-detial/task-detial-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: TaskDetialPageRoutingModule */

  /***/
  function srcAppPagesTaskDetialTaskDetialRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetialPageRoutingModule", function () {
      return TaskDetialPageRoutingModule;
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


    var _task_detial_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task-detial.page */
    "./src/app/Pages/task-detial/task-detial.page.ts");

    var routes = [{
      path: '',
      component: _task_detial_page__WEBPACK_IMPORTED_MODULE_3__["TaskDetialPage"]
    }];

    var TaskDetialPageRoutingModule = function TaskDetialPageRoutingModule() {
      _classCallCheck(this, TaskDetialPageRoutingModule);
    };

    TaskDetialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TaskDetialPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pages/task-detial/task-detial.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Pages/task-detial/task-detial.module.ts ***!
    \*********************************************************/

  /*! exports provided: TaskDetialPageModule */

  /***/
  function srcAppPagesTaskDetialTaskDetialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetialPageModule", function () {
      return TaskDetialPageModule;
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


    var _task_detial_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./task-detial-routing.module */
    "./src/app/Pages/task-detial/task-detial-routing.module.ts");
    /* harmony import */


    var _task_detial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./task-detial.page */
    "./src/app/Pages/task-detial/task-detial.page.ts");

    var TaskDetialPageModule = function TaskDetialPageModule() {
      _classCallCheck(this, TaskDetialPageModule);
    };

    TaskDetialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _task_detial_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskDetialPageRoutingModule"]],
      declarations: [_task_detial_page__WEBPACK_IMPORTED_MODULE_6__["TaskDetialPage"]]
    })], TaskDetialPageModule);
    /***/
  },

  /***/
  "./src/app/Pages/task-detial/task-detial.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/Pages/task-detial/task-detial.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTaskDetialTaskDetialPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3Rhc2stZGV0aWFsL3Rhc2stZGV0aWFsLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Pages/task-detial/task-detial.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Pages/task-detial/task-detial.page.ts ***!
    \*******************************************************/

  /*! exports provided: TaskDetialPage */

  /***/
  function srcAppPagesTaskDetialTaskDetialPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskDetialPage", function () {
      return TaskDetialPage;
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


    var _Models_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../Models/task */
    "./src/app/Models/task.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/tasks.service */
    "./src/app/Services/tasks.service.ts");

    var TaskDetialPage = /*#__PURE__*/function () {
      function TaskDetialPage(route, navCtrl, tasksService, alCtr) {
        _classCallCheck(this, TaskDetialPage);

        this.route = route;
        this.navCtrl = navCtrl;
        this.tasksService = tasksService;
        this.alCtr = alCtr;
        this.loadedTask = Object.create(_Models_task__WEBPACK_IMPORTED_MODULE_2__["Task"]); // Variable need to be initialized!!!
      }

      _createClass(TaskDetialPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has("taskId")) {
              _this.navCtrl.navigateBack("/tasktracker/mytasks");

              return;
            }

            _this.taskSub = _this.tasksService.getTask(paramMap.get("taskId")).subscribe(function (task) {
              console.log("Subscripting: ", task);
              _this.loadedTask = task;
              console.log("This.loadedTask.id = ", _this.loadedTask.id);
            });
          });
        }
      }, {
        key: "updateTask",
        value: function updateTask() {
          console.log("The task is going to be updated with data: ", this.loadedTask);
          this.tasksService.updateTask(this.loadedTask).subscribe();
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "deleteTask",
        value: function deleteTask() {
          var _this2 = this;

          this.alCtr.create({
            subHeader: " Delete Alert   ",
            cssClass: "alertButton",
            message: " <span class='deleteMsg'>Do you want to delete this Task? </span> ",
            buttons: [{
              text: "Cancel",
              role: "cancel",
              cssClass: "alertButton"
            }, {
              text: "Delete",
              cssClass: "alertButton",
              handler: function handler() {
                console.log("Trying to delete task with ID: ", _this2.loadedTask.id);

                _this2.tasksService.deleteTask(_this2.loadedTask).subscribe();

                _this2.navCtrl.navigateBack("/tasktracker/mytasks");
              }
            }]
          }).then(function (al) {
            al.present();
          }); // return;
        }
      }, {
        key: "onViewWillEnter",
        value: function onViewWillEnter() {
          this.tasksService.fetchMyTasks(this.tasksService.loginedUser.userId);
        }
      }, {
        key: "onViewWillLeave",
        value: function onViewWillLeave() {
          this.tasksService.updateTask(this.loadedTask);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.taskSub) {
            this.taskSub.unsubscribe();
          }
        }
      }]);

      return TaskDetialPage;
    }();

    TaskDetialPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_5__["TasksService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    TaskDetialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-task-detial",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-detial.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/task-detial/task-detial.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-detial.page.scss */
      "./src/app/Pages/task-detial/task-detial.page.scss"))["default"]]
    })], TaskDetialPage);
    /***/
  }
}]);
//# sourceMappingURL=task-detial-task-detial-module-es5.js.map