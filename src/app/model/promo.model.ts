import { Injectable } from "@angular/core";
import { Cart } from './cart.model';

@Injectable()
export class Promo{


    public id?: number;
    public promocode?: string;
    public discount?: number;

    constructor(private cart: Cart){}

    clear(){
        this.id=null;
        this.promocode=this.discount=null;
    }

    private recalculateprice(){
        this.cart.cartPrice-=this.discount/100*this.cart.cartPrice;
    }
}