import { OrderRepository } from './order.repository';
import { Book } from './book.model';
import { AdminRepository } from './admin.repository';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RestDataSource } from './rest.datasource';
import { BooksRepository } from './books.repository';
import { UserRepository } from './user.repository';
import { Order } from './order.model';

@NgModule({
    providers: [BooksRepository,RestDataSource,UserRepository, AdminRepository, Book,OrderRepository, Order],
    imports: [HttpClientModule]
})
export class ModelModule{

}