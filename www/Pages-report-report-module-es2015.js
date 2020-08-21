(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-report-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/report/report.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/report/report.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header  translucent =\"false\">\n  <ion-toolbar>\n    <ion-label position=\"fixed\" color=\"primary\">\n      <p\n        style=\"\n          font-size:18px;\n           \n          text-align: center !important;\n        \"\n      >\n        Users Progress Report\n      </p>\n    </ion-label>\n    <ion-buttons slot=\"start\">\n      <ion-back-button\n        text=\"\"\n        routerLink=\"/tasktracker/reports\"\n      ></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content [fullscreen]=\"true\">\n  <div class=\"ion-padding\">\n<label for=\"users\">Choose a User By Name and ID:</label>\n   <ion-select name=\"users\" id=\"users\" [(ngModel)]=\"userId\">\n      <ion-select-option *ngFor=\"let user of userArr\" value=\"{{user.id}}\"\n        >{{user.name}} - {{user.id}}\n      </ion-select-option>\n    </ion-select>\n  </div>\n</ion-content> -->\n\n<ion-content  [fullscreen]=\"true\" calss=\"ion-no-padding ion-no-margin\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"6\" size-md=\"6\" offset-med=\"3\" offset-lg=\"3\">\n        <ion-row style=\"justify-items: left;\">\n          <ion-col>\n            <ion-list>\n              <ion-item detail=\"false\">\n                <ion-label\n                  size=\"small\"\n                  color=\"medium\"\n                  position=\"stacked\"\n                  class=\"ion-text-start ion-text-capitalize ion-text-wrap\"\n                >\n                  Choose a User By Name and ID:\n                </ion-label>\n                <ion-select name=\"users\" id=\"users\" [(ngModel)]=\"userId\">\n                  <ion-select-option\n                    color=\"secondary\"\n                    *ngFor=\"let user of userArr\"\n                    value=\"{{user.id}}\"\n                    >{{user.name}} - {{user.id}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n\n              <ion-item detail=\"false\">\n                <ion-label\n                  size=\"small\"\n                  color=\"medium\"\n                  position=\"stacked\"\n                  class=\"ion-text-start ion-text-capitalize ion-text-wrap\"\n                >\n                  Choose a report date\n                </ion-label>\n\n                <ion-select   calss=\"ion-dark\" color=\"dark\" name=\"dates\" id=\"dates\" [(ngModel)]=\"taskDate\">\n                  <ion-select-option\n                    size=\"samll\"\n                 \n                    *ngFor=\"let date of dateArr\"\n                    value=\"{{date}}\"\n                    >{{date}}</ion-select-option\n                  >\n                </ion-select>\n              </ion-item>\n              <div\n                style=\"\n                  text-align: center !important;\n                  margin-left: 20%;\n                  margin-right: 20%;\n                \"\n              >\n                <ion-button\n                  color=\"primary\"\n                  expand=\"block\"\n                  (click)=\"processData()\"\n                  >Generate Report</ion-button\n                >\n              </div>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-border\" color=\"light\">\n            <div\n              style=\"text-align: center !important;\"\n              id=\"div_pie\"\n              class=\"ion-padding\"\n            ></div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/Pages/report/report-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/report/report-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageRoutingModule", function() { return ReportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.page */ "./src/app/Pages/report/report.page.ts");




const routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_3__["ReportPage"]
    }
];
let ReportPageRoutingModule = class ReportPageRoutingModule {
};
ReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/report/report.module.ts":
/*!***********************************************!*\
  !*** ./src/app/Pages/report/report.module.ts ***!
  \***********************************************/
/*! exports provided: ReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report.page */ "./src/app/Pages/report/report.page.ts");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-routing.module */ "./src/app/Pages/report/report-routing.module.ts");
/* harmony import */ var _Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/tasks.service */ "./src/app/Services/tasks.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









let ReportPageModule = class ReportPageModule {
};
ReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _report_routing_module__WEBPACK_IMPORTED_MODULE_6__["ReportPageRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
        ],
        providers: [
            _Services_tasks_service__WEBPACK_IMPORTED_MODULE_7__["TasksService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]
        ],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_5__["ReportPage"]]
    })
], ReportPageModule);



/***/ }),

