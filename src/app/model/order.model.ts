import { Injectable } from '@angular/core';
import { Cart } from './cart.model';
@Injectable()
export class Order{
 
    public id:number;
    public name:string;
    public address:string;
    public city:string;
    public state:string;
    public zip:string;
    public country: string;
 
    public shipped: string = "0";
 
    constructor(public cart: Cart){
 
    }
 
    clear(){
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = "0";
        this.cart.clear();
    }


 
}