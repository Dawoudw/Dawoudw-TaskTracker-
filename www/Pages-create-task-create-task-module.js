(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-create-task-create-task-module"],{

/***/ "./src/app/Pages/create-task/create-task-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Pages/create-task/create-task-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CreateTaskPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskPageRoutingModule", function() { return CreateTaskPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _create_task_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-task.page */ "./src/app/Pages/create-task/create-task.page.ts");
/* harmony import */ var src_app_Services_activate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/activate.guard */ "./src/app/Services/activate.guard.ts");





var routes = [
    {
        path: '',
        canActivate: [src_app_Services_activate_guard__WEBPACK_IMPORTED_MODULE_4__["ActivateGuard"]],
        component: _create_task_page__WEBPACK_IMPORTED_MODULE_3__["CreateTaskPage"]
    }
];
var CreateTaskPageRoutingModule = /** @class */ (function () {
    function CreateTaskPageRoutingModule() {
    }
    CreateTaskPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CreateTaskPageRoutingModule);
    return CreateTaskPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/Pages/create-task/create-task.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/Pages/create-task/create-task.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateTaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskPageModule", function() { return CreateTaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _create_task_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-task-routing.module */ "./src/app/Pages/create-task/create-task-routing.module.ts");
/* harmony import */ var _create_task_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-task.page */ "./src/app/Pages/create-task/create-task.page.ts");







var CreateTaskPageModule = /** @class */ (function () {
    function CreateTaskPageModule() {
    }
    CreateTaskPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _create_task_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateTaskPageRoutingModule"]
            ],
            declarations: [_create_task_page__WEBPACK_IMPORTED_MODULE_6__["CreateTaskPage"]]
        })
    ], CreateTaskPageModule);
    return CreateTaskPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=Pages-create-task-create-task-module.js.map