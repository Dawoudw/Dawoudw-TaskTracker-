function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-subview-task-subview-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/expandable/expandable.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/expandable/expandable.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsExpandableExpandableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\"   >\n  <ng-content ></ng-content>\n\n  \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/sub-task/sub-task.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/sub-task/sub-task.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSubTaskSubTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-grid [ngClass]=\"{'':!SubTaskObj.expanded , 'ActiveTask':SubTaskObj.expanded}\"  >\n  <ion-row > \n    <ion-col class=\"ion-margin-horizontal\">\n      <ion-list\n \n        class=\"ion-no-margin ion-no-padding\"\n        [(ngModel)]=\"SubTaskObj\"\n        ngDefaultControl\n        name=\"lstobjects\"\n        #lstobjects\n      >\n        <ion-item lines=\"none\"  [ngClass]=\"{'':!SubTaskObj.expanded , 'item-background-color':SubTaskObj.expanded}\">\n          <ion-label\n        \n            class=\"ion-text-start ion-text-capitalize ion-text-wrap\"\n          >\n            <!-- <h3>\n                <b>{{ SubTaskObj.subtask }} </b>\n              </h3> -->\n\n            <ion-text size=\"samll\" slot=\"start\" color=\"secondary\">\n              <i style=\"font-size: smaller;\">\n                {{ SubTaskObj.taskdate | date }}</i\n              >\n            </ion-text>\n            <ion-badge\n              style=\"float: right;\"\n              [color]=\"\n                SubTaskObj.progress > 99\n                  ? 'success'\n                  : SubTaskObj.progress <50\n                  ? 'warning'\n                  : 'primary'\n              \"\n            >\n              {{ SubTaskObj.progress }}%\n            </ion-badge>\n            <ion-label size=\"samll\" class=\"ion-text-start ion-text-capitalize\">\n              <ion-text\n               \n                size=\"samll\"\n                class=\"ion-text-start ion-text-wrap\"\n              >\n                {{ SubTaskObj.details }}\n              </ion-text>\n            </ion-label>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n\n      <!--     \n        <div class=\"ion-padding\">\n          <ion-button expand=\"block\" type=\"submit\" class=\"ion-no-margin\"\n            >Save</ion-button\n          >\n        </div> -->\n    </ion-col>\n  </ion-row>\n</ion-grid>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/task-subview/task-subview.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/task-subview/task-subview.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTaskSubviewTaskSubviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header\n  class=\"ion-no-margin ion-no-padding ion-no-border\"\n  style=\"\n    display: inline-block;\n    padding-bottom: 1px;\n    background: rgb(85, 182, 213);\n    background: linear-gradient(\n      90deg,\n      rgba(85, 182, 213, 0.7959558823529411) 20%,\n      rgba(13, 95, 136, 0.8939950980392157) 50%,\n      rgba(85, 182, 213, 0.804359243697479) 80%\n    );\n    background-size: 100% 1px;\n    background-position: bottom 0 left 0, bottom 1px left 0;\n    background-repeat: no-repeat;\n  \"\n>\n  <ion-toolbar>\n    <ion-item lines=\"full\">\n      <ion-buttons>\n        <ion-button slot=\"start\" (click)=\"back()\">\n          <ion-icon\n            size=\"small\"\n            slot=\"icon-only\"\n            src=\"../assets/images/return-svg.svg\"\n          ></ion-icon>\n        </ion-button>\n      </ion-buttons>\n      <span>\n        Task History\n        <b color=\"primary\" *ngIf=\" subTasks.length>0\">({{subTasks.length}})</b>\n      </span>\n      <ion-buttons *ngIf=\"auth.isLoggedIn()\" slot=\"end\">\n        <ion-button (click)=\"openNewTaskModal()\">\n          <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-label\n        color=\"primary\"\n        class=\"ion-text-start ion-text-capitalize ion-text-wrap\"\n      >\n        <h3><b>{{ loadedTask.task }} </b></h3>\n\n        <ion-text size=\"samll\" slot=\"start\" color=\"secondary\">\n          <i style=\"font-size: smaller;\"> {{loadedTask.taskdate|date}}</i>\n        </ion-text>\n        <ion-badge\n          style=\"float: right;\"\n          [color]=\"\n            loadedTask.progress > 99\n                  ? 'success'\n                  : loadedTask.progress < 50\n                  ? 'warning'\n                  : 'primary'\n              \"\n        >\n          {{ loadedTask.progress}}%\n        </ion-badge>\n        <ion-label size=\"samll\" class=\"ion-text-start ion-text-capitalize\">\n          <ion-text\n            color=\"medium\"\n            size=\"samll\"\n            class=\"ion-text-start ion-text-wrap\"\n          >\n            {{ loadedTask.details}}\n          </ion-text>\n        </ion-label>\n        <!-- <ion-text\n          color=\"secondary\"\n          size=\"samll\"\n          class=\"ion-text-start ion-text-wrap\"\n        >\n          Toatal Sub-Tasks:\n        </ion-text> -->\n      </ion-label>\n    </ion-item>\n  </ion-toolbar>\n</ion-header>\n\n<!-- Card view  -->\n<ion-content class=\"ion-no-margin ion-no-padding\">\n  <!-- <ion-grid class=\"ion-text-left ion-align-items-stretch\">\n    <ion-row>\n      <ion-col\n        size-xs=\"12\"\n        size-xsm=\"12\"\n        size-xs=\"12\"\n        size-med=\"8\"\n        offset-med=\"2\"\n        size-lg=\"6\"\n        offset-lg=\"3\"\n        size-xlg=\"6\"\n        offset-xlg=\"3\"     [ngStyle]=\"{'detail-icon':item.expanded==true? 'chevron-down-outline' : 'chevron-up-outline' }\"\n      > -->\n\n  <ion-card *ngIf=\"subTasks.length>0\">\n    <ion-card-content class=\"ion-no-margin ion-no-padding\">\n      <ion-row *ngFor=\"let item of subTasks\" (click)=\"expandItem(item)\">\n        <ion-col size=\"12\">\n          <ion-item\n            detail=\"true\"\n            lines=\"full\"\n            #lstTasks\n            [color]=\"item.expanded ? 'secondary' : '#'\"\n            [detailIcon]=\"item.expanded ? 'remove' : 'chevron-down-outline'\"\n          >\n            <ion-label\n              size=\"small\"\n              class=\"ion-text-capitalize ion-text-wrap\"\n              color=\"secondary\"\n              [ngClass]=\"{'':!item.expanded,'ActiveTask':item.expanded}\"\n            >\n              <!-- <ion-icon\n                  style=\"float: right;\"\n                  slot=\"icon-only\"\n                  color=\"primary\"\n                  src=\"../assets/images/chevron-forward-outline.svg \"\n                ></ion-icon> -->\n              <span> {{item.subtask}} </span>\n            </ion-label>\n          </ion-item>\n\n          <app-expandable [expanded]=\"item.expanded\" color=\"medium\">\n            <app-sub-task [SubTaskObj]=\"item\"></app-sub-task>\n          </app-expandable>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <div\n    #divMsg\n    style=\"display: none;\"\n    class=\"ion-no-padding ion-margin-top ion-margin-horizontal\"\n  >\n    <ion-chip\n      color=\"danger\"\n      class=\"ion-justify-content-center\"\n      style=\"width: 98%;\"\n    >\n      <ion-label>There is no History entries for this task .</ion-label>\n    </ion-chip>\n  </div>\n  <!-- </ion-col>\n    </ion-row>\n  </ion-grid> -->\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/Components/expandable/expandable.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/Components/expandable/expandable.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsExpandableExpandableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".expand-wrapper {\n  transition: 0.6s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWphc3JhbWFuaS9PdGhlci13ZWJkZXYvaW9uaWMvVGFzay1UcmFja2VyLURldjIwMjAwODI2L3NyYy9hcHAvQ29tcG9uZW50cy9leHBhbmRhYmxlL2V4cGFuZGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0NvbXBvbmVudHMvZXhwYW5kYWJsZS9leHBhbmRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLHdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2V4cGFuZGFibGUvZXhwYW5kYWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmQtd3JhcHBlciB7XG4gICAgdHJhbnNpdGlvbjogIDAuNjBzIGVhc2UtaW4tb3V0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAiLCIuZXhwYW5kLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jb2xsYXBzZWQge1xuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Components/expandable/expandable.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Components/expandable/expandable.component.ts ***!
    \***************************************************************/

  /*! exports provided: ExpandableComponent */

  /***/
  function srcAppComponentsExpandableExpandableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpandableComponent", function () {
      return ExpandableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ExpandableComponent = /*#__PURE__*/function () {
      function ExpandableComponent(renderer) {
        _classCallCheck(this, ExpandableComponent);

        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "auto";
      }

      _createClass(ExpandableComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
        }
      }]);

      return ExpandableComponent;
    }();

    ExpandableComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], ExpandableComponent.prototype, "expandWrapper", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded")], ExpandableComponent.prototype, "expanded", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight")], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-expandable",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./expandable.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/expandable/expandable.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./expandable.component.scss */
      "./src/app/Components/expandable/expandable.component.scss"))["default"]]
    })], ExpandableComponent);
    /***/
  },

  /***/
  "./src/app/Components/sub-task/sub-task.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/Components/sub-task/sub-task.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSubTaskSubTaskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n\n.ActiveTask {\n  background: var(--ion-color-light-tint);\n  color: var(--ion-color-primary);\n}\n\n.item-background-color {\n  color: var(--ion-color-dark-tint);\n  --ion-item-background:var(--ion-color-light-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWphc3JhbWFuaS9PdGhlci13ZWJkZXYvaW9uaWMvVGFzay1UcmFja2VyLURldjIwMjAwODI2L3NyYy9hcHAvQ29tcG9uZW50cy9zdWItdGFzay9zdWItdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9zdWItdGFzay9zdWItdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSx3QkFBQTtBQ0NGOztBRENBO0VBQ0UsdUNBQUE7RUFDQSwrQkFBQTtBQ0VGOztBRENBO0VBQ0UsaUNBQUE7RUFDQyxpREFBQTtBQ0VIIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9zdWItdGFzay9zdWItdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmQtd3JhcHBlciB7XHJcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY29sbGFwc2VkIHtcclxuICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLkFjdGl2ZVRhc2sge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cclxufVxyXG4uaXRlbS1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOnZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTsgIFxyXG59XHJcblxyXG4iLCIuZXhwYW5kLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNvbGxhcHNlZCB7XG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLkFjdGl2ZVRhc2sge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5pdGVtLWJhY2tncm91bmQtY29sb3Ige1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Components/sub-task/sub-task.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Components/sub-task/sub-task.component.ts ***!
    \***********************************************************/

  /*! exports provided: SubTaskComponent */

  /***/
  function srcAppComponentsSubTaskSubTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubTaskComponent", function () {
      return SubTaskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SubTaskComponent = /*#__PURE__*/function () {
      function SubTaskComponent(rendr) {
        _classCallCheck(this, SubTaskComponent);

        this.rendr = rendr;
        this.expanded = false;
        this.expandHeight = "150px";
        this.SubTaskObj = new Object();
      } // ngAfterViewInit() {
      //   this.renderer.setStyle(
      //     this.expandWrapper.nativeElement,
      //     "max-height",
      //     this.expandHeight
      //   );
      // }


      _createClass(SubTaskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SubTaskComponent;
    }();

    SubTaskComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], SubTaskComponent.prototype, "expandWrapper", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded")], SubTaskComponent.prototype, "expanded", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight")], SubTaskComponent.prototype, "expandHeight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("SubTaskObj")], SubTaskComponent.prototype, "SubTaskObj", void 0);
    SubTaskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sub-task",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sub-task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/sub-task/sub-task.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sub-task.component.scss */
      "./src/app/Components/sub-task/sub-task.component.scss"))["default"]]
    })], SubTaskComponent);
    /***/
  },

  /***/
  "./src/app/Pages/task-subview/task-subview-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/Pages/task-subview/task-subview-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: TaskSubviewPageRoutingModule */

  /***/
  function srcAppPagesTaskSubviewTaskSubviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskSubviewPageRoutingModule", function () {
      return TaskSubviewPageRoutingModule;
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


    var _task_subview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./task-subview.page */
    "./src/app/Pages/task-subview/task-subview.page.ts");

    var routes = [{
      path: '',
      component: _task_subview_page__WEBPACK_IMPORTED_MODULE_3__["TaskSubviewPage"]
    }];

    var TaskSubviewPageRoutingModule = function TaskSubviewPageRoutingModule() {
      _classCallCheck(this, TaskSubviewPageRoutingModule);
    };

    TaskSubviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TaskSubviewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/Pages/task-subview/task-subview.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Pages/task-subview/task-subview.module.ts ***!
    \***********************************************************/

  /*! exports provided: TaskSubviewPageModule */

  /***/
  function srcAppPagesTaskSubviewTaskSubviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskSubviewPageModule", function () {
      return TaskSubviewPageModule;
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


    var _task_subview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./task-subview-routing.module */
    "./src/app/Pages/task-subview/task-subview-routing.module.ts");
    /* harmony import */


    var _task_subview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./task-subview.page */
    "./src/app/Pages/task-subview/task-subview.page.ts");
    /* harmony import */


    var src_app_Components_sub_task_sub_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/Components/sub-task/sub-task.component */
    "./src/app/Components/sub-task/sub-task.component.ts");
    /* harmony import */


    var src_app_Components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/Components/expandable/expandable.component */
    "./src/app/Components/expandable/expandable.component.ts");

    var TaskSubviewPageModule = function TaskSubviewPageModule() {
      _classCallCheck(this, TaskSubviewPageModule);
    };

    TaskSubviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _task_subview_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskSubviewPageRoutingModule"]],
      declarations: [_task_subview_page__WEBPACK_IMPORTED_MODULE_6__["TaskSubviewPage"], src_app_Components_sub_task_sub_task_component__WEBPACK_IMPORTED_MODULE_7__["SubTaskComponent"], src_app_Components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_8__["ExpandableComponent"]]
    })], TaskSubviewPageModule);
    /***/
  },

  /***/
  "./src/app/Pages/task-subview/task-subview.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/Pages/task-subview/task-subview.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTaskSubviewTaskSubviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ActiveTask {\n  color: var(--ion-color-dark);\n}\n\n.item-background-color {\n  --ion-item-background: var(--ion-color-secondary-tint);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWphc3JhbWFuaS9PdGhlci13ZWJkZXYvaW9uaWMvVGFzay1UcmFja2VyLURldjIwMjAwODI2L3NyYy9hcHAvUGFnZXMvdGFzay1zdWJ2aWV3L3Rhc2stc3Vidmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL3Rhc2stc3Vidmlldy90YXNrLXN1YnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsNEJBQUE7QUNBRjs7QURJQTtFQUNFLHNEQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy90YXNrLXN1YnZpZXcvdGFzay1zdWJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5BY3RpdmVUYXNrIHtcclxuICAvL2JhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG5cclxufVxyXG5cclxuLml0ZW0tYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xyXG4gXHJcbn1cclxuLy8gIC5pdGVtLWRldGFpbC1pY29uIHtcclxuLy8gICAtLWl0ZW0tZGV0YWlsLWljb246ICB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbi8vICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4vLyAgICAtLWl0ZW0tZGV0YWlsLWljb246IFwiY2hldnJvbi1kb3duLW91dGxpbmVcIjtcclxuLy8gICAgIG9wYWNpdHk6IDkwJTtcclxuLy8gICAgIGJvcmRlci1jb2xvcjogeWVsbG93OztcclxuLy8gfSIsIi5BY3RpdmVUYXNrIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLml0ZW0tYmFja2dyb3VuZC1jb2xvciB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS10aW50KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Pages/task-subview/task-subview.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Pages/task-subview/task-subview.page.ts ***!
    \*********************************************************/

  /*! exports provided: TaskSubviewPage */

  /***/
  function srcAppPagesTaskSubviewTaskSubviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskSubviewPage", function () {
      return TaskSubviewPage;
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
    /* harmony import */


    var _create_subtask_create_subtask_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../create-subtask/create-subtask.page */
    "./src/app/Pages/create-subtask/create-subtask.page.ts");
    /* harmony import */


    var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/Services/authService.service */
    "./src/app/Services/authService.service.ts");

    var TaskSubviewPage = /*#__PURE__*/function () {
      function TaskSubviewPage(route, navCtrl, tasksService, alCtr, navCtr, modalCtrl, renderFctry, auth) {
        _classCallCheck(this, TaskSubviewPage);

        this.route = route;
        this.navCtrl = navCtrl;
        this.tasksService = tasksService;
        this.alCtr = alCtr;
        this.navCtr = navCtr;
        this.modalCtrl = modalCtrl;
        this.renderFctry = renderFctry;
        this.auth = auth;
        this.loadedTask = Object.create(_Models_task__WEBPACK_IMPORTED_MODULE_2__["Task"]); // Variable need to be initialized!!!

        this.subTasks = new Array();
        this.rendr = renderFctry.createRenderer(null, null);
      }

      _createClass(TaskSubviewPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadData();
        }
      }, {
        key: "loadData",
        value: function loadData() {
          var _this = this;

          this.route.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has("taskid")) {
              _this.navCtrl.navigateBack("/tasktracker/teamprogress");

              return;
            }

            _this.taskSub = _this.tasksService.getTask(paramMap.get("taskid")).subscribe(function (task) {
              console.log("Subscripting: ", task);
              _this.loadedTask = task;
              _this.loadedTask.progress = _this.parsPercentage(task.progress);
              console.log("This.loadedTask.id = ", _this.loadedTask.id);

              _this.getSubTasks(task.id).then(function (res) {
                // res[0].expanded=true;
                _this.subTasks = res;

                _this.subTasks.map(function (item) {
                  item.expanded = false;
                });

                if (_this.subTasks.length < 1) {
                  _this.divMsg.nativeElement.style.display = "block";
                } else {
                  _this.divMsg.nativeElement.style.display = "none";
                  _this.subTasks[0].expanded = true;
                }

                console.log("   this.subTasks .expanded= ; ", _this.subTasks);
              });
            });
          });
        }
      }, {
        key: "getSubTasks",
        value: function getSubTasks(taskid) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var subtasklist;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.tasksService.getSubTasks(taskid).then(function (res) {
                      console.log(" getSubTasks(taskid): Promise<SubTask[]>", res);
                      return res.sort(function (a, b) {
                        return Date.parse(b.taskdate) - Date.parse(a.taskdate);
                      }); // order by date DESC;
                    });

                  case 2:
                    subtasklist = _context.sent;
                    return _context.abrupt("return", subtasklist);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.back();
        }
      }, {
        key: "parsPercentage",
        value: function parsPercentage(val) {
          // let progress = (parseFloat(val) > 1
          //   ? parseFloat(val)
          //   : parseFloat(val) * 100
          // ).toFixed(0);
          return Number((parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100).toFixed(0));
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
      }, {
        key: "openNewTaskModal",
        value: function openNewTaskModal() {
          var _this2 = this;

          if (this.auth.isLoggedIn()) {
            this.modalCtrl.create({
              component: _create_subtask_create_subtask_page__WEBPACK_IMPORTED_MODULE_6__["CreateSubtaskPage"],
              componentProps: {
                task: this.loadedTask
              }
            }).then(function (modalElement) {
              modalElement.present();
              return modalElement.onDidDismiss();
            }).then(function (resultData) {
              console.log("ResultData: ", resultData);

              _this2.loadData();
            });
          } else return false;
        }
      }, {
        key: "expandItem",
        value: function expandItem(item) {
          this.subTasks.map(function (listItem) {
            if (item == listItem) {
              listItem.expanded = !listItem.expanded;
            } else {
              listItem.expanded = false;
            } // if (!listItem) {
            //   this.rendr.setAttribute(
            //     this.lstTasks.nativeElement,
            //     "detailIcon",
            //     "chevron-down-outline"
            //   );
            // }


            return listItem;
          });
        }
      }]);

      return TaskSubviewPage;
    }();

    TaskSubviewPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_5__["TasksService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"]
      }, {
        type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("divMsg")], TaskSubviewPage.prototype, "divMsg", void 0);
    TaskSubviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-task-subview",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./task-subview.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/task-subview/task-subview.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./task-subview.page.scss */
      "./src/app/Pages/task-subview/task-subview.page.scss"))["default"]]
    })], TaskSubviewPage);
    /***/
  }
}]);
//# sourceMappingURL=task-subview-task-subview-module-es5.js.map