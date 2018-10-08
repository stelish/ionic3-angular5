import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { OrdersComponent } from './orders/orders';
import { CurrentOrderComponent } from './current-order/current-order';
import { CoffeesComponent } from './coffees/coffees';
import { DrinksComponent } from './drinks/drinks';
import { FoodComponent } from './food/food';
import { PreviousOrderComponent } from './previous-order/previous-order';
import { QuantityTickerComponent } from './quantity-ticker/quantity-ticker';
import { StockItemComponent } from './stock-item/stock-item';
import { MilkTypeComponent } from './milk-type/milk-type';
import { SyrupTypeComponent } from './syrup-type/syrup-type';
import { SweetnerTypeComponent } from './sweetner-type/sweetner-type';
import { CoffeeConfigComponent } from './coffee-config/coffee-config';
import { ScrollableTabsComponent } from './scrollable-tabs/scrollable-tabs';
@NgModule({
	declarations: [OrdersComponent,
    CurrentOrderComponent,
    CoffeesComponent,
    DrinksComponent,
    FoodComponent,
    PreviousOrderComponent,
    QuantityTickerComponent,
    StockItemComponent,
    MilkTypeComponent,
    SyrupTypeComponent,
    SweetnerTypeComponent,
    CoffeeConfigComponent,
    ScrollableTabsComponent],
	imports: [IonicModule],
	exports: [OrdersComponent,
    CurrentOrderComponent,
    CoffeesComponent,
    DrinksComponent,
    FoodComponent,
    PreviousOrderComponent,
    QuantityTickerComponent,
    StockItemComponent,
    MilkTypeComponent,
    SyrupTypeComponent,
    SweetnerTypeComponent,
    CoffeeConfigComponent,
    ScrollableTabsComponent]
})
export class ComponentsModule {}
