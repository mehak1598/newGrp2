import { Observable } from 'rxjs';
import { Book } from './book.model';
import { RestDataSource } from './rest.datasource';
import { Injectable } from "@angular/core";
 
@Injectable()
export class AdminRepository{
 
    // private books: Book[] = [];
 
    constructor(private dataSource: RestDataSource){}
 
    saveBook(book: Book): Observable<Book>{
        return this.dataSource.saveBook(book);
    }

    deleteBook(id: number): Observable<Book>{
        return this.dataSource.deleteBook(id);
    }

    updateBook(id: number, book: Book): Observable<Book>{
        return this.dataSource.updateBook(id, book);
    }
    
}