import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TransactionsComponent } from 'app/pages/transactions/transactions.component';
import { ClientComponent } from 'app/pages/client/client.component';
import { MeetsLayoutComponent } from '../Meets/meets-layout.component';
import { ChatComponent } from 'app/pages/chat/chat.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'client',          component: ClientComponent },
    { path: 'user',           component: UserComponent },
    { path: 'transactions',   component: TransactionsComponent },
    { path:'' , component : MeetsLayoutComponent ,children: [
        {
      path: '',
      loadChildren: () => import('../Meets/meets-layout.module').then(x => x.MeetsLayoutModule)
  }]},{
    path:'client/chat',
    component:ChatComponent
  }
    
];
