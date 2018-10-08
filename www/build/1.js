webpackJsonp([1],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__orders_orders__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__current_order_current_order__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coffees_coffees__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drinks_drinks__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__food_food__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__previous_order_previous_order__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quantity_ticker_quantity_ticker__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stock_item_stock_item__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__milk_type_milk_type__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__syrup_type_syrup_type__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sweetner_type_sweetner_type__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__coffee_config_coffee_config__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__scrollable_tabs_scrollable_tabs__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__orders_orders__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_3__current_order_current_order__["a" /* CurrentOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__coffees_coffees__["a" /* CoffeesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__drinks_drinks__["a" /* DrinksComponent */],
                __WEBPACK_IMPORTED_MODULE_6__food_food__["a" /* FoodComponent */],
                __WEBPACK_IMPORTED_MODULE_7__previous_order_previous_order__["a" /* PreviousOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__quantity_ticker_quantity_ticker__["a" /* QuantityTickerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__stock_item_stock_item__["a" /* StockItemComponent */],
                __WEBPACK_IMPORTED_MODULE_10__milk_type_milk_type__["a" /* MilkTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__syrup_type_syrup_type__["a" /* SyrupTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sweetner_type_sweetner_type__["a" /* SweetnerTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__coffee_config_coffee_config__["a" /* CoffeeConfigComponent */],
                __WEBPACK_IMPORTED_MODULE_14__scrollable_tabs_scrollable_tabs__["a" /* ScrollableTabsComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__orders_orders__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_3__current_order_current_order__["a" /* CurrentOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_4__coffees_coffees__["a" /* CoffeesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__drinks_drinks__["a" /* DrinksComponent */],
                __WEBPACK_IMPORTED_MODULE_6__food_food__["a" /* FoodComponent */],
                __WEBPACK_IMPORTED_MODULE_7__previous_order_previous_order__["a" /* PreviousOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__quantity_ticker_quantity_ticker__["a" /* QuantityTickerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__stock_item_stock_item__["a" /* StockItemComponent */],
                __WEBPACK_IMPORTED_MODULE_10__milk_type_milk_type__["a" /* MilkTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__syrup_type_syrup_type__["a" /* SyrupTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__sweetner_type_sweetner_type__["a" /* SweetnerTypeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__coffee_config_coffee_config__["a" /* CoffeeConfigComponent */],
                __WEBPACK_IMPORTED_MODULE_14__scrollable_tabs_scrollable_tabs__["a" /* ScrollableTabsComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = /** @class */ (function () {
    function OrdersComponent() {
        this.orderList = [];
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], OrdersComponent.prototype, "orderList", void 0);
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'orders',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/components/orders/orders.html"*/'<!-- Generated template for the OrdersComponent component -->\n<div>\n  Orders\n</div>\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/components/orders/orders.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrentOrderComponent = /** @class */ (function () {
    function CurrentOrderComponent() {
        this.customers = [
            { id: 10001, name: 'Luanna Freeth', balance: -32, orders: [] },
            { id: 10002, name: 'Leah Ropati', balance: 0, orders: [] },
            { id: 10003, name: 'Anita Vogel', balance: 0, orders: [] },
            { id: 10004, name: 'Sam Pule', balance: 0, orders: [] },
            { id: 10005, name: 'Bubz Chancui', balance: -12, orders: [] },
            { id: 10006, name: 'Amanda Hindt', balance: -4, orders: [] },
            { id: 10007, name: 'Camilla Ngatai', balance: 32, orders: [] },
        ];
    }
    CurrentOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'current-order',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/components/current-order/current-order.html"*/'<div padding>\n  <h4>Current Order:</h4>\n\n  <!-- customer -->\n  <ion-item>\n    <ion-label>Customer</ion-label>\n\n    <ion-select [(ngModel)]="customer">\n      <ion-option *ngFor="let customer of customers" [value]="customer"></ion-option>\n    </ion-select>\n\n  </ion-item>\n\n  <previous-order></previous-order>\n</div>\n\n\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/components/current-order/current-order.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CurrentOrderComponent);
    return CurrentOrderComponent;
}());

//# sourceMappingURL=current-order.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoffeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoffeesComponent = /** @class */ (function () {
    function CoffeesComponent() {
        this.coffeeList = [
            { name: 'late', params: [], quantity: 1 },
            { name: 'flat-white', params: [], quantity: 1 },
            { name: 'cappaccino', params: [], quantity: 1 },
            { name: 'mochaccino', params: [], quantity: 1 },
            { name: 'hot chocolate', params: [], quantity: 1 },
        ];
    }
    CoffeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'coffees',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/components/coffees/coffees.html"*/'<div class="coffees">\n  <!-- <div class="coffees-header" (click)="toggleView=!toggleView">\n    <h4>Coffees</h4>\n  </div> -->\n  <div class="coffees-list">\n    <ul class="coffees-list-ul">\n      <li class="coffees-list-li" *ngFor="let coffee of coffeeList">\n        <stock-item [item]="coffee"></stock-item>\n      </li>\n    </ul>\n  </div>\n</div>\n\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/components/coffees/coffees.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CoffeesComponent);
    return CoffeesComponent;
}());

