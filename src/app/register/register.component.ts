import { UserRepository } from './../model/user.repository';
import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {
  regSent:boolean=false;
  submitted: boolean=false;
 
  constructor(public user: User, public repository: UserRepository,private router: Router) { }
 
  ngOnInit() {
  }
 
  onClick(form: NgForm) {
    this.submitted=true;
    if(form.valid) {
      this.repository.saveUser(this.user).subscribe(user => {
        this.user.clear();
            this.regSent=true;
            this.submitted=false;
      });
      
    }
  }


}
