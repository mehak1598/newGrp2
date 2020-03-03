import { Book } from './../model/book.model';
import { HttpClient } from '@angular/common/http';
import { AdminRepository } from './../model/admin.repository';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent implements OnInit {

  constructor(public repository: AdminRepository, private httpclient: HttpClient, public book: Book) { }

  submitted: boolean = false;
  ngOnInit() {
  }

  submitBook(form: NgForm){
    this.submitted=true;
    if(form.valid){
      this.repository.saveBook(this.book).subscribe(book =>{
        this.submitted=false;
      });
    }
  }

}
