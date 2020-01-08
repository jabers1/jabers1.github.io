(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dummy/dummy.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dummy/dummy.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showme\">\n    <p>\n        ng if directives\n    </p>\n</div>\n<div [hidden]=\"showme\">\n    <p>\n        hidden directive\n    </p>\n</div>\n<div [ngClass]=\"{'hai':true}\">\n    <p>\n        ngclass\n    </p>\n</div>\n<div [ngStyle]=\"{'color':showme?'red':'yellow'}\">\n    <p>\n        ngstyle\n    </p>\n</div>\n<div *ngFor=\"let each of data;index as i\">\n    <p>\n        {{each}}\n       \n    </p>\n</div>\n<button (click)=\"change()\">changeme</button>\n<button (click)=\"pushit()\">push</button>\n<button (click)=\"popit()\">pop</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employeelist/employeelist.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employeelist/employeelist.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"employeelist\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <img src=\"../../assets/dummy.jpg\">\n            <div>\n            <button routerLink=\"/emplpoyer\">back</button>\n            </div>\n        </div>\n        <div class=\"col-md-8\">\n            <div class=\"employeelist1\">\n                <table class=\"table table-hover\">\n                    <tr>\n                        <th>Name</th>\n                        <td>{{employee.Name}}</td>\n                    </tr>\n                    <tr>\n                        <th>Age</th>\n                        <td>{{employee.Age}}</td>\n                    </tr>\n                    <tr>\n                        <th>Email</th>\n                        <td>{{employee.Email}}</td>\n                    </tr>\n                    <tr>\n                        <th>Street</th>\n                        <td>{{employee.Street}}</td>\n                    </tr>\n                    <tr>\n                        <th>City</th>\n                        <td>{{employee.City}}</td>\n                    </tr>\n                    <tr>\n                        <th>Zip</th>\n                        <td>{{employee.Zip}}</td>\n                    </tr>\n                    <tr>\n                        <th>Region</th>\n                        <td>{{employee.Region}}</td>\n                    </tr>\n                    <tr>\n                        <th>Country</th>\n                        <td>{{employee.Country}}</td>\n                    </tr>\n                    <tr>\n                        <th>Info</th>\n                        <td>{{employee.Info}}</td>\n                    </tr>\n                    <tr>\n                        <th>EmployeeID</th>\n                        <td>{{employee.EmployeeID</td>\n                    </tr>\n                    <tr>\n                        <th> DateOfJoining</th>\n                        <td>{{employee.DateOfJoining}}</td>\n                    </tr>\n                    <tr>\n                        <th>PhoneNumber</th>\n                        <td>{{employee.PhoneNumber}}</td>\n                    </tr>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/emplpoyer/emplpoyer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/emplpoyer/emplpoyer.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"employer\" *ngFor=\"let data of employeeList;index as i\">\n    <img src=\"../../assets/dummy.jpg\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n            <h3>{{data.Name}}</h3>\n            <h3>{{data.EmployeeID}}\n            </h3>\n        </div>\n        <div class=\"col-md-4\" style=\"padding: 0px;\">\n            <button class=\"btn btn-danger\" (click)=\"ok(i)\">value</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar-expand-lg navbar-dark bg-dark\">\n    <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" href=\"#\">home</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">contactus</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">about</a>\n        </li>\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/emplpoyer\">employer</a>\n        </li>\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/dummy\">dummy</a>\n        </li>\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/login\">login</a>\n        </li>\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/sign\">signup</a>\n        </li>\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/employeelist\">employeelist</a>\n\n        </li>\n        <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/notfound\">notfound</a>\n\n        </li>\n    </ul>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #f=\"ngForm\">\n    <div *ngIf=\"f.touched\">\n        <p>\n            form is touched\n        </p>\n    </div>\n    <div *ngIf=\"f.controls.username?.touched\">\n        <p>\n            controls is touched\n        </p>\n    </div>\n    <div id=\"loginPage\">\n        <div class=\"form-group\">\n            <label>username</label>\n            <small style=\"color:red\" *ngIf=\"f.controls.username?.touched && f.controls.username?.errors?.required\">\n                username is required\n            </small>\n            <small style=\"color:red\" *ngIf=\"f.controls.username?.touched && f.controls.username?.errors?.minlength\">\n                minlength is 2 but {{f.controls.username.errors.minlength.actualLength}}\n            </small>\n            <input type=\"text\" ngModel name=\"username\" class=\"form-control1\" [value]=\"hai\" required minlength=\"2\"\n                maxlength=\"4\">\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" ngModel name=\"pass\" required minlength=\"5\" class=\"form-control1\">\n            <small style=\"color:red\" *ngIf=\"f.controls.pass?.touched && f.controls.pass?.errors?.minlength\">\n                minlength is 5 but{{f.controls.pass.errors.minlength.actualLength}}\n            </small>\n            <small style=\"color:red\" *ngIf=\"f.controls.pass?.touched && f.controls.pass?.errors?.required\">\n                password is required\n            </small>\n        </div>\n        <div class=\"form-group\">\n            <input type=\"button\" class=\"btn btn-danger\" (click)=\"login(f)\" value=\"login\" />\n        </div>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login1/login1.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login1/login1.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<label>username\n</label>\n<input type=\"text\"><br>\n<button>submit</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>notfound works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form id=\"signUp\" [formGroup]=\"signupform\">\n    <div class=\"form-group\">\n        <label>username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form\">\n    </div>\n    <div class=\"form-group\">\n        <label>password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form\">\n    </div>\n    <div class=\"form-group\">\n        <label>age</label>\n        <input type=\"text\" formControlName=\"age\" class=\"form\">\n    </div>\n    <div class=\"form-group\">\n        <button class=\"btn btn-danger\" (click)=\"sent()\">signup</button>\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _emplpoyer_emplpoyer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emplpoyer/emplpoyer.component */ "./src/app/emplpoyer/emplpoyer.component.ts");
/* harmony import */ var _dummy_dummy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dummy/dummy.component */ "./src/app/dummy/dummy.component.ts");
/* harmony import */ var _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employeelist/employeelist.component */ "./src/app/employeelist/employeelist.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");








// import { NotfoundComponent}from './NotfoundComponent/notfound.component'

const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'sign', component: _sign_sign_component__WEBPACK_IMPORTED_MODULE_4__["SignComponent"] },
    { path: 'emplpoyer', component: _emplpoyer_emplpoyer_component__WEBPACK_IMPORTED_MODULE_5__["EmplpoyerComponent"] },
    { path: 'dummy', component: _dummy_dummy_component__WEBPACK_IMPORTED_MODULE_6__["DummyComponent"] },
    { path: 'employeelist', component: _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_7__["EmployeelistComponent"] },
    { path: 'notfound', component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_8__["NotfoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'sample';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_sign_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign/sign.component */ "./src/app/sign/sign.component.ts");
/* harmony import */ var _login1_login1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login1/login1.component */ "./src/app/login1/login1.component.ts");
/* harmony import */ var _emplpoyer_emplpoyer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emplpoyer/emplpoyer.component */ "./src/app/emplpoyer/emplpoyer.component.ts");
/* harmony import */ var _dummy_dummy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dummy/dummy.component */ "./src/app/dummy/dummy.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employeelist/employeelist.component */ "./src/app/employeelist/employeelist.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _sign_sign_component__WEBPACK_IMPORTED_MODULE_7__["SignComponent"],
            _login1_login1_component__WEBPACK_IMPORTED_MODULE_8__["Login1Component"],
            _emplpoyer_emplpoyer_component__WEBPACK_IMPORTED_MODULE_9__["EmplpoyerComponent"],
            _dummy_dummy_component__WEBPACK_IMPORTED_MODULE_10__["DummyComponent"],
            _employeelist_employeelist_component__WEBPACK_IMPORTED_MODULE_12__["EmployeelistComponent"],
            _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dummy/dummy.component.css":
/*!*******************************************!*\
  !*** ./src/app/dummy/dummy.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".hai\r\n{\r\n    color:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHVtbXkvZHVtbXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9kdW1teS9kdW1teS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhaVxyXG57XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dummy/dummy.component.ts":
/*!******************************************!*\
  !*** ./src/app/dummy/dummy.component.ts ***!
  \******************************************/
/*! exports provided: DummyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyComponent", function() { return DummyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DummyComponent = class DummyComponent {
    constructor() {
        this.showme = false;
        this.data = [1, 5, 7, 9];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        console.log('i am destroyed');
    }
    change() {
        this.showme = !this.showme;
    }
    pushit() {
        this.data.push(6);
    }
    popit() {
        this.data.splice(1, 1);
    }
};
DummyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dummy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dummy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dummy/dummy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dummy.component.css */ "./src/app/dummy/dummy.component.css")).default]
    })
], DummyComponent);



