import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { BookStoreComponent } from './bookstore/bookstore.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  
  {path:"register", component: RegisterComponent},
  {path:"login", component: LoginComponent},
  {path:"bookstore", component:BookStoreComponent, canActivate: [AuthGuard]},
  {path:"admin", component: AdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
