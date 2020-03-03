import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class Book {
    public id?: number;
    public title?: string;
    public author?: string;
    public price?: number;
    public noInStock?: number;
    public stopOrder?: number;
    public reorderingThreshold?: number;
 
//constructor(id?: number, title?: string,author?: string, price?: number, noInStock?: number, stopOrder?: number, reorderingThreshold?: number){}
}