import { Routes } from '@angular/router';
import { HomeComponent } from './home/smart/entry-component/home/home.component';
import { OrdersComponent } from './orders/smart/entry-component/orders/orders.component';
import { OrderSummaryComponent } from './orderSummary/smart/entry-component/order-summary/order-summary.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'order-summary', component: OrderSummaryComponent}
];
