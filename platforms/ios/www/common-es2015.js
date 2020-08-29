(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-0d5784f9.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-44bf8136.js */ "./node_modules/@ionic/core/dist/esm/index-44bf8136.js");
/* harmony import */ var _index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-eea61379.js */ "./node_modules/@ionic/core/dist/esm/index-eea61379.js");
/* harmony import */ var _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-7b8ba70a.js */ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js");




const createButtonActiveGesture = (el, isButton) => {
    let currentTouchedButton;
    let initialTouchedButton;
    const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
        if (typeof document === 'undefined') {
            return;
        }
        const target = document.elementFromPoint(x, y);
        if (!target || !isButton(target)) {
            clearActiveButton();
            return;
        }
        if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
        }
    };
    const setActiveButton = (button, hapticFeedbackFn) => {
        currentTouchedButton = button;
        if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
        hapticFeedbackFn();
    };
    const clearActiveButton = (dispatchClick = false) => {
        if (!currentTouchedButton) {
            return;
        }
        const buttonToModify = currentTouchedButton;
        Object(_index_44bf8136_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
        /**
         * Clicking on one button, but releasing on another button
         * does not dispatch a click event in browsers, so we
         * need to do it manually here. Some browsers will
         * dispatch a click if clicking on one button, dragging over
         * another button, and releasing on the original button. In that
         * case, we need to make sure we do not cause a double click there.
         */
        if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
        }
        currentTouchedButton = undefined;
    };
    return Object(_index_eea61379_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
        el,
        gestureName: 'buttonActiveDrag',
        threshold: 0,
        onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
        onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
        onEnd: () => {
            clearActiveButton(true);
            Object(_haptic_7b8ba70a_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
            initialTouchedButton = undefined;
        }
    });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-7b8ba70a.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
    getEngine() {
        const win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available() {
        return !!this.getEngine();
    },
    isCordova() {
        return !!window.TapticEngine;
    },
    isCapacitor() {
        const win = window;
        return !!win.Capacitor;
    },
    impact(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style });
    },
    notification(options) {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style });
    },
    selection() {
        this.impact({ style: 'light' });
    },
    selectionStart() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd() {
        const engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
    HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction, animation);
        }
    }
    return false;
};




/***/ }),

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
class SubTask {
    constructor(taskid, id, taskdate, details, subtask, progress) {
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
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/tasks.service */ "./src/app/Services/tasks.service.ts");
/* harmony import */ var src_app_Models_sub_task__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Models/sub-task */ "./src/app/Models/sub-task.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/authService.service */ "./src/app/Services/authService.service.ts");








let CreateSubtaskPage = class CreateSubtaskPage {
    constructor(modalCtrl, tasksService, // private formBuilder: FormBuilder
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
    ngOnDestroy() {
    }
    ngOnInit() {
        console.log(`${this.task.id}`);
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
    }
    onCancel() {
        this.modalCtrl.dismiss(null, "cancel");
    }
    onCreateTask() {
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
    }
    createSubTask() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.form.valid && this.task) {
                this.subTask.taskid = this.task.id;
                this.subTask.taskdate = this.form.value.taskdate;
                this.subTask.details = this.form.value.description;
                this.subTask.subtask = this.form.value.title;
                this.subTask.progress = this.form.value.progress;
                console.log(this.subTask);
                if (this.form.value.title) {
                    yield this.tasksService
                        .addSubTask(this.subTask.id, this.subTask)
                        .then((result) => {
                        console.log("createSubTask() result ", result);
                    })
                        .catch((er) => {
                        console.log(er);
                    })
                        .finally(() => {
                        this.form.reset();
                        this.modalCtrl.dismiss(null, "task created");
                    });
                }
            }
            else {
                console.log("There were undefined fields when creating a subtask");
            }
        });
    }
};
CreateSubtaskPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_Services_tasks_service__WEBPACK_IMPORTED_MODULE_4__["TasksService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
CreateSubtaskPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-create-subtask",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-subtask.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/create-subtask/create-subtask.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-subtask.page.scss */ "./src/app/Pages/create-subtask/create-subtask.page.scss")).default]
    })
], CreateSubtaskPage);



/***/ }),

