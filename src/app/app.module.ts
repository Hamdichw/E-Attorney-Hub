import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {  NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { StreamChatModule, StreamAutocompleteTextareaModule } from 'stream-chat-angular';


import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RequestMeetsComponent } from './pages/request-meets/request-meets.component';
import { MeetsLayoutComponent } from "./layouts/Meets/meets-layout.component";

import {MatDialogModule} from '@angular/material/dialog'; 
import {MatButtonModule} from '@angular/material/button';
import { SignUpComponent } from "./SignUp/SignUp.component";
import { SignInComponent } from './sign-in/sign-in.component';

// Import from library
import {
  ToastNotificationConfigModule
} from '@costlydeveloper/ngx-awesome-popup';
// Import from library
import { 
  NgxAwesomePopupModule, 
  DialogConfigModule 
} from '@costlydeveloper/ngx-awesome-popup';
import { ClientPopPupComponent } from "./pages/client-pop-pup/client-pop-pup.component";
import { ClientComponent } from "./pages/client/client.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { TransactionsPopPupComponent } from './pages/transactions-pop-pup/transactions-pop-pup.component';
import { TransactionsComponent } from "./pages/transactions/transactions.component";
import { TranslateModule } from '@ngx-translate/core';
import { ChatComponent } from './pages/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SignUpComponent,
    NotFoundComponent,
    RequestMeetsComponent,
    MeetsLayoutComponent,
    SignInComponent,
    ClientPopPupComponent,
    ClientComponent,
    TransactionsPopPupComponent,
    TransactionsComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    MatDialogModule, 
    MatButtonModule,
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
    DialogConfigModule.forRoot(),// Essential, mandatory dialog module.
    ToastNotificationConfigModule.forRoot(), // Essential, mandatory toast module.
    TranslateModule.forRoot(),
    StreamAutocompleteTextareaModule,
     StreamChatModule
  ],
  providers: [
    ],
    entryComponents:    [ ClientPopPupComponent,TransactionsPopPupComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
