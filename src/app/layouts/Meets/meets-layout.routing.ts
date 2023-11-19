import { Routes } from '@angular/router';


import { RendezVousComponent } from 'app/pages/rendez-vous/rendez-vous.component';
import { RequestMeetsComponent } from 'app/pages/request-meets/request-meets.component';

export const MeetsLayoutRoutes: Routes = [
        { path: 'Rendez-vous', component: RendezVousComponent },
        { path: 'attente', component: RequestMeetsComponent },
        { path: '', redirectTo: 'Rendez-vous', pathMatch: 'full' }, 
];