/***/ "./src/app/Services/activate.guard.ts":
/*!********************************************!*\
  !*** ./src/app/Services/activate.guard.ts ***!
  \********************************************/
/*! exports provided: ActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateGuard", function() { return ActivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authService_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authService.service */ "./src/app/Services/authService.service.ts");



let ActivateGuard = class ActivateGuard {
    constructor(authServ) {
        this.authServ = authServ;
    }
    canActivate(next, state) {
        if (this.authServ.isLoggedIn())
            return true;
        else {
            this.authServ.redirectToLogin();
            return false;
        }
    }
};
ActivateGuard.ctorParameters = () => [
    { type: _authService_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ActivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ActivateGuard);



/***/ }),

/***/ "./src/app/Services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/users.service */ "./src/app/Services/users.service.ts");
/* harmony import */ var src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/authService.service */ "./src/app/Services/authService.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);







// import { firebase } from '@firebase/app';

let ChatService = class ChatService {
    constructor(usrServ, auth, db, storage) {
        this.usrServ = usrServ;
        this.auth = auth;
        this.db = db;
        this.storage = storage;
        this.usersList = this.usrServ.usersList;
        this.currentUser = this.auth.getLoggedUser();
        this.listOfGroups = [];
        this.currentUserIdFromFirebaseSetFromHomePage = '';
        this.currentUserIdFromFireabase = JSON.parse(localStorage.getItem("clientIdFirebase"));
    }
    fromChatService() {
        console.log("fromChatService");
        console.log(this.usersList);
        this.usrServ.usersList.forEach(user => {
            console.log("user");
            console.log(user['email']);
        });
    }
    getAllUsers() {
        return this.db.collection('usersTaskTracker').snapshotChanges();
    }
    // getAllGroups(){
    //   console.log("in getAllGroups");
    //   console.log(this.currentUser.email);
    //   console.log("current user's id from firebase ="+this.currentUserIdFromFirebase);
    //   let currentUserIdFromFirebase = '';
    //   let userObservable = this.findUser(this.currentUser.email);
    //   forkJoin(userObservable).subscribe(res => {
    //     for (let data of res) {
    //       if (data.length > 0) {
    //         // console.log("found an existing user with this user id ="+data[0].id);
    //         currentUserIdFromFirebase = data[0].id;
    //         console.log("currentUserIdFromFirebase");
    //         console.log(currentUserIdFromFirebase);
    //         // this.groupId = data[0].id;
    //         // this.router.navigateByUrl(`/chat/${this.groupId}`);
    //       }
    //     }
    //   });
    //   console.log("before error");
    //   // setTimeout(() => {
    //     console.log(currentUserIdFromFirebase);
    //     return this.db.collection(`usersTaskTracker/${currentUserIdFromFirebase}/groups`).snapshotChanges();
    //   // }, 2000);
    // }
    getCurrentUser() {
        console.log("currentUser =" + this.currentUser);
        console.log("current user's email =" + this.currentUser.email);
        console.log("firebase id for this user");
    }
    // checkOrCreateUserInFirebase() {
    //   //for checking if users exists in firebase collection "usersTaskTracker"
    //   //if a user is found, then load groups for group chat for that user
    //   let userObservable = this.findUser(this.currentUser.email);
    //   forkJoin(userObservable).subscribe(res => {
    //     for (let data of res) {
    //       if (data.length > 0) {
    //         // console.log("found an existing user with this user id ="+data[0].id);
    //         this.currentUserIdFromFirebase = data[0].id;
    //         // this.groupId = data[0].id;
    //         // this.router.navigateByUrl(`/chat/${this.groupId}`);
    //         //getting list of groups
    //         this.listOfGroups = [];
    //         this.getAllGroups(this.currentUserIdFromFirebase)
    //           .subscribe(result => {
    //             result.forEach(r => {
    //               if(r.payload.doc.data()['type'] == 'group') {
    //                 console.log("id of these groups =");
    //                 console.log(r.payload.doc.id);
    //                 this.listOfGroups.push(r);
    //               }
    //             });   
    //         });      
    //       }
    //       else {
    //         //User not found in firebase collection "usersTaskTracker"--creating the user
    //         console.log("user not found in firebase--in create user section");
    //         this.db.collection('usersTaskTracker').add({
    //           email: this.currentUser.email,
    //           userId: this.currentUser.userId,
    //           userName: this.currentUser.userName,
    //           avatar: this.currentUser.avatar
    //         });
    //       }
    //     }
    //   });
    // }
    findUser(email) {
        let user = this.db.collection('usersTaskTracker', ref => ref.where('email', '==', email)).valueChanges({ idField: 'id' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
        return user;
    }
    // getAllGroups(id){
    //   console.log("id received ==="+id);
    //   return this.db.collection(`usersTaskTracker/${id}/groups`).snapshotChanges();
    // }
    getAllGroups2() {
        return this.db.collection(`usersTaskTracker/${this.currentUserIdFromFireabase}/groups`).snapshotChanges();
    }
    createGroup(title, users) {
        let current = {
            email: this.currentUser.email,
            id: this.currentUserIdFromFireabase,
            userName: this.currentUser.userName
        };
        // console.log("additional user(s) is/are: ");
        // console.log(users);
        let allUsers = [current];
        allUsers.push(...users);
        // console.log("allUsers for group chat");
        // console.log(allUsers);
        return this.db.collection('groupsTaskTracker').add({
            title: title,
            type: 'group',
            users: allUsers
        }).then(res => {
            let promises = [];
            for (let usr of allUsers) {
                console.log("usr");
                console.log(usr);
                console.log("usr.id");
                console.log(usr.id);
                console.log("res.id");
                console.log(res.id);
                let oneAdd = this.db.collection(`usersTaskTracker/${usr.id}/groups`).add({
                    id: res.id,
                    title: title,
                    users: allUsers.length,
                    type: 'group'
                });
                promises.push(oneAdd);
            }
            return Promise.all(promises);
        });
    }
    findGroupById(id) {
        let group = this.db.doc(`groupsTaskTracker/${id}`).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
        return group;
    }
    getOneGroup(id, user_group_key = null) {
        // console.log("firebase created current user's id");
        // console.log(this.auth.currentUserId);
        return this.db.doc(`groupsTaskTracker/${id}`).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(changes => {
            let count = 0;
            const data = changes.payload.data();
            this.db.collection(`groupsTaskTracker/${id}/messages`).snapshotChanges().
                forEach(result => {
                result.forEach(r => {
                    // console.log("r ="+r);
                    //Get firebase created id of each messsage: r.payload.doc.id
                    const mId = r.payload.doc.id;
                    const uId = r.payload.doc.data()['from'];
                    // setTimeout(() => {
                    //   // console.log("mId ="+mId);
                    // }, 1000);
                    if ((r.payload.doc.data()['readFlag'] == false) && (uId != this.currentUserIdFromFireabase)) {
                        count = count + 1;
                    }
                });
            });
            const group_id = changes.payload.id;
            // console.log("count");
            // console.log(count);
            return Object.assign({ user_group_key, id: group_id }, data);
        }));
    }
    getChatMessages(groupId) {
        let count = 0;
        return this.db.collection(`groupsTaskTracker/${groupId}/messages`, ref => ref.orderBy('createdAt')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    addChatMessage(msg, chatId) {
        return this.db.collection('groupsTaskTracker/' + chatId + '/messages').add({
            msg: msg,
            from: this.currentUserIdFromFireabase,
            readFlag: false,
            unreadCount: 0,
            createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.serverTimestamp()
        });
    }
    addFileMessage(file, chatId) {
        let newName = `${new Date().getTime()}-${this.currentUserIdFromFireabase}.png`;
        let storageRef = this.storage.ref(`/files/${chatId}/${newName}`);
        return {
            task: storageRef.putString(file, 'base64', { contentType: 'image/png' }),
            ref: storageRef
        };
    }
    saveFileMessage(filepath, chatId) {
        return this.db.collection('groupsTaskTracker/' + chatId + '/messages').add({
            file: filepath,
            from: this.currentUserIdFromFireabase,
            createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.serverTimestamp()
        });
    }
};
ChatService.ctorParameters = () => [
    { type: src_app_Services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: src_app_Services_authService_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] }
];
ChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ChatService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map