//# sourceMappingURL=coffees.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the DrinksComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DrinksComponent = /** @class */ (function () {
    function DrinksComponent() {
        console.log('Hello DrinksComponent Component');
        this.text = 'Hello World';
    }
    DrinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'drinks',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/components/drinks/drinks.html"*/'<div class="drinks">\n  <div class="drinks-header" (click)="toggleDrinks=!toggleDrinks">\n    <h4>Drinks</h4>\n  </div>\n  <div class="drinks-list" *ngIf="toggleDrinks">\n    <ul>\n      <li>Ice Tea</li>\n      <li>Late\'</li>\n      <li>Flat white</li>\n      <li>Flat white</li>\n    </ul>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/components/drinks/drinks.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DrinksComponent);
    return DrinksComponent;
}());

//# sourceMappingURL=drinks.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoodComponent = /** @class */ (function () {
    function FoodComponent() {
    }
    FoodComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'food',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/components/food/food.html"*/'<div class="food">\n  <div class="food-header" (click)="toggleFood=!toggleFood">\n    <h4>Food</h4>\n  </div>\n  <div class="food-list" *ngIf="toggleFood">\n    <ul>\n      <li>Ice Tea</li>\n      <li>Late\'</li>\n      <li>Flat white</li>\n      <li>Flat white</li>\n    </ul>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/components/food/food.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], FoodComponent);
    return FoodComponent;
}());

//# sourceMappingURL=food.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PreviousOrderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PreviousOrderComponent = /** @class */ (function () {
    function PreviousOrderComponent() {
        console.log('Hello PreviousOrderComponent Component');
        this.text = 'Hello World';
    }
    PreviousOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'previous-order',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/components/previous-order/previous-order.html"*/'<div>\n  <p>previous order:</p>\n</div>\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/components/previous-order/previous-order.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PreviousOrderComponent);
    return PreviousOrderComponent;
}());

//# sourceMappingURL=previous-order.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantityTickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuantityTickerComponent = /** @class */ (function () {
    function QuantityTickerComponent() {
        this.changeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.count = 0;
    }
    QuantityTickerComponent.prototype.add = function () {
        this.count++;
        this.changeEvent.emit(this.count);
    };
    QuantityTickerComponent.prototype.minus = function () {
        if (this.count == 0) {
            return;
        }
        this.count--;
        this.changeEvent.emit(this.count);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], QuantityTickerComponent.prototype, "changeEvent", void 0);
    QuantityTickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'quantity-ticker',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/components/quantity-ticker/quantity-ticker.html"*/'<div class="quantity-ticker">\n  <!-- minus -->\n  <a class="quantity-ticker-btn" (click)="minus()">\n    <ion-icon dark ios="ios-remove-circle" md="md-remove-circle"></ion-icon>\n  </a>\n\n  <!-- count -->\n  <div class="quantity-ticker-value">{{count}}</div>\n\n  <!-- add -->\n  <a class="quantity-ticker-btn" (click)="add()">\n    <ion-icon dark ios="ios-add-circle" md="md-add-circle"></ion-icon>\n  </a>\n\n</div>\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/components/quantity-ticker/quantity-ticker.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], QuantityTickerComponent);
    return QuantityTickerComponent;
}());

//# sourceMappingURL=quantity-ticker.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StockItemComponent = /** @class */ (function () {
    function StockItemComponent() {
        this.items = [];
        this.itemCount = 0;
    }
    StockItemComponent.prototype.updateItem = function (num) {
        this.itemCount = num;
    };
    StockItemComponent.prototype.counter = function () {
        return new Array(this.itemCount);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], StockItemComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], StockItemComponent.prototype, "item", void 0);
    StockItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'stock-item',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/components/stock-item/stock-item.html"*/'<div class="stock-item-wrapper">\n\n  <div class="stock-item">\n      \n    <svg xmlns="http://www.w3.org/2000/svg" fill="#D291BC" width="48" height="48" viewBox="0 0 24 24"><path d="M22 2.427c-1.302 0-2.441-1.043-2.441-2.427h-15.149c0 1.382-1.105 2.427-2.41 2.427v1.573h20v-1.573zm-19 3.573l3.031 18h11.938l3.031-18h-18zm4.049 12l-1.01-6h11.923l-1.01 6h-9.903z"/></svg>\n    \n    <div class="stock-item-label">\n        <h4>{{item?.name}}</h4>\n        <p>{{item?.price || \'$4.00\'}}</p>\n    </div>\n\n  </div>\n\n  <quantity-ticker (changeEvent)="updateItem($event)"></quantity-ticker>\n\n</div>\n\n<div class="stock-item-config" *ngFor=\'let in of counter() ;let i = index\'>\n\n  <coffee-config></coffee-config>\n\n</div>\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/components/stock-item/stock-item.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], StockItemComponent);
    return StockItemComponent;
}());

