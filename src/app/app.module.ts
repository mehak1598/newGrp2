import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthGuard } from './auth.guard';
import { BookstoreModule } from './bookstore/bookstore.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ViewComponent } from './view/view.component';
import { PromoComponent } from './promo/promo.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AdminComponent, 
     RegisterComponent, InsertComponent, 
     UpdateComponent, DeleteComponent, ViewComponent, PromoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BookstoreModule,
    NgIdleKeepaliveModule.forRoot(),
    ModalModule.forRoot(),
    MomentModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
