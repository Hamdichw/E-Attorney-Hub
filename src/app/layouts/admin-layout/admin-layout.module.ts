import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientComponent } from 'app/pages/client/client.component';
import { RendezVousComponent } from 'app/pages/rendez-vous/rendez-vous.component';
import { MbscModule } from '@mobiscroll/angular';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
   
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    RendezVousComponent,
   
  ],
  /* entryComponents:    [ ClientPopPupComponent ], */
})

export class AdminLayoutModule {}