/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmployeeService = class EmployeeService {
    constructor() {
        // employeelist=
        this.employeeList = [
            {
                "Name": "Aurora",
                "Age": 53,
                "Email": "ante.blandit@disparturient.ca",
                "Street": "493 Iaculis Rd.",
                "City": "Lewiston",
                "Zip": "42591-180",
                "Region": "Maine",
                "Country": "Sudan",
                "Info": "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia",
                "EmployeeID": 101,
                "DateOfJoining": "10/06/2019",
                "PhoneNumber": "1628101902299"
            },
            {
                "Name": "Ila",
                "Age": 37,
                "Email": "Sed.et@purus.edu",
                "Street": "823 Varius Ave",
                "City": "Beaumaris",
                "Zip": "55970-446",
                "Region": "Anglesey",
                "Country": "Saint Helena, Ascension and Tristan da Cunha",
                "Info": "pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien,",
                "EmployeeID": 102,
                "DateOfJoining": "26/05/2019",
                "PhoneNumber": "1686011935499"
            },
            {
                "Name": "Rose",
                "Age": 26,
                "Email": "Suspendisse.commodo@tristiquepharetraQuisque.co.uk",
                "Street": "P.O. Box 376, 1901 Justo Rd.",
                "City": "Vienna",
                "Zip": "82720",
                "Region": "Vienna",
                "Country": "Jersey",
                "Info": "ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit",
                "EmployeeID": 103,
                "DateOfJoining": "21/09/2018",
                "PhoneNumber": "1650033077399"
            },
            {
                "Name": "Neville",
                "Age": 21,
                "Email": "est@tinciduntnibh.edu",
                "Street": "3855 Lacinia Ave",
                "City": "Ukkel",
                "Zip": "60407",
                "Region": "Brussels Hoofdstedelijk Gewest",
                "Country": "Norway",
                "Info": "et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus",
                "EmployeeID": 104,
                "DateOfJoining": "13/11/2017",
                "PhoneNumber": "1652020117199"
            },
            {
                "Name": "Mira",
                "Age": 28,
                "Email": "dui@cursuseteros.org",
                "Street": "P.O. Box 156, 4690 Sollicitudin Ave",
                "City": "Dublin",
                "Zip": "E1Y 9C5",
                "Region": "Leinster",
                "Country": "Virgin Islands, British",
                "Info": "sem mollis dui, in sodales elit erat vitae risus. Duis",
                "EmployeeID": 105,
                "DateOfJoining": "08/10/2017",
                "PhoneNumber": "1693030708899"
            },
            {
                "Name": "Megan",
                "Age": 40,
                "Email": "felis.adipiscing@nequesed.com",
                "Street": "2618 Risus. Ave",
                "City": "Salon-de-Provence",
                "Zip": "03901",
                "Region": "PR",
                "Country": "Zimbabwe",
                "Info": "sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis",
                "EmployeeID": 106,
                "DateOfJoining": "14/03/2018",
                "PhoneNumber": "1615091544599"
            },
            {
                "Name": "Austin",
                "Age": 53,
                "Email": "rutrum.eu@velitegestaslacinia.net",
                "Street": "Ap #863-6907 Vel, Rd.",
                "City": "Kapolei",
                "Zip": "82-129",
                "Region": "Hawaii",
                "Country": "Bhutan",
                "Info": "mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor",
                "EmployeeID": 107,
                "DateOfJoining": "10/02/2019",
                "PhoneNumber": "1676120251599"
            },
            {
                "Name": "Shea",
                "Age": 56,
                "Email": "at.velit.Pellentesque@felisadipiscingfringilla.org",
                "Street": "6545 Sed Street",
                "City": "Gap",
                "Zip": "2152",
                "Region": "PR",
                "Country": "Tunisia",
                "Info": "id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis",
                "EmployeeID": 108,
                "DateOfJoining": "17/06/2018",
                "PhoneNumber": "1629100357399"
            },
            {
                "Name": "Bert",
                "Age": 43,
                "Email": "odio@Proindolor.edu",
                "Street": "Ap #941-2997 Tortor. St.",
                "City": "Minto",
                "Zip": "647310",
                "Region": "ON",
                "Country": "Ireland",
                "Info": "Duis cursus, diam at pretium aliquet, metus urna convallis erat,",
                "EmployeeID": 109,
                "DateOfJoining": "18/05/2018",
                "PhoneNumber": "1602123086599"
            },
            {
                "Name": "Lamar",
                "Age": 64,
                "Email": "Quisque.tincidunt@SuspendisseduiFusce.com",
                "Street": "510 Ante. Av.",
                "City": "Skegness",
                "Zip": "4220",
                "Region": "Lincolnshire",
                "Country": "Samoa",
                "Info": "mi tempor lorem, eget mollis lectus pede et risus. Quisque",
                "EmployeeID": 110,
                "DateOfJoining": "18/10/2017",
                "PhoneNumber": "1665061376299"
            },
            {
                "Name": "Kay",
                "Age": 65,
                "Email": "vehicula.risus.Nulla@egestasSed.co.uk",
                "Street": "5073 Cubilia Road",
                "City": "Estevan",
                "Zip": "8887",
                "Region": "Saskatchewan",
                "Country": "Laos",
                "Info": "pede sagittis augue, eu tempor erat neque non quam. Pellentesque",
                "EmployeeID": 111,
                "DateOfJoining": "31/01/2019",
                "PhoneNumber": "1623121265199"
            },
            {
                "Name": "Blair",
                "Age": 20,
                "Email": "fringilla@risusat.net",
                "Street": "Ap #533-7225 Neque Rd.",
                "City": "Ajaccio",
                "Zip": "4202",
                "Region": "Corse",
                "Country": "United States",
                "Info": "in faucibus orci luctus et ultrices posuere cubilia Curae; Donec",
                "EmployeeID": 112,
                "DateOfJoining": "19/11/2017",
                "PhoneNumber": "1602090174699"
            },
            {
                "Name": "Stone",
                "Age": 33,
                "Email": "aliquet@sagittisDuis.org",
                "Street": "393-9389 Lacus. Rd.",
                "City": "Geertruidenberg",
                "Zip": "49-566",
                "Region": "Noord Brabant",
                "Country": "Greece",
                "Info": "nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam",
                "EmployeeID": 113,
                "DateOfJoining": "23/01/2019",
                "PhoneNumber": "1691120873599"
            },
            {
                "Name": "Sara",
                "Age": 26,
                "Email": "enim.Etiam.gravida@aauctor.ca",
                "Street": "5728 Sed St.",
                "City": "Lonzee",
                "Zip": "831773",
                "Region": "Namen",
                "Country": "Mexico",
                "Info": "ac mattis velit justo nec ante. Maecenas mi felis, adipiscing",
                "EmployeeID": 114,
                "DateOfJoining": "24/11/2018",
                "PhoneNumber": "1695032347999"
            },
            {
                "Name": "Brody",
                "Age": 37,
                "Email": "sagittis.felis@gravidaPraesenteu.com",
                "Street": "849-5028 Dolor, Road",
                "City": "Oudergem",
                "Zip": "769776",
                "Region": "BU",
                "Country": "Western Sahara",
                "Info": "vitae sodales nisi magna sed dui. Fusce aliquam, enim nec",
                "EmployeeID": 115,
                "DateOfJoining": "27/03/2019",
                "PhoneNumber": "1662010887999"
            },
            {
                "Name": "Dylan",
                "Age": 46,
                "Email": "iaculis.nec@mollis.net",
                "Street": "2016 Ultrices Street",
                "City": "Brisbane",
                "Zip": "91143",
                "Region": "Queensland",
                "Country": "Montenegro",
                "Info": "suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in",
                "EmployeeID": 116,
                "DateOfJoining": "06/06/2019",
                "PhoneNumber": "1692080840799"
            },
            {
                "Name": "Joseph",
                "Age": 49,
                "Email": "Sed.malesuada@natoquepenatibus.net",
                "Street": "P.O. Box 555, 1346 Duis Ave",
                "City": "Vienna",
                "Zip": "T4A 1N3",
                "Region": "Wie",
                "Country": "Virgin Islands, United States",
                "Info": "habitant morbi tristique senectus et netus et malesuada fames ac",
                "EmployeeID": 117,
                "DateOfJoining": "07/01/2018",
                "PhoneNumber": "1684041637099"
            },
            {
                "Name": "Inez",
                "Age": 46,
                "Email": "eu@egetmetusIn.co.uk",
                "Street": "794 Posuere St.",
                "City": "Ribeirão Preto",
                "Zip": "44368",
                "Region": "São Paulo",
                "Country": "Oman",
                "Info": "dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies",
                "EmployeeID": 118,
                "DateOfJoining": "26/03/2018",
                "PhoneNumber": "1662051033699"
            },
            {
                "Name": "Grady",
                "Age": 28,
                "Email": "Sed.auctor.odio@aliquet.net",
                "Street": "1386 Iaculis Av.",
                "City": "Saint-Nazaire",
                "Zip": "64212",
                "Region": "Pays de la Loire",
                "Country": "Congo, the Democratic Republic of the",
                "Info": "fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed,",
                "EmployeeID": 119,
                "DateOfJoining": "14/06/2019",
                "PhoneNumber": "1640111297399"
            },
            {
                "Name": "Quinn",
                "Age": 51,
                "Email": "euismod.mauris@semvitaealiquam.net",
                "Street": "P.O. Box 900, 7039 Eu, Avenue",
                "City": "Butte",
                "Zip": "19-709",
                "Region": "MT",
                "Country": "Guinea",
                "Info": "parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor.",
                "EmployeeID": 120,
                "DateOfJoining": "30/08/2018",
                "PhoneNumber": "1647060826999"
            },
            {
                "Name": "Kay",
                "Age": 18,
                "Email": "velit.in.aliquet@quamdignissim.co.uk",
                "Street": "P.O. Box 277, 9874 Litora Av.",
                "City": "Campagna",
                "Zip": "804870",
                "Region": "Campania",
                "Country": "Anguilla",
                "Info": "neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin",
                "EmployeeID": 121,
                "DateOfJoining": "13/05/2019",
                "PhoneNumber": "1669070438799"
            },
            {
                "Name": "Elvis",
                "Age": 24,
                "Email": "vitae.diam.Proin@ullamcorper.com",
                "Street": "484-5692 Posuere St.",
                "City": "Istanbul",
                "Zip": "594237",
                "Region": "Istanbul",
                "Country": "Saint Barthélemy",
                "Info": "augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed,",
                "EmployeeID": 122,
                "DateOfJoining": "13/06/2018",
                "PhoneNumber": "1617021266099"
            },
            {
                "Name": "Marny",
                "Age": 37,
                "Email": "metus.In.nec@at.ca",
                "Street": "Ap #424-8235 Non, Avenue",
                "City": "Istres",
                "Zip": "70888",
                "Region": "PR",
                "Country": "Laos",
                "Info": "Aenean gravida nunc sed pede. Cum sociis natoque penatibus et",
                "EmployeeID": 123,
                "DateOfJoining": "15/03/2019",
                "PhoneNumber": "1644101053599"
            },
            {
                "Name": "Constance",
                "Age": 60,
                "Email": "ante.dictum.mi@euismodet.com",
                "Street": "155-3682 Urna Av.",
                "City": "Gontrode",
                "Zip": "5153",
                "Region": "Oost-Vlaanderen",
                "Country": "Vanuatu",
                "Info": "vulputate, nisi sem semper erat, in consectetuer ipsum nunc id",
                "EmployeeID": 124,
                "DateOfJoining": "01/01/2019",
                "PhoneNumber": "1607040244199"
            },
            {
                "Name": "Daniel",
                "Age": 61,
                "Email": "eu@erategettincidunt.co.uk",
                "Street": "7874 Enim. Avenue",
                "City": "Muzaffarpur",
                "Zip": "16772",
                "Region": "BR",
                "Country": "Haiti",
                "Info": "consequat enim diam vel arcu. Curabitur ut odio vel est",
                "EmployeeID": 125,
                "DateOfJoining": "06/08/2018",
                "PhoneNumber": "1696080747099"
            },
            {
                "Name": "Lewis",
                "Age": 48,
                "Email": "dictum.eleifend@Proinnislsem.net",
                "Street": "2042 Id Street",
                "City": "Bastia",
                "Zip": "58285",
                "Region": "CO",
                "Country": "Guadeloupe",
                "Info": "ut nisi a odio semper cursus. Integer mollis. Integer tincidunt",
                "EmployeeID": 126,
                "DateOfJoining": "18/05/2018",
                "PhoneNumber": "1681042190699"
            },
            {
                "Name": "Malik",
                "Age": 21,
                "Email": "mattis.semper@ultricesposuere.ca",
                "Street": "Ap #164-1035 Nisl St.",
                "City": "Castelluccio Valmaggiore",
                "Zip": "43292",
                "Region": "PUG",
                "Country": "American Samoa",
                "Info": "tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed",
                "EmployeeID": 127,
                "DateOfJoining": "09/02/2019",
                "PhoneNumber": "1607020388399"
            },
            {
                "Name": "Laurel",
                "Age": 31,
                "Email": "ornare.placerat.orci@Lorem.co.uk",
                "Street": "P.O. Box 285, 2529 Donec Ave",
                "City": "Zwolle",
                "Zip": "6949 YR",
                "Region": "Overijssel",
                "Country": "Faroe Islands",
                "Info": "porta elit, a feugiat tellus lorem eu metus. In lorem.",
                "EmployeeID": 128,
                "DateOfJoining": "31/01/2018",
                "PhoneNumber": "1655080107399"
            },
            {
                "Name": "Beverly",
                "Age": 20,
                "Email": "Nunc.mauris.sapien@ridiculusmus.net",
                "Street": "336 Amet Avenue",
                "City": "Blois",
                "Zip": "2018",
                "Region": "CE",
                "Country": "Jordan",
                "Info": "Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat.",
                "EmployeeID": 129,
                "DateOfJoining": "04/11/2018",
                "PhoneNumber": "1639072308799"
            },
            {
                "Name": "Jeremy",
                "Age": 65,
                "Email": "cursus@semconsequatnec.com",
                "Street": "P.O. Box 396, 7893 Tempus Ave",
                "City": "Etobicoke",
                "Zip": "76957",
                "Region": "Ontario",
                "Country": "Tunisia",
                "Info": "Donec est mauris, rhoncus id, mollis nec, cursus a, enim.",
                "EmployeeID": 130,
                "DateOfJoining": "21/04/2019",
                "PhoneNumber": "1659030109999"
            },
            {
                "Name": "Britanney",
                "Age": 23,
                "Email": "nisi.dictum@nibh.net",
                "Street": "336-9286 Semper Av.",
                "City": "Jönköping",
                "Zip": "70680",
                "Region": "F",
                "Country": "Slovenia",
                "Info": "non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed",
                "EmployeeID": 131,
                "DateOfJoining": "14/03/2019",
                "PhoneNumber": "1654022385599"
            },
            {
                "Name": "Rafael",
                "Age": 18,
                "Email": "Aliquam@vestibulumnec.co.uk",
                "Street": "8311 Ante St.",
                "City": "Brest",
                "Zip": "82310",
                "Region": "Bretagne",
                "Country": "Belize",
                "Info": "varius et, euismod et, commodo at, libero. Morbi accumsan laoreet",
                "EmployeeID": 132,
                "DateOfJoining": "06/04/2019",
                "PhoneNumber": "1647101015499"
            },
            {
                "Name": "Russell",
                "Age": 38,
                "Email": "metus.eu.erat@tacitisociosqu.ca",
                "Street": "Ap #138-3828 Quam Road",
                "City": "Le Petit-Quevilly",
                "Zip": "8053",
                "Region": "HA",
                "Country": "Cuba",
                "Info": "Quisque libero lacus, varius et, euismod et, commodo at, libero.",
                "EmployeeID": 133,
                "DateOfJoining": "07/02/2019",
                "PhoneNumber": "1648040503699"
            },
            {
                "Name": "Igor",
                "Age": 30,
                "Email": "diam.lorem@a.com",
                "Street": "P.O. Box 479, 9098 Molestie St.",
                "City": "Chalon-sur-Saône",
                "Zip": "99803",
                "Region": "Bourgogne",
                "Country": "Austria",
                "Info": "eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum.",
                "EmployeeID": 134,
                "DateOfJoining": "26/05/2018",
                "PhoneNumber": "1692070373899"
            },
            {
                "Name": "Unity",
                "Age": 41,
                "Email": "et.netus@orciinconsequat.edu",
                "Street": "2091 Elit Av.",
                "City": "Gdynia",
                "Zip": "11519",
                "Region": "PM",
                "Country": "Gibraltar",
                "Info": "gravida nunc sed pede. Cum sociis natoque penatibus et magnis",
                "EmployeeID": 135,
                "DateOfJoining": "16/11/2017",
                "PhoneNumber": "1685061667299"
            },
            {
                "Name": "Zeph",
                "Age": 57,
                "Email": "eget@vitae.net",
                "Street": "P.O. Box 249, 812 Amet Rd.",
                "City": "Huntsville",
                "Zip": "398053",
                "Region": "Alabama",
                "Country": "United Arab Emirates",
                "Info": "enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida.",
                "EmployeeID": 136,
                "DateOfJoining": "05/11/2017",
                "PhoneNumber": "1601081883799"
            },
            {
                "Name": "Zenaida",
                "Age": 58,
                "Email": "ut.eros@utcursusluctus.co.uk",
                "Street": "838-8536 Interdum St.",
                "City": "Vienna",
                "Zip": "21319",
                "Region": "Wie",
                "Country": "Iran",
                "Info": "facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus",
                "EmployeeID": 137,
                "DateOfJoining": "30/01/2018",
                "PhoneNumber": "1622050676299"
            },
            {
                "Name": "Dominic",
                "Age": 52,
                "Email": "sodales.purus.in@nuncestmollis.net",
                "Street": "9918 Sociis Rd.",
                "City": "Ipatinga",
                "Zip": "63091",
                "Region": "MG",
                "Country": "Falkland Islands",
                "Info": "augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum.",
                "EmployeeID": 138,
                "DateOfJoining": "15/10/2018",
                "PhoneNumber": "1631062148099"
            },
            {
                "Name": "Illana",
                "Age": 31,
                "Email": "auctor.vitae@sit.ca",
                "Street": "P.O. Box 655, 5601 Aliquet St.",
                "City": "Istanbul",
                "Zip": "03514",
                "Region": "Istanbul",
                "Country": "Mauritania",
                "Info": "Quisque libero lacus, varius et, euismod et, commodo at, libero.",
                "EmployeeID": 139,
                "DateOfJoining": "30/12/2017",
                "PhoneNumber": "1614070689899"
            },
            {
                "Name": "Abra",
                "Age": 66,
                "Email": "ipsum.cursus.vestibulum@sollicitudin.co.uk",
                "Street": "P.O. Box 741, 2747 In Street",
                "City": "Czestochowa",
                "Zip": "84915",
                "Region": "Slaskie",
                "Country": "Lebanon",
                "Info": "ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet",
                "EmployeeID": 140,
                "DateOfJoining": "08/07/2018",
                "PhoneNumber": "1624042918699"
            },
            {
                "Name": "Hiram",
                "Age": 61,
                "Email": "parturient@adlitora.org",
                "Street": "816-2206 Lorem St.",
                "City": "Ödemis",
                "Zip": "541124",
                "Region": "Izm",
                "Country": "Equatorial Guinea",
                "Info": "imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non,",
                "EmployeeID": 141,
                "DateOfJoining": "13/01/2018",
                "PhoneNumber": "1606061911499"
            },
            {
                "Name": "Nigel",
                "Age": 21,
                "Email": "vel@idanteNunc.com",
                "Street": "Ap #853-4158 Magnis Rd.",
                "City": "La Reina",
                "Zip": "NY5F 9HL",
                "Region": "Metropolitana de Santiago",
                "Country": "Tajikistan",
                "Info": "magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus",
                "EmployeeID": 142,
                "DateOfJoining": "15/01/2019",
                "PhoneNumber": "1602091283499"
            },
            {
                "Name": "Sade",
                "Age": 38,
                "Email": "eu@Nulla.edu",
                "Street": "P.O. Box 373, 8595 Quam Rd.",
                "City": "Sannazzaro de' Burgondi",
                "Zip": "65976",
                "Region": "Lombardia",
                "Country": "Bangladesh",
                "Info": "ante lectus convallis est, vitae sodales nisi magna sed dui.",
                "EmployeeID": 143,
                "DateOfJoining": "26/11/2018",
                "PhoneNumber": "1692041835299"
            },
            {
                "Name": "Nyssa",
                "Age": 23,
                "Email": "Suspendisse.tristique.neque@auctor.edu",
                "Street": "421-6825 Integer St.",
                "City": "Saint-Malo",
                "Zip": "3156",
                "Region": "BR",
                "Country": "French Guiana",
                "Info": "a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras",
                "EmployeeID": 144,
                "DateOfJoining": "07/12/2017",
                "PhoneNumber": "1650113088699"
            },
            {
                "Name": "Emery",
                "Age": 50,
                "Email": "erat.eget.ipsum@mauris.org",
                "Street": "603-9166 Sed Rd.",
                "City": "Uddevalla",
                "Zip": "00324",
                "Region": "Västra Götalands län",
                "Country": "Kenya",
                "Info": "egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor",
                "EmployeeID": 145,
                "DateOfJoining": "08/01/2018",
                "PhoneNumber": "1659121627299"
            },
            {
                "Name": "Ella",
                "Age": 55,
                "Email": "eros.nec@metus.edu",
                "Street": "Ap #611-6651 Libero Street",
                "City": "Springdale",
                "Zip": "732210",
                "Region": "Arkansas",
                "Country": "Tajikistan",
                "Info": "nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet.",
                "EmployeeID": 146,
                "DateOfJoining": "17/07/2017",
                "PhoneNumber": "1647050613599"
            },
            {
                "Name": "Barry",
                "Age": 54,
                "Email": "elit.elit@Cras.ca",
                "Street": "8035 Massa. Rd.",
                "City": "Berlin",
                "Zip": "18655-758",
                "Region": "Berlin",
                "Country": "French Polynesia",
                "Info": "libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus",
                "EmployeeID": 147,
                "DateOfJoining": "02/12/2018",
                "PhoneNumber": "1616121146799"
            },
            {
                "Name": "Amela",
                "Age": 21,
                "Email": "Mauris.blandit@arcueuodio.ca",
                "Street": "2666 Fermentum Rd.",
                "City": "Calais",
                "Zip": "88448",
                "Region": "Nord-Pas-de-Calais",
                "Country": "Fiji",
                "Info": "et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus",
                "EmployeeID": 148,
                "DateOfJoining": "23/04/2019",
                "PhoneNumber": "1649102280399"
            },
            {
                "Name": "Mara",
                "Age": 30,
                "Email": "nec.enim.Nunc@QuisquevariusNam.edu",
                "Street": "P.O. Box 638, 4316 Primis Road",
                "City": "Motueka",
                "Zip": "7156 HJ",
                "Region": "SI",
                "Country": "Mozambique",
                "Info": "dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada",
                "EmployeeID": 149,
                "DateOfJoining": "01/06/2018",
                "PhoneNumber": "1619032787599"
            },
            {
                "Name": "Freya",
                "Age": 47,
                "Email": "consectetuer@acliberonec.co.uk",
                "Street": "886-8953 Eget Ave",
                "City": "Istanbul",
                "Zip": "R9W 5S7",
                "Region": "Ist",
                "Country": "Brazil",
                "Info": "iaculis enim, sit amet ornare lectus justo eu arcu. Morbi",
                "EmployeeID": 150,
                "DateOfJoining": "24/06/2018",
                "PhoneNumber": "1671041584999"
            },
            {
                "Name": "Baxter",
                "Age": 37,
                "Email": "nec.mollis.vitae@temporbibendum.org",
                "Street": "7735 Hendrerit Rd.",
                "City": "Istanbul",
                "Zip": "2767 NF",
                "Region": "Istanbul",
                "Country": "Bahamas",
                "Info": "nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem",
                "EmployeeID": 151,
                "DateOfJoining": "17/07/2018",
                "PhoneNumber": "1636022151099"
            },
            {
                "Name": "Gil",
                "Age": 61,
                "Email": "a.felis@sociisnatoque.com",
                "Street": "Ap #482-6850 Sed Road",
                "City": "Hudiksvall",
                "Zip": "1167",
                "Region": "Gävleborgs län",
                "Country": "Bosnia and Herzegovina",
                "Info": "non enim. Mauris quis turpis vitae purus gravida sagittis. Duis",
                "EmployeeID": 152,
                "DateOfJoining": "08/10/2017",
                "PhoneNumber": "1659112394399"
            },
            {
                "Name": "Shelby",
                "Age": 58,
                "Email": "Nulla.tempor@nonenim.edu",
                "Street": "P.O. Box 682, 2660 Hendrerit St.",
                "City": "Okene",
                "Zip": "9679",
                "Region": "Kogi",
                "Country": "Puerto Rico",
                "Info": "Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam",
                "EmployeeID": 153,
                "DateOfJoining": "10/07/2019",
                "PhoneNumber": "1611041572299"
            },
            {
                "Name": "Jayme",
                "Age": 23,
                "Email": "lectus.pede@luctus.org",
                "Street": "Ap #697-9286 Interdum Ave",
                "City": "Curridabat",
                "Zip": "26849-941",
                "Region": "SJ",
                "Country": "Serbia",
                "Info": "nec enim. Nunc ut erat. Sed nunc est, mollis non,",
                "EmployeeID": 154,
                "DateOfJoining": "16/07/2018",
                "PhoneNumber": "1687021575399"
            },
            {
                "Name": "Harper",
                "Age": 18,
                "Email": "semper.et.lacinia@dolorsit.com",
                "Street": "200-2599 Purus. St.",
                "City": "Jerez de la Frontera",
                "Zip": "21316",
                "Region": "AN",
                "Country": "Lesotho",
                "Info": "nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia",
                "EmployeeID": 155,
                "DateOfJoining": "14/09/2017",
                "PhoneNumber": "1628053043899"
            },
            {
                "Name": "Wynne",
                "Age": 31,
                "Email": "non.egestas@pharetra.co.uk",
                "Street": "224-3404 Aliquam St.",
                "City": "Ockelbo",
                "Zip": "Y7G 5L0",
                "Region": "Gävleborgs län",
                "Country": "Nicaragua",
                "Info": "dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit",
                "EmployeeID": 156,
                "DateOfJoining": "20/02/2019",
                "PhoneNumber": "1681091203699"
            },
            {
                "Name": "Paula",
                "Age": 42,
                "Email": "ultrices.posuere.cubilia@lorem.net",
                "Street": "Ap #603-8371 Morbi Rd.",
                "City": "Sioux City",
                "Zip": "1632 HB",
                "Region": "Iowa",
                "Country": "United States Minor Outlying Islands",
                "Info": "leo elementum sem, vitae aliquam eros turpis non enim. Mauris",
                "EmployeeID": 157,
                "DateOfJoining": "03/02/2019",
                "PhoneNumber": "1684022204799"
            },
            {
                "Name": "Nola",
                "Age": 65,
                "Email": "quis.tristique.ac@orciUtsemper.org",
                "Street": "100-5819 Consectetuer Ave",
                "City": "Crotta d'Adda",
                "Zip": "227519",
                "Region": "LOM",
                "Country": "Antarctica",
                "Info": "augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna",
                "EmployeeID": 158,
                "DateOfJoining": "22/10/2018",
                "PhoneNumber": "1603120797899"
            },
            {
                "Name": "Oren",
                "Age": 52,
                "Email": "nunc.ullamcorper.eu@luctussitamet.ca",
                "Street": "2110 Orci Street",
                "City": "Santa Luzia",
                "Zip": "A60 8ES",
                "Region": "Minas Gerais",
                "Country": "Zimbabwe",
                "Info": "feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam",
                "EmployeeID": 159,
                "DateOfJoining": "20/04/2018",
                "PhoneNumber": "1650110126199"
            },
            {
                "Name": "Orlando",
                "Age": 34,
                "Email": "ac.fermentum@idsapien.com",
                "Street": "P.O. Box 415, 4139 Gravida St.",
                "City": "La Granja",
                "Zip": "K8R 0R9",
                "Region": "RM",
                "Country": "Burundi",
                "Info": "malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis",
                "EmployeeID": 160,
                "DateOfJoining": "28/01/2018",
                "PhoneNumber": "1696051805199"
            },
            {
                "Name": "Amal",
                "Age": 68,
                "Email": "tincidunt@sedpede.com",
                "Street": "P.O. Box 196, 6981 Scelerisque Ave",
                "City": "Istanbul",
                "Zip": "300655",
                "Region": "Istanbul",
                "Country": "Aruba",
                "Info": "ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius",
                "EmployeeID": 161,
                "DateOfJoining": "08/03/2019",
                "PhoneNumber": "1602032514799"
            },
            {
                "Name": "Destiny",
                "Age": 30,
                "Email": "auctor@maurisid.edu",
                "Street": "Ap #570-8111 Phasellus Rd.",
                "City": "Quinta Normal",
                "Zip": "U82 2MT",
                "Region": "RM",
                "Country": "Fiji",
                "Info": "massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede",
                "EmployeeID": 162,
                "DateOfJoining": "10/07/2019",
                "PhoneNumber": "1627081743099"
            },
            {
                "Name": "Allen",
                "Age": 37,
                "Email": "elementum@Nullamvitae.ca",
                "Street": "868-249 Fringilla Street",
                "City": "Gisborne",
                "Zip": "4613",
                "Region": "NI",
                "Country": "Spain",
                "Info": "id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend",
                "EmployeeID": 163,
                "DateOfJoining": "12/11/2017",
                "PhoneNumber": "1682010870299"
            },
            {
                "Name": "Daniel",
                "Age": 65,
                "Email": "Cum@Crasvehiculaaliquet.net",
                "Street": "P.O. Box 277, 3263 Morbi Avenue",
                "City": "Orilla",
                "Zip": "U8 6LO",
                "Region": "Ontario",
                "Country": "Mali",
                "Info": "urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum",
                "EmployeeID": 164,
                "DateOfJoining": "13/08/2018",
                "PhoneNumber": "1612070886099"
            },
            {
                "Name": "Audra",
                "Age": 35,
                "Email": "Donec@atsem.edu",
                "Street": "978-6468 Vulputate St.",
                "City": "Vänersborg",
                "Zip": "2111",
                "Region": "O",
                "Country": "Burundi",
                "Info": "Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper",
                "EmployeeID": 165,
                "DateOfJoining": "03/09/2017",
                "PhoneNumber": "1615072473799"
            },
            {
                "Name": "Doris",
                "Age": 29,
                "Email": "pede.Cras@augueeutellus.org",
                "Street": "P.O. Box 127, 4423 Orci Road",
                "City": "Tarbes",
                "Zip": "1053 NQ",
                "Region": "Midi-Pyrénées",
                "Country": "San Marino",
                "Info": "risus. In mi pede, nonummy ut, molestie in, tempus eu,",
                "EmployeeID": 166,
                "DateOfJoining": "27/10/2018",
                "PhoneNumber": "1663021282699"
            },
            {
                "Name": "Yeo",
                "Age": 30,
                "Email": "aliquam.eros.turpis@sociosqu.com",
                "Street": "Ap #551-7713 Pellentesque Ave",
                "City": "Jhansi",
                "Zip": "4823 QC",
                "Region": "UP",
                "Country": "Ethiopia",
                "Info": "Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla",
                "EmployeeID": 167,
                "DateOfJoining": "11/10/2017",
                "PhoneNumber": "1672100610599"
            },
            {
                "Name": "Connor",
                "Age": 31,
                "Email": "sagittis@etmagnaPraesent.co.uk",
                "Street": "Ap #855-5020 Faucibus Av.",
                "City": "Ghaziabad",
                "Zip": "18997",
                "Region": "UP",
                "Country": "Lithuania",
                "Info": "Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy",
                "EmployeeID": 168,
                "DateOfJoining": "29/04/2019",
                "PhoneNumber": "1634021051899"
            },
            {
                "Name": "Tyrone",
                "Age": 47,
                "Email": "urna.Nunc@dictumultriciesligula.com",
                "Street": "2256 Nascetur Rd.",
                "City": "Santa Rita",
                "Zip": "81928",
                "Region": "PB",
                "Country": "Palau",
                "Info": "mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec",
                "EmployeeID": 169,
                "DateOfJoining": "26/12/2018",
                "PhoneNumber": "1681122005799"
            },
            {
                "Name": "Desiree",
                "Age": 24,
                "Email": "rutrum@utmolestiein.ca",
                "Street": "9365 Urna Road",
                "City": "Alcalá de Henares",
                "Zip": "60417",
                "Region": "MA",
                "Country": "Cameroon",
                "Info": "nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo",
                "EmployeeID": 170,
                "DateOfJoining": "23/02/2019",
                "PhoneNumber": "1683111437299"
            },
            {
                "Name": "James",
                "Age": 22,
                "Email": "nonummy.ut@magnaUt.com",
                "Street": "126-6220 Dis Rd.",
                "City": "Sylvan Lake",
                "Zip": "40317",
                "Region": "AB",
                "Country": "Cyprus",
                "Info": "at arcu. Vestibulum ante ipsum primis in faucibus orci luctus",
                "EmployeeID": 171,
                "DateOfJoining": "02/11/2018",
                "PhoneNumber": "1646060868399"
            },
            {
                "Name": "Gisela",
                "Age": 21,
                "Email": "Duis.at@ut.com",
                "Street": "9538 Malesuada St.",
                "City": "Deschambault",
                "Zip": "2436",
                "Region": "Quebec",
                "Country": "Madagascar",
                "Info": "est arcu ac orci. Ut semper pretium neque. Morbi quis",
                "EmployeeID": 172,
                "DateOfJoining": "06/11/2017",
                "PhoneNumber": "1695120843799"
            },
            {
                "Name": "Kylynn",
                "Age": 27,
                "Email": "Aenean.eget.metus@Fusce.ca",
                "Street": "9301 Pede Rd.",
                "City": "Gambolò",
                "Zip": "38370",
                "Region": "Lombardia",
                "Country": "Bangladesh",
                "Info": "Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue",
                "EmployeeID": 173,
                "DateOfJoining": "04/03/2018",
                "PhoneNumber": "1638090338699"
            },
            {
                "Name": "Armand",
                "Age": 28,
                "Email": "Aliquam.erat.volutpat@noncursus.edu",
                "Street": "P.O. Box 552, 8294 Tellus Rd.",
                "City": "Naperville",
                "Zip": "R2 2HE",
                "Region": "IL",
                "Country": "Bahamas",
                "Info": "sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris",
                "EmployeeID": 174,
                "DateOfJoining": "09/12/2018",
                "PhoneNumber": "1624061897099"
            },
            {
                "Name": "Price",
                "Age": 30,
                "Email": "hendrerit.Donec.porttitor@purusactellus.co.uk",
                "Street": "6991 Pharetra, Rd.",
                "City": "Cajazeiras",
                "Zip": "2701",
                "Region": "Paraíba",
                "Country": "Micronesia",
                "Info": "sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing",
                "EmployeeID": 175,
                "DateOfJoining": "28/09/2017",
                "PhoneNumber": "1642051506699"
            },
            {
                "Name": "Merritt",
                "Age": 54,
                "Email": "eu.ultrices@sed.org",
                "Street": "915-7055 Vel, Rd.",
                "City": "Cabo de Santo Agostinho",
                "Zip": "710969",
                "Region": "Pernambuco",
                "Country": "Macao",
                "Info": "consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem,",
                "EmployeeID": 176,
                "DateOfJoining": "08/12/2017",
                "PhoneNumber": "1606081276799"
            },
            {
                "Name": "Keane",
                "Age": 36,
                "Email": "Vivamus@elitNulla.com",
                "Street": "Ap #554-7175 Ornare, Rd.",
                "City": "Longvilly",
                "Zip": "74022",
                "Region": "LX",
                "Country": "Oman",
                "Info": "lectus pede et risus. Quisque libero lacus, varius et, euismod",
                "EmployeeID": 177,
                "DateOfJoining": "31/10/2017",
                "PhoneNumber": "1631042588199"
            },
            {
                "Name": "Keegan",
                "Age": 56,
                "Email": "vel@maurisSuspendissealiquet.co.uk",
                "Street": "P.O. Box 296, 1648 Morbi Street",
                "City": "Santo Stefano del Sole",
                "Zip": "502881",
                "Region": "Campania",
                "Country": "United Kingdom (Great Britain)",
                "Info": "arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida",
                "EmployeeID": 178,
                "DateOfJoining": "17/08/2017",
                "PhoneNumber": "1654021189499"
            },
            {
                "Name": "Abdul",
                "Age": 52,
                "Email": "a@Cumsociis.co.uk",
                "Street": "Ap #323-8261 Fusce Ave",
                "City": "Heusden",
                "Zip": "77716",
                "Region": "Oost-Vlaanderen",
                "Country": "Marshall Islands",
                "Info": "mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent",
                "EmployeeID": 179,
                "DateOfJoining": "13/06/2019",
                "PhoneNumber": "1654052431599"
            },
            {
                "Name": "Evangeline",
                "Age": 53,
                "Email": "Aenean@urna.net",
                "Street": "Ap #590-7536 Augue Street",
                "City": "Palma de Mallorca",
                "Zip": "24331-999",
                "Region": "Illes Balears",
                "Country": "El Salvador",
                "Info": "Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat",
                "EmployeeID": 180,
                "DateOfJoining": "27/01/2019",
                "PhoneNumber": "1696020804099"
            },
            {
                "Name": "Kirsten",
                "Age": 55,
                "Email": "Vivamus.non@Praesent.com",
                "Street": "Ap #226-2212 Magna St.",
                "City": "Gävle",
                "Zip": "14409",
                "Region": "Gävleborgs län",
                "Country": "Cayman Islands",
                "Info": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
                "EmployeeID": 181,
                "DateOfJoining": "26/07/2017",
                "PhoneNumber": "1664031480899"
            },
            {
                "Name": "Erich",
                "Age": 26,
                "Email": "augue.eu@odioNam.org",
                "Street": "Ap #701-9770 Et St.",
                "City": "Katowice",
                "Zip": "31008",
                "Region": "Slaskie",
                "Country": "Libya",
                "Info": "Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum.",
                "EmployeeID": 182,
                "DateOfJoining": "29/05/2018",
                "PhoneNumber": "1625100885599"
            },
            {
                "Name": "Talon",
                "Age": 41,
                "Email": "consequat.enim.diam@nuncsitamet.edu",
                "Street": "P.O. Box 930, 4617 Ipsum St.",
                "City": "Neder-Over-Heembeek",
                "Zip": "S9L 7EY",
                "Region": "Brussels Hoofdstedelijk Gewest",
                "Country": "Peru",
                "Info": "magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl.",
                "EmployeeID": 183,
                "DateOfJoining": "22/06/2019",
                "PhoneNumber": "1657071534499"
            },
            {
                "Name": "Shea",
                "Age": 39,
                "Email": "egestas.rhoncus@odiovel.net",
                "Street": "267-7888 Scelerisque St.",
                "City": "Trollhättan",
                "Zip": "501600",
                "Region": "Västra Götalands län",
                "Country": "Viet Nam",
                "Info": "purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula",
                "EmployeeID": 184,
                "DateOfJoining": "24/08/2017",
                "PhoneNumber": "1653112128199"
            },
            {
                "Name": "Avram",
                "Age": 57,
                "Email": "in.hendrerit.consectetuer@netusetmalesuada.org",
                "Street": "6644 Sed Ave",
                "City": "San Pablo",
                "Zip": "22211",
                "Region": "H",
                "Country": "Venezuela",
                "Info": "libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis",
                "EmployeeID": 185,
                "DateOfJoining": "16/07/2018",
                "PhoneNumber": "1622070169199"
            },
            {
                "Name": "Ivor",
                "Age": 21,
                "Email": "sem.ut.cursus@sociisnatoquepenatibus.ca",
                "Street": "P.O. Box 112, 6561 Volutpat. St.",
                "City": "Guirsch",
                "Zip": "80321",
                "Region": "LX",
                "Country": "Japan",
                "Info": "massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero.",
                "EmployeeID": 186,
                "DateOfJoining": "26/07/2018",
                "PhoneNumber": "1610112842499"
            },
            {
                "Name": "Audrey",
                "Age": 32,
                "Email": "porttitor.tellus.non@vitae.edu",
                "Street": "186 Enim. St.",
                "City": "Minneapolis",
                "Zip": "08940",
                "Region": "Minnesota",
                "Country": "New Zealand",
                "Info": "nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas.",
                "EmployeeID": 187,
                "DateOfJoining": "16/05/2018",
                "PhoneNumber": "1699071680599"
            },
            {
                "Name": "Merritt",
                "Age": 65,
                "Email": "magna@CuraeDonectincidunt.com",
                "Street": "Ap #524-4980 Eget Rd.",
                "City": "Sandy",
                "Zip": "76395",
                "Region": "UT",
                "Country": "Kenya",
                "Info": "malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas,",
                "EmployeeID": 188,
                "DateOfJoining": "05/08/2018",
                "PhoneNumber": "1626030339499"
            },
            {
                "Name": "Jonas",
                "Age": 60,
                "Email": "interdum.Curabitur@laoreet.edu",
                "Street": "455-1121 Orci. Road",
                "City": "Kizilcahamam",
                "Zip": "3074",
                "Region": "Ank",
                "Country": "Bahamas",
                "Info": "lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus",
                "EmployeeID": 189,
                "DateOfJoining": "04/04/2018",
                "PhoneNumber": "1604120243099"
            },
            {
                "Name": "Indigo",
                "Age": 59,
                "Email": "amet.consectetuer.adipiscing@ligulaNullam.net",
                "Street": "Ap #496-8002 Fusce St.",
                "City": "North Cowichan",
                "Zip": "22-852",
                "Region": "British Columbia",
                "Country": "Nauru",
                "Info": "Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent",
                "EmployeeID": 190,
                "DateOfJoining": "14/09/2018",
                "PhoneNumber": "1654040137699"
            },
            {
                "Name": "Regan",
                "Age": 35,
                "Email": "erat.vitae.risus@nonlaciniaat.co.uk",
                "Street": "9535 Pede, Av.",
                "City": "Berlin",
                "Zip": "8669",
                "Region": "Berlin",
                "Country": "Mauritius",
                "Info": "arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor",
                "EmployeeID": 191,
                "DateOfJoining": "12/11/2018",
                "PhoneNumber": "1669062420399"
            },
            {
                "Name": "Magee",
                "Age": 29,
                "Email": "mollis.dui@porttitoreros.co.uk",
                "Street": "P.O. Box 620, 131 Posuere Ave",
                "City": "Vienna",
                "Zip": "871012",
                "Region": "Vienna",
                "Country": "Saint Martin",
                "Info": "auctor odio a purus. Duis elementum, dui quis accumsan convallis,",
                "EmployeeID": 192,
                "DateOfJoining": "24/11/2018",
                "PhoneNumber": "1602122112199"
            },
            {
                "Name": "Kato",
                "Age": 37,
                "Email": "nec@velvulputateeu.edu",
                "Street": "P.O. Box 410, 390 Quis Rd.",
                "City": "Shreveport",
                "Zip": "45122",
                "Region": "LA",
                "Country": "Portugal",
                "Info": "aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis",
                "EmployeeID": 193,
                "DateOfJoining": "08/09/2018",
                "PhoneNumber": "1639061302599"
            },
            {
                "Name": "Edan",
                "Age": 30,
                "Email": "non@Integervitae.org",
                "Street": "Ap #688-4818 Eget, Rd.",
                "City": "Newark",
                "Zip": "3651 ON",
                "Region": "Delaware",
                "Country": "China",
                "Info": "id risus quis diam luctus lobortis. Class aptent taciti sociosqu",
                "EmployeeID": 194,
                "DateOfJoining": "17/07/2017",
                "PhoneNumber": "1683112483099"
            },
            {
                "Name": "Serina",
                "Age": 65,
                "Email": "natoque.penatibus.et@Inmi.net",
                "Street": "Ap #128-9886 Urna, St.",
                "City": "Wortel",
                "Zip": "60006-095",
                "Region": "Antwerpen",
                "Country": "Iran",
                "Info": "elit, a feugiat tellus lorem eu metus. In lorem. Donec",
                "EmployeeID": 195,
                "DateOfJoining": "10/02/2019",
                "PhoneNumber": "1638022940699"
            },
            {
                "Name": "Colorado",
                "Age": 40,
                "Email": "magna.tellus@faucibuslectus.net",
                "Street": "P.O. Box 462, 1193 Mi Street",
                "City": "Vancouver",
                "Zip": "7671",
                "Region": "Washington",
                "Country": "Somalia",
                "Info": "tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet,",
                "EmployeeID": 196,
                "DateOfJoining": "19/05/2019",
                "PhoneNumber": "1604070382899"
            },
            {
                "Name": "Jerry",
                "Age": 34,
                "Email": "arcu@dapibusrutrumjusto.com",
                "Street": "P.O. Box 587, 3263 Cursus St.",
                "City": "Newmarket",
                "Zip": "170098",
                "Region": "Ontario",
                "Country": "El Salvador",
                "Info": "pede. Cum sociis natoque penatibus et magnis dis parturient montes,",
                "EmployeeID": 197,
                "DateOfJoining": "23/07/2017",
                "PhoneNumber": "1695090522699"
            },
            {
                "Name": "Ainsley",
                "Age": 29,
                "Email": "sed.libero@adipiscing.edu",
                "Street": "9682 Tincidunt Road",
                "City": "Vienna",
                "Zip": "78557",
                "Region": "Wie",
                "Country": "France",
                "Info": "volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean",
                "EmployeeID": 198,
                "DateOfJoining": "31/03/2019",
                "PhoneNumber": "1661111267399"
            },
            {
                "Name": "Samson",
                "Age": 60,
                "Email": "consequat.enim@feugiat.ca",
                "Street": "9712 Adipiscing Rd.",
                "City": "Ambleside",
                "Zip": "4788",
                "Region": "WE",
                "Country": "Gibraltar",
                "Info": "mauris a nunc. In at pede. Cras vulputate velit eu",
                "EmployeeID": 199,
                "DateOfJoining": "09/10/2018",
                "PhoneNumber": "1677012674299"
            },
            {
                "Name": "Ulric",
                "Age": 43,
                "Email": "sociis.natoque.penatibus@eleifendCras.com",
                "Street": "Ap #122-8677 Magnis Street",
                "City": "Salt Lake City",
                "Zip": "546895",
                "Region": "Utah",
                "Country": "Korea, North",
                "Info": "Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci,",
                "EmployeeID": 200,
                "DateOfJoining": "27/04/2018",
                "PhoneNumber": "1615062568299"
            }
        ];
        this.selectedIndex = 0;
    }
    getAllEmployees() {
        return this.employeeList;
    }
    getEmployee() {
        return this.employeeList[this.selectedIndex];
    }
};
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ "./src/app/employeelist/employeelist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".employeelist1{\r\n    border: brown;\r\n}\r\n.table{\r\n    color:white;\r\n}\r\ntd{\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVsaXN0L2VtcGxveWVlbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZWxpc3QvZW1wbG95ZWVsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWVsaXN0MXtcclxuICAgIGJvcmRlcjogYnJvd247XHJcbn1cclxuLnRhYmxle1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxudGR7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/employeelist/employeelist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employeelist/employeelist.component.ts ***!
  \********************************************************/
/*! exports provided: EmployeelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeelistComponent", function() { return EmployeelistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");



let EmployeelistComponent = class EmployeelistComponent {
    constructor(emp) {
        this.emp = emp;
        this.employee = {
            "Name": "Aurora",
            "Age": 53,
            "Email": "ante.blandit@disparturient.ca",
            "Street": "493 Iaculis Rd.",
            "City": "Lewiston",
            "Zip": "42591-180",
            "Region": "Maine",
            "Country": "Sudan",
            "Info": "est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia",
            "EmployeeID": 101,
            "DateOfJoining": "10/06/2019",
            "PhoneNumber": "1628101902299"
        };
    }
    ngOnInit() {
        console.log(this.emp.getEmployee());
        this.employee = this.emp.getEmployee();
    }
};
EmployeelistComponent.ctorParameters = () => [
    { type: _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }
];
EmployeelistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employeelist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employeelist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employeelist/employeelist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employeelist.component.css */ "./src/app/employeelist/employeelist.component.css")).default]
    })
], EmployeelistComponent);



