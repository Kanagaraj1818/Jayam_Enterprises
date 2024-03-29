import { Routes } from '@angular/router';
import { HomeComponent } from './home/smart/entry-component/home/home.component';
import { OrdersComponent } from './orders/smart/entry-component/orders/orders.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'orders', component: OrdersComponent}
];
