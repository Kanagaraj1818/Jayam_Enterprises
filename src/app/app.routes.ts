import { Routes } from '@angular/router';
import { HomeComponent } from './home/smart/entry-component/home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent}
];
