import { BooksRepository } from './../model/books.repository';
import { RestDataSource } from './../model/rest.datasource';
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
  books: Book[] =[];


  constructor(public repository: OrderRepository, public order: Order, public bookrepository: BooksRepository) { }
 
  ngOnInit() {
  }
 
  submitOrder(form: NgForm ){
    this.books = this.bookrepository.getBooks();
    this.submitted = true;
    if(form.valid){
      this.repository.saveOrder(this.order).subscribe(order=>{
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
    this.updateStock();
    this.checkStock();
  
  }
    



  updateStock(){
    for(let line of this.order.cart.lines)
    {
      for(let book of this.books)
      {
        
      if(line.product.id == book.id)
      {
        //console.log(book.noInStock);
        book.noInStock-=line.quantity;
        console.log(book);
          this.bookrepository.updateBook(book.id, book).subscribe(book =>{
            this.submitted=false;
          });
        // this.bookrepository.updateBook(book.id, book);
      }
    }
    }
  }

  checkStock(){
    for(let line of this.order.cart.lines)
    {
      for(let book of this.books)
      {
        
      if(line.product.noInStock <= book.reorderingThreshold)
      {
        this.reorderStock(book);
        alert("Reodering"+ book.title);
      }
    }
    }

  }

  reorderStock(book: Book){
    book.noInStock+=book.stopOrder;
    this.bookrepository.updateBook(book.id, book).subscribe(book =>{
      this.submitted=false;
    });
  }
}
