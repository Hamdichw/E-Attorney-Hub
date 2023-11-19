import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MbscModule } from '@mobiscroll/angular';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MeetsLayoutRoutes } from './meets-layout.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MeetsLayoutRoutes),
    FormsModule,
    NgbModule,
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  declarations: [
   
  ]
})

export class MeetsLayoutModule {}