//# sourceMappingURL=stock-item.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MilkTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MilkTypeComponent = /** @class */ (function () {
    function MilkTypeComponent() {
        this.milkList = [
            { name: 'full', params: [] },
            { name: 'trim', params: [] },
            { name: 'soy', params: [] },
            { name: 'almond', params: [] },
        ];
    }
    MilkTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'milk-type',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/components/milk-type/milk-type.html"*/'<div class="milk-type">\n  <button ion-button round outline small *ngFor="let milk of milkList">{{milk.name}}</button>\n</div>\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/components/milk-type/milk-type.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MilkTypeComponent);
    return MilkTypeComponent;
}());

//# sourceMappingURL=milk-type.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyrupTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SyrupTypeComponent = /** @class */ (function () {
    function SyrupTypeComponent() {
        this.syrupList = [
            { name: 'caramel', params: [] },
            { name: 'vanilla', params: [] },
            { name: 'chai', params: [] }
        ];
    }
    SyrupTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'syrup-type',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/components/syrup-type/syrup-type.html"*/'<div class="syrup-type">\n  <button ion-button round outline small *ngFor="let syrup of syrupList">{{syrup.name}}</button>\n</div>\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/components/syrup-type/syrup-type.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SyrupTypeComponent);
    return SyrupTypeComponent;
}());

//# sourceMappingURL=syrup-type.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SweetnerTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SweetnerTypeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SweetnerTypeComponent = /** @class */ (function () {
    function SweetnerTypeComponent() {
        console.log('Hello SweetnerTypeComponent Component');
        this.text = 'Hello World';
    }
    SweetnerTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'sweetner-type',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/components/sweetner-type/sweetner-type.html"*/'<!-- Generated template for the SweetnerTypeComponent component -->\n<div>\n  {{text}}\n</div>\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/components/sweetner-type/sweetner-type.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SweetnerTypeComponent);
    return SweetnerTypeComponent;
}());

//# sourceMappingURL=sweetner-type.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoffeeConfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CoffeeConfigComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CoffeeConfigComponent = /** @class */ (function () {
    function CoffeeConfigComponent() {
        console.log('Hello CoffeeConfigComponent Component');
        this.text = 'Hello World';
    }
    CoffeeConfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'coffee-config',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/components/coffee-config/coffee-config.html"*/'<div class="coffee-config">\n  <!-- <milk-type></milk-type>\n  <syrup-type></syrup-type>\n  <sweetner-type></sweetner-type> -->\n\n  <div>\n      <ion-list>\n          <ion-item>\n              <ion-select [(ngModel)]="milk">\n                  <ion-option value="full">Full Cream</ion-option>\n                  <ion-option value="light">Light Blue</ion-option>\n                  <ion-option value="trim">Trim</ion-option>\n                  <ion-option value="soy">Soy</ion-option>\n                  <ion-option value="almond">Almond</ion-option>\n              </ion-select>\n          </ion-item>\n        </ion-list>\n      \n      <ion-list>\n        <ion-item>\n            <ion-select [(ngModel)]="shot">\n                <ion-option value="none">None</ion-option>\n                <ion-option value="caramel">Caramel</ion-option>\n                <ion-option value="vanilla">Vanilla</ion-option>\n                <ion-option value="chai">Chai</ion-option>\n                <ion-option value="hazlenut">Hazlenut</ion-option>\n            </ion-select>\n        </ion-item>\n      </ion-list>\n  </div>\n\n\n\n</div>\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/components/coffee-config/coffee-config.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CoffeeConfigComponent);
    return CoffeeConfigComponent;
}());

//# sourceMappingURL=coffee-config.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollableTabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollableTabsComponent = /** @class */ (function () {
    function ScrollableTabsComponent() {
    }
    ScrollableTabsComponent.prototype.select = function (item) {
    };
    ScrollableTabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'scrollable-tabs',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/components/scrollable-tabs/scrollable-tabs.html"*/'<div class="scrollable-tabs">\n  \n<button ion-button clear (click)="select(\'coffees\')">coffees</button>\n<button ion-button clear (click)="select(\'teas\')">teas</button>\n<button ion-button clear (click)="select(\'frappes\')">frappes</button>\n<button ion-button clear (click)="select(\'pies\')">pies</button>\n<button ion-button clear (click)="select(\'baking\')">baking</button>\n\n</div>\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/components/scrollable-tabs/scrollable-tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ScrollableTabsComponent);
    return ScrollableTabsComponent;
}());

//# sourceMappingURL=scrollable-tabs.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.date = new Date();
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/stevekelly/Documents/ionic3-angular5/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <!--<ion-title>Agape</ion-title>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div padding>\n    <h4>{{ date | date: \'MMM d, y\'}}</h4>\n    <p>\n      Take a look at the <code>src/pages/</code> directory to add or change tabs,\n      update any existing page or create new pages.\n    </p>\n\n    <orders></orders>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/stevekelly/Documents/ionic3-angular5/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=1.js.map