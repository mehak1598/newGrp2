
import { RouterModule } from '@angular/router';
import { ModelModule } from './../model/model.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      ModelModule,
      RouterModule,
      FormsModule
    ],
    exports:[]
  })
  export class UserModule { }