import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignUpComponent } from './SignUp/SignUp.component';
import { SignInComponent } from './sign-in/sign-in.component';


export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'SignUp',
   pathMatch: 'full', 
  },
 {
  path:'SignUp',
  component : SignUpComponent
 },
 {
    path: 'auth',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},
  {
    path:'SignIn',
    component : SignInComponent
  },
  {
    path: '**',
    component:NotFoundComponent
  }
]
