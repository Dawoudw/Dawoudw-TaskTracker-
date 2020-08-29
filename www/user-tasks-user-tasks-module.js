(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-tasks-user-tasks-module"],{

/***/ "./src/app/Pages/user-tasks/user-tasks-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/user-tasks/user-tasks-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: UserTasksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTasksRoutingModule", function() { return UserTasksRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _user_tasks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-tasks.page */ "./src/app/Pages/user-tasks/user-tasks.page.ts");




var routes = [
    {
        path: '',
        component: _user_tasks_page__WEBPACK_IMPORTED_MODULE_3__["UserTasksPage"],
    }
];
var UserTasksRoutingModule = /** @class */ (function () {
    function UserTasksRoutingModule() {
    }
    UserTasksRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserTasksRoutingModule);
    return UserTasksRoutingModule;
}());



/***/ }),

/***/ "./src/app/Pages/user-tasks/user-tasks.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/user-tasks/user-tasks.module.ts ***!
  \*******************************************************/
/*! exports provided: UserTasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTasksModule", function() { return UserTasksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _Pages_user_tasks_user_tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Pages/user-tasks/user-tasks-routing.module */ "./src/app/Pages/user-tasks/user-tasks-routing.module.ts");
/* harmony import */ var _Pages_user_tasks_user_tasks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Pages/user-tasks/user-tasks.page */ "./src/app/Pages/user-tasks/user-tasks.page.ts");







var UserTasksModule = /** @class */ (function () {
    function UserTasksModule() {
    }
    UserTasksModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _Pages_user_tasks_user_tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserTasksRoutingModule"]
            ],
            declarations: [_Pages_user_tasks_user_tasks_page__WEBPACK_IMPORTED_MODULE_6__["UserTasksPage"]]
        })
    ], UserTasksModule);
    return UserTasksModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-tasks-user-tasks-module.js.map