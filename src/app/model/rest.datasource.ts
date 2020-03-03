
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from './user.model';
const PROTOCOL = "http";
const PORT = 8092;

@Injectable()
export class RestDataSource{
    baseUrl: string;

    constructor(private http: HttpClient){
        this.baseUrl = `${PROTOCOL}://10.61.182.113:${PORT}`;
    }

    getBooks(): Observable<Book[]>{
        return this.http.get<Book[]>(this.baseUrl + "/books/all");
    }

    getBook(id: number): Observable<Book>{
        return this.http.get<Book>(this.baseUrl+"/books/"+id);
    }

    saveBook(book: Book): Observable<Book>{
        return this.http.post<Book>(this.baseUrl+"/books/insert",book)
    }

    deleteBook(id: number): Observable<Book>{
        return this.http.delete<Book>(this.baseUrl+"/books/delete/"+id);
    }

    updateBook(id: number,book: Book): Observable<Book>{
        return this.http.put<Book>(this.baseUrl+"/books/update"+id,book);
    }

    getUsers(): Observable<User[]>{
        return this.http.get<User[]>(this.baseUrl + "/users/all");
    }

    getUser(id: number): Observable<User>{
        return this.http.get<User>(this.baseUrl+"/users/"+id);
    }

    // saveOrder(order: Order): Observable<Order>{
    //     return this.http.post<Order>(this.baseUrl + "orders", order);
    // }
}