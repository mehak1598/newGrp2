import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';
import { Order } from './order.model';
import { Injectable } from '@angular/core';
@Injectable()
export class OrderRepository{
 
    private orders:Order[] = [];
    constructor(private dataSource: RestDataSource){}
 
    saveOrder(order: Order): Observable<Order>{
        return this.dataSource.saveOrder(order);
    }
 
}