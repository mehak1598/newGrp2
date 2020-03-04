import { Cart } from './../model/cart.model';
import { Book } from './../model/book.model';
import { BooksRepository } from './../model/books.repository';
import { Component } from '@angular/core';
@Component({
    selector: "bookstore",
    templateUrl: "bookstore.component.html"
})
export class BookStoreComponent {

    public selectedAuthor = null;
    public booksPerPage = 3;
    public selectedPage = 1;

    
    constructor(private repository: BooksRepository, private cart: Cart){

    }

    get books(): Book[]{
        let pageIndex=(this.selectedPage-1) * this.booksPerPage;
        return this.repository.getBooks(this.selectedAuthor)
        .slice(pageIndex, pageIndex+this.booksPerPage);
    }

    get authors(): string[]{
        
        return this.repository.getAuthors();

    }

    changeAuthor(newAuthor?: string){
        this.selectedAuthor = newAuthor;
        this.changePage(1);
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.booksPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.repository
            .getBooks(this.selectedAuthor).length / this.booksPerPage))
            .fill(0).map((x, i) => i + 1); //x will always be current element and i will be always current index. This is a predefined method and its parameter are also predefined ie i and x.
    }

    addProductToCart(book : Book){
        this.cart.addLine(book);
    }
}