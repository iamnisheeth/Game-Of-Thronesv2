(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading{\r\n    color:white;\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \">\n  <nav class=\"navbar navbar-light text-center fixed-top\" style=\"background-color: #325465;\">\n      <a class=\"navbar-brand text-center\" style=\"font-size: 2rem;  text-align: center; color:aquamarine;\">\n          <a href=\"#\" class=\"heading\"><h2>Game Of Thrones</h2></a>\n      </a>\n     \n    \n  </nav>\n</div>\n\n<img src=\"./assets/main.jpg\" class=\"img-fluid\" style=\"height:80vh; width: 100%;\" alt=\"no images\">\n<br>\n<br>\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _house_house_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./house/house.component */ "./src/app/house/house.component.ts");
/* harmony import */ var _character_character_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./character/character.component */ "./src/app/character/character.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _sort_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sort.pipe */ "./src/app/sort.pipe.ts");
/* harmony import */ var _select_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./select.pipe */ "./src/app/select.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _house_house_component__WEBPACK_IMPORTED_MODULE_7__["HouseComponent"],
                _character_character_component__WEBPACK_IMPORTED_MODULE_8__["CharacterComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_9__["BookComponent"],
                _sort_pipe__WEBPACK_IMPORTED_MODULE_10__["SortPipe"],
                _select_pipe__WEBPACK_IMPORTED_MODULE_11__["SelectPipe"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: "app-home",
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
                    },
                    {
                        path: "book/:booknumber",
                        component: _book_book_component__WEBPACK_IMPORTED_MODULE_9__["BookComponent"]
                    },
                    {
                        path: "house/:housenumber",
                        component: _house_house_component__WEBPACK_IMPORTED_MODULE_7__["HouseComponent"]
                    },
                    {
                        path: "character/:characternumber",
                        component: _character_character_component__WEBPACK_IMPORTED_MODULE_8__["CharacterComponent"]
                    },
                    {
                        path: "",
                        redirectTo: "app-home",
                        pathMatch: "full"
                    }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head{\r\n    background-color:#325465;\r\n     text-align: center;\r\n     color:white;\r\n}\r\n.cardd{\r\n    margin-bottom:2vh;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}"

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"currentData\">\n    <div class=\"col-12\">\n\n        <div class=\"col-md-12\"><a href=\"#\" ><button class=\"btn btn-warning\" >Go back</button></a></div>\n\n      <div class=\"card  cardd \">\n\n        \n        <div class=\"card-body\" *ngIf=\"currentData.name\">\n            <h5 class=\"card-header head\">Name of Books</h5>\n          <h5 class=\"card-title\">{{currentData.name}}</h5>\n\n        </div>\n\n       \n        <div class=\"card-body \" *ngIf=\"currentData.isbn\">\n            <h5 class=\"card-header head\">ISBN</h5>\n          <h5 class=\"card-title\">{{currentData.isbn}}</h5>\n\n        </div>\n       \n\n        <div class=\"card-body\" *ngIf=\"currentData.authors?.length>0\">\n        <h5 class=\"card-header head\">Authors</h5>\n        <div class=\"card-body\" *ngFor=\"let i of  currentData.authors\">\n          <h5 class=\"card-title\">{{i}}</h5>\n\n        </div>\n        </div>\n\n\n       \n        <div class=\"card-body\" *ngIf=\"currentData.numberOfPages\">\n            <h5 class=\"card-header head\">Number of pages</h5>\n          <h5 class=\"card-title\">{{currentData.numberOfPages\n          }}</h5>\n\n        </div>\n       \n        <div class=\"card-body\" *ngIf=\"currentData.publisher\">\n            <h5 class=\"card-header head\">Publishers</h5>\n          <h5 class=\"card-title\">{{currentData.publisher}}</h5>\n\n        </div>\n\n        \n        <div class=\"card-body\" *ngIf=\"currentData.released\">\n            <h5 class=\"card-header head\">Released Date</h5>\n          <h5 class=\"card-title\">{{currentData.released | date}}</h5>\n\n        </div>\n\n       \n        <div class=\"card-body\" *ngIf=\"currentData.Country\">\n            <h5 class=\"card-header head\">Country</h5>\n          <h5 class=\"card-title\">{{currentData.country}}</h5>\n\n        </div>\n       <div class=\"card-body\" *ngIf=\"currentData.characters?.length>0\">\n        <h5 class=\"card-header head\">characters</h5>\n        <div class=\"card-body\" *ngFor=\"let i of  currentData.characters\">\n          <h5 class=\"card-title\">{{i}}</h5>\n\n        </div>\n      </div>\n\n\n\n\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch-api.service */ "./src/app/fetch-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = /** @class */ (function () {
    function BookComponent(_route, router, ApiService) {
        this._route = _route;
        this.router = router;
        this.ApiService = ApiService;
        console.log("view individual data component constructor is called");
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("individual view ngOnInit is called");
        var id = this._route.snapshot.paramMap.get('booknumber');
        this.currentData = this.ApiService.getSingleBooks(id).subscribe(function (data) {
            console.log("logging data");
            _this.currentData = data;
            console.log(_this.currentData);
        }, function (error) {
            console.log("error");
        });
    };
    BookComponent.prototype.ngOnDestroy = function () {
        console.log("view -component ngonDestroy is called");
    };
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _fetch_api_service__WEBPACK_IMPORTED_MODULE_1__["FetchApiService"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/character/character.component.css":
/*!***************************************************!*\
  !*** ./src/app/character/character.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head{\r\n    background-color:#325465;\r\n     text-align: center;\r\n     color:white;\r\n}\r\n\r\n.cardd{\r\n    margin-bottom:2vh;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}"

/***/ }),

/***/ "./src/app/character/character.component.html":
/*!****************************************************!*\
  !*** ./src/app/character/character.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row\" *ngIf=\"currentData\">\n      <div class=\"col-12\">\n            <div class=\"col-md-12\"><a href=\"#\" ><button class=\"btn btn-warning\" >Go back</button></a></div>\n\n          <div class=\"card cardd\">\n\n\n                  \n                  <div class=\"card-body\" *ngIf=\"currentData.name\">\n  \n                      <span *ngIf=\"currentData.name; then ifblock\"></span>\n                      <ng-template #ifblock>\n                            <h5 class=\"card-header head \">Name of character</h5>\n                              <h5 class=\"card-title\">{{currentData.name}}</h5>\n                          \n                      </ng-template>\n                     \n                   </div>\n\n\n\n\n                 \n                  <div class=\"card-body\" *ngIf=\"currentData.gender\">\n  \n                     <span *ngIf=\"currentData.gender; then ifblock\"></span>\n                      <ng-template #ifblock>\n                            <h5 class=\"card-header head \">Gender</h5>\n                              <h5 class=\"card-title\">{{currentData.gender}}</h5>\n                          \n                      </ng-template>\n                \n  \n                  </div>\n\n            \n              \n              \n            \n\n              <div class=\"card-body\" *ngIf=\"currentData.titles?.length>0\">\n                   \n                  <span *ngIf=\"currentData.titles[0]; then ifblock\"></span>\n                  <ng-template #ifblock>\n                      <h5 class=\"card-header head \">titles</h5>\n                      <div *ngFor=\"let i of  currentData.titles\">\n                          <h5 class=\"card-title\">{{i}}</h5>\n                      </div>\n                  </ng-template>\n               \n               \n        \n              </div>\n             \n           \n\n              <div class=\"card-body\" *ngIf=\"currentData.aliases?.length>0\">\n    \n                  <span *ngIf=\"currentData.aliases[0]; then ifblock\"></span>\n                  <ng-template #ifblock>\n                      <h5 class=\"card-header head \">aliases</h5>\n                      <div *ngFor=\"let i of  currentData.aliases\">\n                          <h5 class=\"card-title\">{{i}}</h5>\n                      </div>\n                  </ng-template>\n                \n                 \n        \n              </div>\n             \n             \n             \n            \n            \n\n              <div class=\"card-body\" *ngIf=\"currentData.books?.length>0\">\n                    \n                  <span *ngIf=\"currentData.books[0]; then ifblock\"></span>\n                  <ng-template #ifblock>\n                      <h5 class=\"card-header head \">books</h5>\n                      <div *ngFor=\"let i of  currentData.books\">\n                          <h5 class=\"card-title\">{{i}}</h5>\n                      </div>\n                  </ng-template>\n                \n            \n        \n              </div>\n\n          \n                \n              \n \n              <div class=\"card-body\" *ngIf=\"currentData.allegiances?.length>0\">\n                   \n                  <span *ngIf=\"currentData.allegiances[0]; then ifblock\"></span>\n                  <ng-template #ifblock>\n                      <h5 class=\"card-header head \">allegiances</h5>\n                      <div *ngFor=\"let i of  currentData.allegiances\">\n                          <h5 class=\"card-title\">{{i}}</h5>\n                      </div>\n                  </ng-template>\n                \n                 \n        \n              </div>\n\n             \n             \n\n              <div class=\"card-body\">\n                    <div *ngIf=\"currentData.tvSeries?.length>0\"> \n                  <span *ngIf=\"currentData.tvSeries[0]; then ifblock\"></span>\n                  <ng-template #ifblock>\n                      <h5 class=\"card-header head \">tvSeries</h5>\n                      <div *ngFor=\"let i of  currentData.tvSeries\">\n                          <h5 class=\"card-title\">{{i}}</h5>\n                      </div>\n                  </ng-template>\n                \n                  </div>\n        \n              </div>\n              \n                \n            \n\n        \n\n              <div class=\"card-body\">\n                    <div *ngIf=\"currentData.playedBy?.length>0\"> \n                  <span *ngIf=\"currentData.playedBy[0]; then ifblock\"></span>\n                  <ng-template #ifblock>\n                      <h5 class=\"card-header head \">playedBy</h5>\n                      <div *ngFor=\"let i of  currentData.playedBy\">\n                          <h5 class=\"card-title\">{{i}}</h5>\n                      </div>\n                  </ng-template>\n                \n                  </div>\n        \n              </div>\n\n\n          \n\n\n\n\n\n\n\n\n\n\n\n\n\n          </div>\n\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/character/character.component.ts":
/*!**************************************************!*\
  !*** ./src/app/character/character.component.ts ***!
  \**************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch-api.service */ "./src/app/fetch-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterComponent = /** @class */ (function () {
    function CharacterComponent(_route, router, ApiService) {
        this._route = _route;
        this.router = router;
        this.ApiService = ApiService;
        console.log("view individual character component constructor is called");
    }
    CharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("individual character ngOnInit is called");
        var id = this._route.snapshot.paramMap.get('characternumber');
        this.currentData = this.ApiService.getSingleCharacter(id).subscribe(function (data) {
            console.log("logging data");
            _this.currentData = data;
            console.log(_this.currentData);
        }, function (error) {
            console.log("error");
        });
    };
    CharacterComponent.prototype.ngOnDestroy = function () {
        console.log("view -component ngonDestroy is called");
    };
    CharacterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character',
            template: __webpack_require__(/*! ./character.component.html */ "./src/app/character/character.component.html"),
            styles: [__webpack_require__(/*! ./character.component.css */ "./src/app/character/character.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _fetch_api_service__WEBPACK_IMPORTED_MODULE_1__["FetchApiService"]])
    ], CharacterComponent);
    return CharacterComponent;
}());



/***/ }),