/***/ }),

/***/ "./src/app/emplpoyer/emplpoyer.component.css":
/*!***************************************************!*\
  !*** ./src/app/emplpoyer/emplpoyer.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".employer{\r\n   margin: 10px;\r\n    border:1px solid red;\r\n    padding: 15px;\r\n    display: inline-block;\r\nbox-shadow: 10px 10px 5px 33px rgba(0,0,0,0.49);\r\nbackground-image: linear-gradient(to right,#82b1ff,#2979ff,#2962ff);\r\n}\r\n.empdetail{\r\nwidth: 60%;\r\ndisplay:inline-block;\r\n}\r\n.viewButton{\r\n    width:40%;\r\n    display:inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbHBveWVyL2VtcGxwb3llci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csWUFBWTtJQUNYLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IscUJBQXFCO0FBR3pCLCtDQUErQztBQUMvQyxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBLFVBQVU7QUFDVixvQkFBb0I7QUFDcEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9lbXBscG95ZXIvZW1wbHBveWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZXJ7XHJcbiAgIG1hcmdpbjogMTBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAzM3B4IHJnYmEoMCwwLDAsMC40OSk7XHJcbi1tb3otYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAzM3B4IHJnYmEoMCwwLDAsMC40OSk7XHJcbmJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggMzNweCByZ2JhKDAsMCwwLDAuNDkpO1xyXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzgyYjFmZiwjMjk3OWZmLCMyOTYyZmYpO1xyXG59XHJcbi5lbXBkZXRhaWx7XHJcbndpZHRoOiA2MCU7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG59XHJcbi52aWV3QnV0dG9ue1xyXG4gICAgd2lkdGg6NDAlO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/emplpoyer/emplpoyer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/emplpoyer/emplpoyer.component.ts ***!
  \**************************************************/