/***/ "./src/app/Pages/report/report.page.scss":
/*!***********************************************!*\
  !*** ./src/app/Pages/report/report.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Set the width to the full container and center the content */\nion-select {\n  width: 100%;\n  justify-content: left;\n}\n/* Set the flex in order to size the text width to its content */\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n/* Set the placeholder color and opacity */\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\nion-select::part(placeholder)::first-letter {\n  font-size: small;\n  font-weight: 400;\n}\n/* Set the text color */\nion-select::part(text) {\n  width: 94%;\n}\n/* Set the icon color and opacity */\nion-select::part(icon) {\n  color: #079de2;\n  opacity: 1;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvcmVwb3J0L0Q6XFxXb3JrXFxMVElcXFByb2plY3RzXFxJb25pY1xcVGFza1RyYWNrZXIvc3JjXFxhcHBcXFBhZ2VzXFxyZXBvcnRcXHJlcG9ydC5wYWdlLnNjc3MiLCJzcmMvYXBwL1BhZ2VzL3JlcG9ydC9yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUFBO0FBQ0E7RUFDSSxXQUFBO0VBRUEscUJBQUE7QUNBSjtBREdFLGdFQUFBO0FBQ0E7O0VBRUUsY0FBQTtBQ0FKO0FER0UsMENBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDQUo7QURHRTs7OztFQUFBO0FBS0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURHRSx1QkFBQTtBQUNBO0VBR0EsVUFBQTtBQ0ZGO0FES0UsbUNBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvcmVwb3J0L3JlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgdGhlIHdpZHRoIHRvIHRoZSBmdWxsIGNvbnRhaW5lciBhbmQgY2VudGVyIHRoZSBjb250ZW50ICovXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCB0aGUgZmxleCBpbiBvcmRlciB0byBzaXplIHRoZSB0ZXh0IHdpZHRoIHRvIGl0cyBjb250ZW50ICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlciksXHJcbiAgaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IHRoZSBwbGFjZWhvbGRlciBjb2xvciBhbmQgb3BhY2l0eSAqL1xyXG4gIGlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcclxuICAgIGNvbG9yOiAjMjBhMDhhO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLypcclxuICAgKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcGxhY2Vob2xkZXJcclxuICAgKiBTaGFkb3cgcGFydHMgd29yayB3aXRoIHBzZXVkby1lbGVtZW50cywgdG9vIVxyXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tZWxlbWVudHNcclxuICAgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKTo6Zmlyc3QtbGV0dGVyIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIHRleHQgY29sb3IgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcclxuICAvLyAgY29sb3I6ICMyMzdhZWI7XHJcbiBcclxuICB3aWR0aDogOTQlO1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIGljb24gY29sb3IgYW5kIG9wYWNpdHkgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcclxuICAgIGNvbG9yOiAjMDc5ZGUyO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICBcclxuICB9IiwiLyogU2V0IHRoZSB3aWR0aCB0byB0aGUgZnVsbCBjb250YWluZXIgYW5kIGNlbnRlciB0aGUgY29udGVudCAqL1xuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG5cbi8qIFNldCB0aGUgZmxleCBpbiBvcmRlciB0byBzaXplIHRoZSB0ZXh0IHdpZHRoIHRvIGl0cyBjb250ZW50ICovXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSxcbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICBmbGV4OiAwIDAgYXV0bztcbn1cblxuLyogU2V0IHRoZSBwbGFjZWhvbGRlciBjb2xvciBhbmQgb3BhY2l0eSAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcikge1xuICBjb2xvcjogIzIwYTA4YTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLypcbiAqIFNldCB0aGUgZm9udCBvZiB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBwbGFjZWhvbGRlclxuICogU2hhZG93IHBhcnRzIHdvcmsgd2l0aCBwc2V1ZG8tZWxlbWVudHMsIHRvbyFcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tZWxlbWVudHNcbiAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcik6OmZpcnN0LWxldHRlciB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gIHdpZHRoOiA5NCU7XG59XG5cbi8qIFNldCB0aGUgaWNvbiBjb2xvciBhbmQgb3BhY2l0eSAqL1xuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIGNvbG9yOiAjMDc5ZGUyO1xuICBvcGFjaXR5OiAxO1xuICBmbG9hdDogbGVmdDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Pages/report/report.page.ts":
/*!*********************************************!*\
  !*** ./src/app/Pages/report/report.page.ts ***!
  \*********************************************/
/*! exports provided: ReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPage", function() { return ReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _Services_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/report.service */ "./src/app/Services/report.service.ts");




let ReportPage = class ReportPage {
    constructor(platform, api) {
        this.platform = platform;
        this.api = api;
        //deafult is a working userId and date case, other dates/userId combo may not work due to differing format or lack of data
        this.tasks = new Array(10);
        this.userArr = new Array(0);
        this.userId = "0";
        this.dateArr = new Array(0);
        this.taskDate = "2020-08-14";
        this.api.getUsers().subscribe((data) => {
            this.userArr = data;
        });
        this.api.getTasks().subscribe((data) => {
            for (const t of data) {
                let duplicate = false;
                for (const d of this.dateArr) {
                    if (d == t.taskdate) {
                        duplicate = true;
                        break;
                    }
                }
                if (!duplicate) {
                    this.dateArr.push(t.taskdate);
                }
            }
        });
        this.platform.ready().then(() => {
            google.charts.load("current", { packages: ["corechart"] });
        });
    }
    //helps with async issue
    processData() {
        let self = this;
        this.api
            .getTaskByDateAndId(this.userId, this.taskDate)
            .subscribe((data) => {
            self.tasks = data;
        });
        setTimeout(() => this.DrawPieChart(), 250);
    }
    DrawPieChart() {
        var data = new google.visualization.DataTable();
        let total = 0;
        data.addColumn("string", "Task");
        data.addColumn("number", "Progress");
        //for percent in format "#%" - parseFloat and divide by 100
        for (const t of this.tasks) {
            data.addRows([[t.task, parseFloat(t.progress + '') / 100]]);
            total = total + parseFloat(t.progress + '') / 100;
        }
        if (total < 1) {
            data.addRows([["Pending", 1 - total]]);
        }
        var options = {
            title: "Associate Task Status",
            is3D: true,
            legend: { position: "labeled" },
        };
        var chart = new google.visualization.PieChart(document.getElementById("div_pie"));
        chart.draw(data, options);
    }
};
ReportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _Services_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"] }
];
ReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-report",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./report.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/report/report.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./report.page.scss */ "./src/app/Pages/report/report.page.scss")).default]
    })
], ReportPage);



/***/ })

}]);
//# sourceMappingURL=Pages-report-report-module-es2015.js.map