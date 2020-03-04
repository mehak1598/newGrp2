import { AuthService } from './../auth.service';
import { PromoService } from './../promo.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Promo } from './../model/promo.model';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {

  promoForm: FormGroup;
  promos: Promo[];
  message: String;

  constructor(public cart: Cart, public promo: Promo,private formbuilder: FormBuilder,
    private router: Router, private promoservice: PromoService,private authService: AuthService) { }


  get p() { return this.promoForm.controls; }

  ngOnInit() {
    this.promoForm = this.formbuilder.group({
      promocode: ['']
    });
    //this.promos = this.promoservice.getPromos();
    // this.returnUrl = "/cart";
  }

  checkpromo(){
    this.promos = this.promoservice.getPromos();
      for(let promo of this.promos)
      {
        if(this.p.promocode.value == promo.promocode){
          this.recalculateprice(promo.discount);
        }
        else{
          this.message = "Please check your promo code";
        }
      }
    }

  recalculateprice(discount: number){
    this.cart.cartPrice-=discount/100*this.cart.cartPrice;
  }
}
