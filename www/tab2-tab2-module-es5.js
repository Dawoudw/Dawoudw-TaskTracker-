function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tab2/tab2.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tab2/tab2.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--  \r\n<ion-header class=\"ion-no-margin\">\r\n  <ion-toolbar>\r\n    <ion-icon\r\n      name=\"bar-chart-outline\"\r\n      color=\"primary\"\r\n      size=\"large\"\r\n      slot=\"start\"\r\n      style=\"width: 24px !important;height: 24px !important;margin-right: 5px;margin-left: 5px;\"\r\n    ></ion-icon>\r\n    <ion-label slot=\"start\" color=\"primary\"><p> Reports</p> </ion-label>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\" class=\"ion-no-margin;no-padding\">\r\n</ion-content> -->\r\n\r\n<ion-header class=\"ion-no-margin\">\r\n  <ion-toolbar>\r\n    <ion-icon\r\n      name=\"bar-chart-outline\"\r\n      color=\"primary\"\r\n      size=\"large\"\r\n      slot=\"start\"\r\n      style=\"\r\n        width: 22px !important;\r\n        height: 22px !important;\r\n        margin-right: 5px;\r\n        margin-left: 5px;\r\n      \"\r\n    ></ion-icon>\r\n    <ion-label slot=\"start\" color=\"primary\"><p>Reports</p> </ion-label>\r\n \r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid no-padding ion-no-margin>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\" offset-med=\"3\" offset-lg=\"3\">\r\n        <ion-row style=\"justify-items: left;\">\r\n          <ion-col>\r\n            <ion-list>\r\n              <ion-item detail=\"true\" routerLink=\"./1\" >\r\n             \r\n\r\n                <ion-thumbnail slot=\"start\">\r\n                  <ion-img  src =\"../assets/images/color-pie-chart.svg\"></ion-img>\r\n                </ion-thumbnail>\r\n\r\n                <ion-label color=\"primary\" position=\"fixed\"\r\n                  class=\"ion-text-start ion-text-capitalize ion-text-wrap\"\r\n                >\r\n                  <p>Users Progress Pie-Chart</p>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/Pages/tab2/tab2-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/Pages/tab2/tab2-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: Tab2PageRoutingModule */

  /***/
  function srcAppPagesTab2Tab2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function () {
      return Tab2PageRoutingModule;
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


    var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/Pages/tab2/tab2.page.ts");

    var routes = [{
      path: '',
      component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"]
    }, {
      path: ":repid",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | Pages-report-report-module */
        "Pages-report-report-module").then(__webpack_require__.bind(null,
        /*! ../../Pages/report/report.module */
        "./src/app/Pages/report/report.module.ts")).then(function (m) {
          return m.ReportPageModule;
        });
      }
    }];

    var Tab2PageRoutingModule = function Tab2PageRoutingModule() {
      _classCallCheck(this, Tab2PageRoutingModule);
    };

    Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Tab2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pages/tab2/tab2.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/Pages/tab2/tab2.module.ts ***!
    \*******************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppPagesTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
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


    var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/Pages/tab2/tab2.page.ts");
    /* harmony import */


    var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tab2-routing.module */
    "./src/app/Pages/tab2/tab2-routing.module.ts");

    var Tab2PageModule = function Tab2PageModule() {
      _classCallCheck(this, Tab2PageModule);
    };

    Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tab2_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab2PageRoutingModule"]],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/Pages/tab2/tab2.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/Pages/tab2/tab2.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Pages/tab2/tab2.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/Pages/tab2/tab2.page.ts ***!
    \*****************************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppPagesTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Tab2Page = function Tab2Page() {
      _classCallCheck(this, Tab2Page);
    };

    Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/tab2/tab2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/Pages/tab2/tab2.page.scss"))["default"]]
    })], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map