/***/ "./src/app/fetch-api.service.ts":
/*!**************************************!*\
  !*** ./src/app/fetch-api.service.ts ***!
  \**************************************/
/*! exports provided: FetchApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchApiService", function() { return FetchApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FetchApiService = /** @class */ (function () {
    function FetchApiService(http) {
        this.http = http;
        this.BaseUrl = "https://www.anapioficeandfire.com/api/";
        console.log("http service was called");
    }
    //method to get all books
    FetchApiService.prototype.getAllBooks = function () {
        var myResponse = this.http.get(this.BaseUrl + 'books').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
        return myResponse;
    };
    //method to get single books
    FetchApiService.prototype.getSingleBooks = function (currentBookNumber) {
        var myResponse = this.http.get(this.BaseUrl + 'books/' + currentBookNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
        return myResponse;
    };
    FetchApiService.prototype.getAllCharacters = function () {
        var myResponse = this.http.get(this.BaseUrl + 'characters').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
        return myResponse;
    };
    FetchApiService.prototype.getAllHouses = function () {
        var myResponse = this.http.get(this.BaseUrl + 'houses').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
        return myResponse;
    };
    FetchApiService.prototype.getSingleCharacter = function (currentCharacterNumber) {
        var myResponse = this.http.get(this.BaseUrl + 'characters/' + currentCharacterNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
        return myResponse;
    };
    FetchApiService.prototype.getSingleHouse = function (currentHouseNumber) {
        var myResponse = this.http.get(this.BaseUrl + 'houses/' + currentHouseNumber).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
        return myResponse;
    };
    FetchApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FetchApiService);
    return FetchApiService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardd{\r\n    margin-bottom:2vh;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"row\">\n           \n            <div class=\"col-md-6 col-sm-12 col-xs-12\">\n               <h5>View By:\n                <select [(ngModel)]=\"view\" >\n                    <option value=\"\"  [selected]=\"\" style=\"color: black\">All</option>\n                    <option value=\"characters\" style=\"color: black\">Characters</option>\n                    <option value=\"houses\" style=\"color: black\">Houses</option>\n                    <option value=\"books\" style=\"color: black\">Books</option>\n                </select>\n            </h5> \n            </div>\n        </div>\n    \n    \n        <div class=\"row\" *ngIf=\"allbookdata.length>0\">\n            <div *ngFor=\"let data of allData |select:view |sort \" class=\"col-lg-4 col-md-6 \">\n    \n    \n    \n    \n                <div *ngIf=\"data.isbn\">\n                    <div class=\"card cardd\">\n                        <div class=\"card-body\">\n                            <img class=\"card-img-top img-thumbnai \" src=\"./assets/books.jpg\" height=\"200px\" alt=\"Card image cap\">\n                            <h5 class=\"card-title\" style=\"text-align: center;\">Books</h5>\n                            <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\">\n                                    <h5 class=\"card-title\">Book Name: {{data.name}}</h5>\n                                </li>\n                                <li class=\"list-group-item\">\n                                    <h5>Authors: {{data.authors }}</h5>\n                                </li>\n                                <li class=\"list-group-item\">\n                                    <h5>Publisher: {{data.publisher}}</h5>\n                                </li>\n                                <li class=\"list-group-item\">\n                                    <h5>Released: {{data.released | date}}</h5>\n                                </li>\n                            </ul>\n                            <a [routerLink]=\"['/book',data.url.split('/').pop()]\" class=\"btn btn-primary\">Knoe More</a>\n                        </div>\n                    </div>\n                </div>\n    \n    \n                <div *ngIf=\"data.gender\">\n                    <div class=\"card cardd\">\n                        <div class=\"card-body\">\n                            <img class=\"card-img-top img-thumbnai \" src=\"./assets/character.png\" height=\"200px\" alt=\"Card image cap\">\n                            <h5 class=\"card-title\" style=\"text-align: center;\">Character</h5>\n                            <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\">\n                                    <h5 class=\"card-title\">Alises Name: {{data.aliases}}</h5>\n                                </li>\n                                <li class=\"list-group-item\">\n                                    <h5>Character name:\n                                        <span *ngIf=\"data.name; then ifblock else elseblock\"></span>\n                                        <hr>\n                                        <ng-template #ifblock>{{data.name}}</ng-template>\n                                        <ng-template #elseblock>Not Available</ng-template>\n                                    </h5>\n                                </li>\n                                <li class=\"list-group-item\">\n                                    <h5>Gender: {{data.gender}}</h5>\n                                </li>\n                            </ul>\n                            <a [routerLink]=\"['/character',data.url.split('/').pop()]\" class=\"btn btn-primary\">Know More</a>\n                        </div>\n                    </div>\n                </div>\n    \n    \n                <div *ngIf=\"data.region || data.coatOfArms\">\n                    <div class=\"card cardd\">\n                        <div class=\"card-body\">\n                            <img class=\"card-img-top img-thumbnai \" src=\"./assets/house.jpg\" height=\"200px\" alt=\"Card image cap\">\n                            <h5 class=\"card-title\" style=\"text-align: center;\">House</h5>\n                            <ul class=\"list-group list-group-flush\">\n                                <li class=\"list-group-item\">\n                                    <h5 class=\"card-title\">House name: {{data.name}}</h5>\n                                </li>\n    \n                                <li class=\"list-group-item\">\n                                    <h5>Region: {{data.region}}</h5>\n                                </li>\n                            </ul>\n                            <a [routerLink]=\"['/house',data.url.split('/').pop()]\" class=\"btn btn-primary\">Know More</a>\n                        </div>\n                    </div>\n                </div>\n    \n    \n    \n    \n    \n            </div>\n        </div>\n    \n    \n    \n    \n    \n    \n    \n    \n    \n    \n    </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch-api.service */ "./src/app/fetch-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(Apiservice) {
        this.Apiservice = Apiservice;
        this.allcharactersdata = [];
        this.allbookdata = [];
        this.allhousesdata = [];
        this.allData = [];
        console.log("view individual data component constructor is called");
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("home -component ngonint is called");
        this.allbookdata = this.Apiservice.getAllBooks().subscribe(function (data) {
            console.log("logging data");
            _this.allData = _this.allData.concat(data);
            _this.allbookdata = data;
            console.log(_this.allData);
        }, function (error) {
            console.log("error");
        });
        this.allcharactersdata = this.Apiservice.getAllCharacters().subscribe(function (data) {
            console.log("logging data");
            _this.allData = _this.allData.concat(data);
            _this.allcharactersdata = data;
            console.log(_this.allData);
        }, function (error) {
            console.log("error");
        });
        this.allhousesdata = this.Apiservice.getAllHouses().subscribe(function (data) {
            console.log("logging data");
            _this.allData = _this.allData.concat(data);
            console.log(_this.allData);
            _this.allhousesdata = data;
        }, function (error) {
            console.log("error");
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        console.log("home -component ngonDestroy is called");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_fetch_api_service__WEBPACK_IMPORTED_MODULE_1__["FetchApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/house/house.component.css":
/*!*******************************************!*\
  !*** ./src/app/house/house.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head{\r\n    background-color:#325465;\r\n     text-align: center;\r\n     color:white;\r\n}\r\n\r\n.cardd{\r\n    margin-bottom:2vh;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}"

/***/ }),

/***/ "./src/app/house/house.component.html":
/*!********************************************!*\
  !*** ./src/app/house/house.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" *ngIf=\"currentData\">\n    <div class=\"col-12\">\n        <div class=\"col-md-12\"><a href=\"#\" ><button class=\"btn btn-warning\" >Go back</button></a></div>\n\n      <div class=\"card cardd \">\n\n\n\n\n\n\n        <div *ngIf=\"currentData.name\">\n          <h5 class=\"card-header head \">Name of House </h5>\n          <div class=\"card-body\">\n\n            <h5 class=\"card-title\">{{currentData.name}}</h5>\n\n          </div>\n        </div>\n\n\n        <div *ngIf=\"currentData.region\">\n          <h5 class=\"card-header head \">Regions </h5>\n          <div class=\"card-body\">\n\n            <h5 class=\"card-title\">{{currentData.region}}</h5>\n\n          </div>\n        </div>\n\n        <div *ngIf=\"currentData.overlord\">\n          <h5 class=\"card-header head \">Over Lord </h5>\n          <div class=\"card-body\">\n\n            <h5 class=\"card-title\">{{currentData.overlord}}</h5>\n\n          </div>\n        </div>\n\n        <div *ngIf=\"currentData.words\n        \">\n          <h5 class=\"card-header head \">words\n          </h5>\n          <div class=\"card-body\">\n\n            <h5 class=\"card-title\">{{currentData.words }}\n            </h5>\n\n          </div>\n        </div>\n        <div *ngIf=\"currentData.coatOfArms\">\n          <h5 class=\"card-header head \">Coat of arms </h5>\n          <div class=\"card-body\">\n\n            <h5 class=\"card-title\">{{currentData.coatOfArms}}</h5>\n\n          </div>\n        </div>\n\n        <div *ngIf=\"currentData.currentLord\">\n          <h5 class=\"card-header head \">current Lord </h5>\n          <div class=\"card-body\">\n\n            <h5 class=\"card-title\">{{currentData.currentLord}}</h5>\n\n          </div>\n        </div>\n\n\n        <div *ngIf=\"currentData.founded\n                \">\n          <h5 class=\"card-header head \">founded\n          </h5>\n          <div class=\"card-body\">\n\n            <h5 class=\"card-title\">{{currentData.founded }}\n            </h5>\n\n          </div>\n        </div>\n\n\n        <div *ngIf=\"currentData.founder\n\n                \">\n          <h5 class=\"card-header head \">founder\n\n          </h5>\n          <div class=\"card-body\">\n\n            <h5 class=\"card-title\">{{currentData.founder }}\n\n            </h5>\n\n          </div>\n        </div>\n\n\n        <div *ngIf=\"currentData.heir\n\n                \">\n          <h5 class=\"card-header head \">heir\n\n          </h5>\n          <div class=\"card-body\">\n\n            <h5 class=\"card-title\">{{currentData.heir }}\n\n            </h5>\n\n          </div>\n        </div>\n\n       \n        <div class=\"card-body\">\n            <div *ngIf=\"currentData.cadetBranches?.length>0\"> \n          <span *ngIf=\"currentData.cadetBranches[0]; then ifblock\"></span>\n          <hr>\n          <ng-template #ifblock>\n              <h5 class=\"card-header head \">cadetBranches</h5>\n              <div *ngFor=\"let i of  currentData.cadetBranchess\">\n                  <h5 class=\"card-title\">{{i}}</h5>\n              </div>\n          </ng-template>\n        \n          </div>\n\n      </div>\n\n\n       \n        <div class=\"card-body\">\n            <div *ngIf=\"currentData.titles?.length>0\"> \n          <span *ngIf=\"currentData.titles[0]; then ifblock\"></span>\n          <hr>\n          <ng-template #ifblock>\n              <h5 class=\"card-header head \">titles</h5>\n              <div *ngFor=\"let i of  currentData.titles\">\n                  <h5 class=\"card-title\">{{i}}</h5>\n              </div>\n          </ng-template>\n         \n          </div>\n\n      </div>\n\n        \n        \n\n        <div class=\"card-body\">\n            <div *ngIf=\"currentData.seats?.length>0\"> \n          <span *ngIf=\"currentData.seats[0]; then ifblock \"></span>\n          <hr>\n          <ng-template #ifblock>\n              <h5 class=\"card-header head \">seats</h5>\n              <div *ngFor=\"let i of  currentData.seats\">\n                  <h5 class=\"card-title\">{{i}}</h5>\n              </div>\n          </ng-template>\n        \n          </div>\n\n      </div>\n\n\n        \n\n        \n              <div class=\"card-body\">\n                    <div *ngIf=\"currentData.swornMembers?.length>0\"> \n                  <span *ngIf=\"currentData.swornMembers[0]; then ifblock \"></span>\n                  <hr>\n                  <ng-template #ifblock>\n                      <h5 class=\"card-header head \">swornMembers</h5>\n                      <div *ngFor=\"let i of  currentData.swornMembers\">\n                          <h5 class=\"card-title\">{{i}}</h5>\n                      </div>\n                  </ng-template>\n                \n                  </div>\n\n                  \n\n              </div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/house/house.component.ts":
/*!******************************************!*\
  !*** ./src/app/house/house.component.ts ***!
  \******************************************/
/*! exports provided: HouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseComponent", function() { return HouseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fetch_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch-api.service */ "./src/app/fetch-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HouseComponent = /** @class */ (function () {
    function HouseComponent(_route, router, ApiService) {
        this._route = _route;
        this.router = router;
        this.ApiService = ApiService;
        console.log("view individual data component constructor is called");
    }
    HouseComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("individual view ngOnInit is called");
        var id = this._route.snapshot.paramMap.get('housenumber');
        this.currentData = this.ApiService.getSingleHouse(id).subscribe(function (data) {
            console.log("logging data");
            _this.currentData = data;
            console.log(_this.currentData);
        }, function (error) {
            console.log("error");
        });
    };
    HouseComponent.prototype.ngOnDestroy = function () {
        console.log("view -component ngonDestroy is called");
    };
    HouseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-house',
            template: __webpack_require__(/*! ./house.component.html */ "./src/app/house/house.component.html"),
            styles: [__webpack_require__(/*! ./house.component.css */ "./src/app/house/house.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _fetch_api_service__WEBPACK_IMPORTED_MODULE_1__["FetchApiService"]])
    ], HouseComponent);
    return HouseComponent;
}());



/***/ }),

/***/ "./src/app/select.pipe.ts":
/*!********************************!*\
  !*** ./src/app/select.pipe.ts ***!
  \********************************/
/*! exports provided: SelectPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPipe", function() { return SelectPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SelectPipe = /** @class */ (function () {
    function SelectPipe() {
    }
    SelectPipe.prototype.transform = function (value, args) {
        if (!args)
            return value;
        else if (args == "characters") {
            return value.filter(function (it) {
                if (it.gender)
                    return it;
            });
        }
        else if (args == "houses") {
            return value.filter(function (it) {
                if (it.region || it.coatOfArms)
                    return it;
            });
        }
        else {
            return value.filter(function (it) {
                if (it.isbn)
                    return it;
            });
        }
    };
    SelectPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'select'
        })
    ], SelectPipe);
    return SelectPipe;
}());



/***/ }),

/***/ "./src/app/sort.pipe.ts":
/*!******************************!*\
  !*** ./src/app/sort.pipe.ts ***!
  \******************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (value, args) {
        value.sort(function (x, y) {
            if (x.name < y.name) {
                return -1;
            }
            else if (x.name > y.name) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return value;
    };
    SortPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sort'
        })
    ], SortPipe);
    return SortPipe;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! B:\lets study\edwisor pdf\assignment\assignment 8 Basic angular\Game-of-Thrownsv2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map