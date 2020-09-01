(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-subtask-create-subtask-module"],{

/***/ "./src/app/Pages/create-subtask/create-subtask-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Pages/create-subtask/create-subtask-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CreateSubtaskPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubtaskPageRoutingModule", function() { return CreateSubtaskPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _create_subtask_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-subtask.page */ "./src/app/Pages/create-subtask/create-subtask.page.ts");
/* harmony import */ var src_app_Services_activate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/activate.guard */ "./src/app/Services/activate.guard.ts");





var routes = [
    {
        path: '',
        canActivate: [src_app_Services_activate_guard__WEBPACK_IMPORTED_MODULE_4__["ActivateGuard"]],
        component: _create_subtask_page__WEBPACK_IMPORTED_MODULE_3__["CreateSubtaskPage"]
    }
];
var CreateSubtaskPageRoutingModule = /** @class */ (function () {
    function CreateSubtaskPageRoutingModule() {
    }
    CreateSubtaskPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CreateSubtaskPageRoutingModule);
    return CreateSubtaskPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/Pages/create-subtask/create-subtask.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/create-subtask/create-subtask.module.ts ***!
  \***************************************************************/
/*! exports provided: CreateSubtaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubtaskPageModule", function() { return CreateSubtaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm5/ionic-angular.js");
/* harmony import */ var _create_subtask_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-subtask-routing.module */ "./src/app/Pages/create-subtask/create-subtask-routing.module.ts");
/* harmony import */ var _create_subtask_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-subtask.page */ "./src/app/Pages/create-subtask/create-subtask.page.ts");







var CreateSubtaskPageModule = /** @class */ (function () {
    function CreateSubtaskPageModule() {
    }
    CreateSubtaskPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _create_subtask_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateSubtaskPageRoutingModule"]
            ],
            declarations: [_create_subtask_page__WEBPACK_IMPORTED_MODULE_6__["CreateSubtaskPage"]]
        })
    ], CreateSubtaskPageModule);
    return CreateSubtaskPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=create-subtask-create-subtask-module.js.map