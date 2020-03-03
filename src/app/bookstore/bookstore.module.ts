import { RouterModule } from '@angular/router';
import { ModelModule } from './../model/model.module';
import { BookStoreComponent } from './bookstore.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [BookStoreComponent],
    imports: [
      CommonModule,
      ModelModule,
      RouterModule,
      FormsModule
    ],
    exports:[BookStoreComponent]
  })
  export class BookstoreModule { }