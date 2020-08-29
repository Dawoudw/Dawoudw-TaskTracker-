(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~create-subtask-create-subtask-module~task-subview-task-subview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/create-subtask/create-subtask.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/create-subtask/create-subtask.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-margin\">\n  <ion-toolbar color=\"primary\">\n    <ion-icon\n      name=\"document-text-outline\"\n      size=\"large\"\n      slot=\"start\"\n      style=\"\n        width: 24px !important;\n        height: 24px !important;\n        margin-right: 5px;\n        margin-left: 5px;\n      \"\n    ></ion-icon>\n    <ion-label slot=\"start\" color=\"light\"> <p>Create Task</p></ion-label>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onCancel()\">\n        <ion-icon name=\"close-sharp\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-text-center\" [fullscreen]=\"true\">\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <ion-row>\n        <ion-col\n          size-xs=\"12\"\n          size-sm=\"12\"\n          size-med=\"10\"\n          offset-med=\"1\"\n          size-lg=\"8\"\n          offset-lg=\"2\"\n          size-xlg=\"6\"\n          offset-xlg=\"3\"\n        >\n          <ion-card>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color=\"medium\" position=\"floating\"\n                    >Task Title</ion-label\n                  >\n                  <ion-input\n                    type=\"text\"\n                    autocomplete\n                    autocorrect\n                    formControlName=\"title\"\n                  ></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color=\"medium\" position=\"floating\"\n                    >Task Date</ion-label\n                  >\n                  <ion-datetime\n                    type=\"text\"\n                    autocomplete\n                    autocorrect\n                    formControlName=\"taskdate\"\n                  >\n                  </ion-datetime>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color=\"medium\" position=\"floating\"\n                    >Progres(0~100)</ion-label\n                  >\n                  <ion-input\n                    type=\"number\"\n                    inputmode =\"numeric\"\n                    min=\"0\"\n                    step=\"1\"\n                    max=\"100\"\n                    autocomplete\n                    autocorrect\n                    formControlName=\"progress\"\n                  >\n                  </ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label color=\"medium\" position=\"floating\"\n                    >Task Details</ion-label\n                  >\n                  <ion-textarea\n                    rows=\"10\"\n                    cols=\"20\"\n                    autocomplete\n                    autocorrect\n                    formControlName=\"description\"\n                  ></ion-textarea>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-button\n                  class=\"primary\"\n                  expand=\"block\"\n                  style=\"\n                    margin-left: 20%;\n                    margin-right: 20%;\n                    text-align: center !important;\n                  \"\n                  (click)=\"createSubTask()\"\n                  >Create</ion-button\n                >\n              </ion-col>\n            </ion-row>\n            <div\n              *ngIf=\"!form.valid\"\n              #divMsg\n              style=\"display: none;\"\n              class=\"ion-no-padding ion-margin-top ion-margin-horizontal\"\n            >\n              <ion-chip\n                color=\"danger\"\n                class=\"ion-justify-content-center\"\n                style=\"width: 98%;\"\n              >\n                <ion-label>Please fill all required fileds</ion-label>\n              </ion-chip>\n            </div>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Models/sub-task.ts":
/*!************************************!*\
  !*** ./src/app/Models/sub-task.ts ***!
  \************************************/
/*! exports provided: SubTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTask", function() { return SubTask; });
var SubTask = /** @class */ (function () {
    function SubTask(taskid, id, taskdate, details, subtask, progress) {
        /*
        
              "details": "Start in first course ",
              "id": "c18b3e4d-4b4e-48fa-8ef9-08187fd7fd33",
              "subtask": "Course1",
              "taskid": "78b26ac9-a437-40b4-b68a-0585a075e734",
              "taskdate": "2020-08-24",
              "progress": "0%"
         */
        this.id = "";
        this.taskid = taskid;
        this.id = id;
        this.taskdate = taskdate;
        this.details = details;
        this.subtask = subtask;
        this.progress = progress;
    }
    return SubTask;
}());



/***/ }),

/***/ "./src/app/Pages/create-subtask/create-subtask.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/Pages/create-subtask/create-subtask.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2NyZWF0ZS1zdWJ0YXNrL2NyZWF0ZS1zdWJ0YXNrLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Pages/create-subtask/create-subtask.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/Pages/create-subtask/create-subtask.page.ts ***!
  \*************************************************************/
/*! exports provided: CreateSubtaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubtaskPage", function() { return CreateSubtaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/tasks.service */ "./src/app/Services/tasks.service.ts");
/* harmony import */ var src_app_Models_sub_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/sub-task */ "./src/app/Models/sub-task.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/authService.service */ "./src/app/Services/authService.service.ts");








var CreateSubtaskPage = /** @class */ (function () {
    function CreateSubtaskPage(modalCtrl, tasksService, // private formBuilder: FormBuilder
    router, auth) {
        this.modalCtrl = modalCtrl;
        this.tasksService = tasksService;
        this.router = router;
        this.auth = auth;
        this.subTask = new src_app_Models_sub_task__WEBPACK_IMPORTED_MODULE_5__["SubTask"]();
        this.user = auth.getLoggedUser();
        if (!this.user) {
            console.log(!this.user);
            router.ngOnDestroy();
        }
    }
    CreateSubtaskPage.prototype.ngOnDestroy = function () {
    };
    CreateSubtaskPage.prototype.ngOnInit = function () {
        console.log("" + this.task.id);
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: "blur",
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: "blur",
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }),
            progress: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: "blur",
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }),
            taskdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                updateOn: "blur",
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }),
        });
    };
    CreateSubtaskPage.prototype.onCancel = function () {
        this.modalCtrl.dismiss(null, "cancel");
    };
    CreateSubtaskPage.prototype.onCreateTask = function () {
        if (this.form.valid && this.task) {
            console.log("New-Task Page From FORM: ", this.form.value.title, this.form.value.description);
            this.tasksService
                .addTask(this.form.value.title, this.form.value.description)
                .subscribe();
            this.form.reset();
            this.modalCtrl.dismiss(null, "task created");
        }
        else {
            return;
        }
        // window.location.replace('tasktracker/mytasks')
    };
    CreateSubtaskPage.prototype.createSubTask = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.form.valid && this.task)) return [3 /*break*/, 3];
                        this.subTask.taskid = this.task.id;
                        this.subTask.taskdate = this.form.value.taskdate;
                        this.subTask.details = this.form.value.description;
                        this.subTask.subtask = this.form.value.title;
                        this.subTask.progress = this.form.value.progress;
                        console.log(this.subTask);
                        if (!this.form.value.title) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.tasksService
                                .addSubTask(this.subTask.id, this.subTask)
                                .then(function (result) {
                                console.log("createSubTask() result ", result);
                            })
                                .catch(function (er) {
                                console.log(er);
                            })
                                .finally(function () {
                                _this.form.reset();
                                _this.modalCtrl.dismiss(null, "task created");
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        console.log("There were undefined fields when creating a subtask");
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CreateSubtaskPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
        { type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
    ]; };
    CreateSubtaskPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-create-subtask",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-subtask.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/create-subtask/create-subtask.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-subtask.page.scss */ "./src/app/Pages/create-subtask/create-subtask.page.scss")).default]
        })
    ], CreateSubtaskPage);
    return CreateSubtaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~create-subtask-create-subtask-module~task-subview-task-subview-module.js.map