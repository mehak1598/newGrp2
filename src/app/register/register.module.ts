import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[RegisterComponent],
    imports: [HttpClientModule,
        CommonModule,
        ModelModule,
        RouterModule,
        FormsModule],
     exports:[RegisterComponent]
})
export class RegisterModule{

}