import { BooksRepository } from './../model/books.repository';
import { Book } from './../model/book.model';
import { HttpClient } from '@angular/common/http';
import { AdminRepository } from './../model/admin.repository';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  public selectedAuthor = null;
    public booksPerPage = 3;
    public selectedPage = 1;

  constructor(public AdminRepository: AdminRepository, private httpclient: HttpClient, public book: Book, private repository: BooksRepository) { }

  submitted: boolean = false;
  ngOnInit() {
  }

  deleteBook(id: number){
    this.AdminRepository.deleteBook(id).subscribe(book =>{
      this.submitted=false;
    });
  }

    get books(): Book[]{
        let pageIndex = (this.selectedPage - 1)* this.booksPerPage;
        if(Math.ceil(this.repository.getBooks(this.selectedAuthor).length / this.booksPerPage) < pageIndex){
            return this.repository.getBooks(this.selectedAuthor).slice(1, 1 + this.booksPerPage);
        }
        else{
            return this.repository.getBooks(this.selectedAuthor).slice(pageIndex, pageIndex + this.booksPerPage);
        }
        

        
    }

    get authors(): string[]{
        this.changePage(1);
        return this.repository.getAuthors();

    }

    changeAuthor(newAuthor?: string){
        this.selectedAuthor = newAuthor;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.booksPerPage = Number(newSize);
    }

    get pageNumbers(): number[] {
        return Array(Math.ceil(this.repository
            .getBooks(this.selectedAuthor).length / this.booksPerPage))
            .fill(0).map((x, i) => i + 1); //x will always be current element and i will be always current index. This is a predefined method and its parameter are also predefined ie i and x.
    }


}
