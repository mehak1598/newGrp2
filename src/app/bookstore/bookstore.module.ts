import { CheckoutComponent } from './checkout.component';
import { CartSummaryComponent } from './cart-summary.component';
import { CartDetailsComponent } from './cart-details.component';
import { Cart } from './../model/cart.model';
import { RouterModule } from '@angular/router';
import { ModelModule } from './../model/model.module';
import { BookStoreComponent } from './bookstore.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
    declarations: [BookStoreComponent,CartDetailsComponent,CartSummaryComponent,CheckoutComponent],
    imports: [
      CommonModule,
      ModelModule,
      RouterModule,
      ReactiveFormsModule,
      FormsModule
    ],
    providers: [Cart],
    exports:[BookStoreComponent]
  })
  export class BookstoreModule { }