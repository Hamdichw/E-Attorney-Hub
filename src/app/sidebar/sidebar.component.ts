import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/auth/dashboard',     title: 'Dashboard',      icon:'nc-bank',       class: '' },
    { path: '/auth/client',         title: 'Clients',        icon:'nc-tile-56',    class: '' },
    { path: '/auth/transactions',  title: 'transactions',   icon:'nc-money-coins',class: '' },
    { path: '/auth/Rendez-vous',   title: 'Rendez-vous',    icon:'nc-time-alarm', class: '' },
    { path: '/auth/user',          title: 'User Profile',   icon:'nc-single-02', class: '' },
   
   

];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
