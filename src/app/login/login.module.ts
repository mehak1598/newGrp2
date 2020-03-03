import { RouterModule } from '@angular/router';
import { ModelModule } from './../model/model.module';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent],
    imports: [
      CommonModule,
      ModelModule,
      RouterModule,
      FormsModule
    ],
    exports:[LoginComponent]
  })
  export class BookstoreModule { }