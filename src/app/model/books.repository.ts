import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { Book } from './book.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class BooksRepository{

    private books: Book[] = [];
    private authors: string[] =[];

    constructor(private dataSource: RestDataSource){
        dataSource.getBooks().subscribe(data => { //lhs of => is list of parameters, rhs is function
            this.books = data;
            this.authors = data.map(b => b.author).filter((c,index,array) => array.indexOf(c) == index).sort();
        }

        ) //subscribes to any changes made in the static datasource

    } //use constructor whenever

    getBooks (author: string = null): Book[]{
        return this.books.filter(b => author == null || author == b.author);
    }

    getBook (id: number):Book{
        return this.books.find(b => b.id == id);
    }

    getAuthors(): string[] {
        return this.authors;
    }

    updateBook(id: number, book: Book): Observable<Book>{
        return this.dataSource.updateBook(id, book);
    }
}