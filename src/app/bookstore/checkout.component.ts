import { CartLine } from './../model/cart.model';
import { Book } from './../model/book.model';
import { Component, OnInit } from '@angular/core';
import { Order } from './../model/order.model';
import { OrderRepository } from './../model/order.repository';
import { NgForm } from '@angular/forms';
import { Cart } from '../model/cart.model';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{
 
  orderSent: boolean = false;
  submitted: boolean = false;
  
  constructor(public repository: OrderRepository, public order: Order, public cart: Cart) { }
 
  ngOnInit() {
  }
 
  submitOrder(form: NgForm ){
    this.submitted = true;
    if(form.valid){
      this.repository.saveOrder(this.order).subscribe(order=>{
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
    console.log();
  }
 
}