/*! exports provided: EmplpoyerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmplpoyerComponent", function() { return EmplpoyerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EmplpoyerComponent = class EmplpoyerComponent {
    constructor(emp, rout) {
        this.emp = emp;
        this.rout = rout;
        this.employeeList = [];
    }
    ngOnInit() {
        this.employeeList = this.emp.getAllEmployees();
    }
    ok(index) {
        this.emp.selectedIndex = index;
        this.rout.navigate(['/employeelist']);
        // alert(index);
    }
};
EmplpoyerComponent.ctorParameters = () => [
    { type: _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EmplpoyerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emplpoyer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./emplpoyer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/emplpoyer/emplpoyer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./emplpoyer.component.css */ "./src/app/emplpoyer/emplpoyer.component.css")).default]
    })
], EmplpoyerComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p{\r\n    color:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGNvbG9yOnJlZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#loginPage{\r\n    border: 1px solid red;\r\n    padding: 10px;\r\n    background-color: rgba(255,228,192, 0.5);\r\n    width: 50%;\r\n    margin:auto;\r\n    margin-top: 10%;\r\n    border-radius: 10px;\r\n    webkit-box-shadow: 2px 2px 55px 47px rgba(219,210,219,1);\r\nbox-shadow: 2px 2px 55px 47px rgba(219,210,219,1); /* For Safari 3.1 to 6.0 */\r\n  transition: width 2s;\r\n  }\r\n\r\nlabel{\r\n    font-weight: bolder;\r\n}\r\n\r\n.form-control1{\r\n    width: 100%;\r\n    padding:6px;\r\n    border-radius:5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix3REFBd0Q7QUFFNUQsaURBQWlELEVBQ2pCLDBCQUEwQjtFQUN4RCxvQkFBb0I7RUFDcEI7O0FBRUY7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9naW5QYWdle1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDIyOCwxOTIsIDAuNSk7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggNTVweCA0N3B4IHJnYmEoMjE5LDIxMCwyMTksMSk7XHJcbi1tb3otYm94LXNoYWRvdzogMnB4IDJweCA1NXB4IDQ3cHggcmdiYSgyMTksMjEwLDIxOSwxKTtcclxuYm94LXNoYWRvdzogMnB4IDJweCA1NXB4IDQ3cHggcmdiYSgyMTksMjEwLDIxOSwxKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDJzOyAvKiBGb3IgU2FmYXJpIDMuMSB0byA2LjAgKi9cclxuICB0cmFuc2l0aW9uOiB3aWR0aCAycztcclxuICB9XHJcblxyXG5sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wxe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOjZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() {
        this.hai = 'jabers';
    }
    ngOnInit() {
    }
    login(form) {
        console.log(form);
        if (form.controls.username.untouched)
            form.controls.username.touched = true;
        else
            form.controls.pass.touched = true;
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login1/login1.component.css":
/*!*********************************************!*\
  !*** ./src/app/login1/login1.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luMS9sb2dpbjEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/login1/login1.component.ts":
/*!********************************************!*\
  !*** ./src/app/login1/login1.component.ts ***!
  \********************************************/
/*! exports provided: Login1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login1Component", function() { return Login1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Login1Component = class Login1Component {
    constructor() { }
    ngOnInit() {
    }
};
Login1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'login1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login1/login1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login1.component.css */ "./src/app/login1/login1.component.css")).default]
    })
], Login1Component);



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotfoundComponent = class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfound',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notfound/notfound.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")).default]
    })
], NotfoundComponent);



