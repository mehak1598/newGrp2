import { PromoComponent } from './promo/promo.component';
import { CheckoutComponent } from './bookstore/checkout.component';
import { CartDetailsComponent } from './bookstore/cart-details.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { InsertComponent } from './insert/insert.component';
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
  {path:"admin", component: AdminComponent , canActivate: [AuthGuard]},
  {path:"insert", component: InsertComponent,  canActivate: [AuthGuard]},
  {path:"delete", component: DeleteComponent,  canActivate: [AuthGuard]},
  {path: "update", component: UpdateComponent,  canActivate: [AuthGuard]},
  {path:"view", component: ViewComponent,  canActivate: [AuthGuard]},
  {path:"cart", component: CartDetailsComponent,  canActivate: [AuthGuard]},
  {path:"checkout", component: CheckoutComponent,  canActivate: [AuthGuard]},
  {path:"promo", component: PromoComponent,  canActivate: [AuthGuard]},
  {path:"**", redirectTo:"/login"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
