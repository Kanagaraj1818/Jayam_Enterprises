import { Routes } from '@angular/router';
import { HomeComponent } from './home/smart/entry-component/home/home.component';
import { OrderSummaryComponent } from './orderSummary/smart/entry-component/order-summary/order-summary.component';
import { OrdersComponent } from './orders/smart/entry-component/orders/orders.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'orders', component: OrderSummaryComponent},
    {path: 'aboutUs', component: OrdersComponent}
];
