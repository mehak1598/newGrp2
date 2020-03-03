import { RestDataSource } from './../model/rest.datasource';
import { AdminRepository } from './../model/admin.repository';
import { Book } from './../model/book.model';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AdminComponent],
    imports: [
      CommonModule,
      ModelModule,
      RouterModule,
      FormsModule
    ],
    providers: [Book, AdminRepository, RestDataSource],
    exports:[AdminComponent]
  })
  export class AdminModule { }