/***/ }),

/***/ "./src/app/sign/sign.component.css":
/*!*****************************************!*\
  !*** ./src/app/sign/sign.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#signUp{\r\n    border:10px red;\r\n    padding:20px;\r\n    background-color: rgba(163,155,154,0.4);\r\n    width:20%;\r\n    margin:auto;\r\n    margin-top:20%;\r\n    border-radius:10px;\r\nbox-shadow: 63px -20px 39px 87px rgba(219,210,219,0.57);\r\nbackground-image: linear-gradient(to right,#82b1ff,#2979ff,#2962ff);\r\n/* width: 100px;\r\nheight: 100px; */\r\nposition: relative;\r\n/* background-color: red; */\r\n-webkit-animation-name: example;\r\n        animation-name: example;\r\n-webkit-animation-duration: 2s;\r\n        animation-duration: 2s;\r\n-webkit-animation-iteration-count: 1;\r\n        animation-iteration-count: 1;\r\nanimation-direction: alternate-reverse;\r\n}\r\n\r\n/* Safari 4.0 - 8.0 */\r\n\r\n@-webkit-keyframes example {\r\n    0%   {background-color:red; left:0px; top:0px;}\r\n    25%  {background-color:yellow; left:200px; top:0px;}\r\n    50%  {background-color:blue; left:200px; top:200px;}\r\n    75%  {background-color:green; left:0px; top:200px;}\r\n    100% {background-color:red; left:0px; top:0px;}\r\n  }\r\n\r\n/* Standard syntax */\r\n\r\n@keyframes example {\r\n    0%   {background-color:red; left:0px; top:0px;}\r\n    25%  {background-color:yellow; left:200px; top:0px;}\r\n    50%  {background-color:blue; left:200px; top:200px;}\r\n    75%  {background-color:green; left:0px; top:200px;}\r\n    100% {background-color:red; left:0px; top:0px;}\r\n  }\r\n\r\nlabel{\r\n    font-weight: bolder;\r\n}\r\n\r\n.form{\r\n    width:100%;\r\n    padding:20px;\r\n    border-radius:10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi9zaWduLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxTQUFTO0lBQ1QsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7QUFHdEIsdURBQXVEO0FBQ3ZELG1FQUFtRTtBQUNuRTtnQkFDZ0I7QUFDaEIsa0JBQWtCO0FBQ2xCLDJCQUEyQjtBQUMzQiwrQkFBdUI7UUFBdkIsdUJBQXVCO0FBQ3ZCLDhCQUFzQjtRQUF0QixzQkFBc0I7QUFDdEIsb0NBQTRCO1FBQTVCLDRCQUE0QjtBQUM1QixzQ0FBc0M7QUFDdEM7O0FBRUEscUJBQXFCOztBQUNyQjtJQUNJLE1BQU0sb0JBQW9CLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztJQUM5QyxNQUFNLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUM7SUFDbkQsTUFBTSxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDO0lBQ25ELE1BQU0sc0JBQXNCLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQztJQUNsRCxNQUFNLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7RUFDaEQ7O0FBRUEsb0JBQW9COztBQUNwQjtJQUNFLE1BQU0sb0JBQW9CLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztJQUM5QyxNQUFNLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUM7SUFDbkQsTUFBTSxxQkFBcUIsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDO0lBQ25ELE1BQU0sc0JBQXNCLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQztJQUNsRCxNQUFNLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUM7RUFDaEQ7O0FBRUY7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NpZ24vc2lnbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZ25VcHtcclxuICAgIGJvcmRlcjoxMHB4IHJlZDtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYzLDE1NSwxNTQsMC40KTtcclxuICAgIHdpZHRoOjIwJTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgbWFyZ2luLXRvcDoyMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDYzcHggLTIwcHggMzlweCA4N3B4IHJnYmEoMjE5LDIxMCwyMTksMC41Nyk7XHJcbi1tb3otYm94LXNoYWRvdzogNjNweCAtMjBweCAzOXB4IDg3cHggcmdiYSgyMTksMjEwLDIxOSwwLjU3KTtcclxuYm94LXNoYWRvdzogNjNweCAtMjBweCAzOXB4IDg3cHggcmdiYSgyMTksMjEwLDIxOSwwLjU3KTtcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCM4MmIxZmYsIzI5NzlmZiwjMjk2MmZmKTtcclxuLyogd2lkdGg6IDEwMHB4O1xyXG5oZWlnaHQ6IDEwMHB4OyAqL1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8qIGJhY2tncm91bmQtY29sb3I6IHJlZDsgKi9cclxuYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XHJcbmFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbmFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcbmFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZS1yZXZlcnNlO1xyXG59XHJcblxyXG4vKiBTYWZhcmkgNC4wIC0gOC4wICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBleGFtcGxlIHtcclxuICAgIDAlICAge2JhY2tncm91bmQtY29sb3I6cmVkOyBsZWZ0OjBweDsgdG9wOjBweDt9XHJcbiAgICAyNSUgIHtiYWNrZ3JvdW5kLWNvbG9yOnllbGxvdzsgbGVmdDoyMDBweDsgdG9wOjBweDt9XHJcbiAgICA1MCUgIHtiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7IGxlZnQ6MjAwcHg7IHRvcDoyMDBweDt9XHJcbiAgICA3NSUgIHtiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuOyBsZWZ0OjBweDsgdG9wOjIwMHB4O31cclxuICAgIDEwMCUge2JhY2tncm91bmQtY29sb3I6cmVkOyBsZWZ0OjBweDsgdG9wOjBweDt9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0YW5kYXJkIHN5bnRheCAqL1xyXG4gIEBrZXlmcmFtZXMgZXhhbXBsZSB7XHJcbiAgICAwJSAgIHtiYWNrZ3JvdW5kLWNvbG9yOnJlZDsgbGVmdDowcHg7IHRvcDowcHg7fVxyXG4gICAgMjUlICB7YmFja2dyb3VuZC1jb2xvcjp5ZWxsb3c7IGxlZnQ6MjAwcHg7IHRvcDowcHg7fVxyXG4gICAgNTAlICB7YmFja2dyb3VuZC1jb2xvcjpibHVlOyBsZWZ0OjIwMHB4OyB0b3A6MjAwcHg7fVxyXG4gICAgNzUlICB7YmFja2dyb3VuZC1jb2xvcjpncmVlbjsgbGVmdDowcHg7IHRvcDoyMDBweDt9XHJcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOnJlZDsgbGVmdDowcHg7IHRvcDowcHg7fVxyXG4gIH1cclxuXHJcbmxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uZm9ybXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/sign/sign.component.ts":
/*!****************************************!*\
  !*** ./src/app/sign/sign.component.ts ***!
  \****************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SignComponent = class SignComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.signupform = this.fb.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    sent() {
        // alert('hai')
        console.log(this.signupform);
    }
};
SignComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sign',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign/sign.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign.component.css */ "./src/app/sign/sign.component.css")).default]
    })
], SignComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\sample\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map