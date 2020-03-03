import { User } from './../model/user.model';

import { UserRepository } from './../model/user.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private repository: UserRepository) { }

  get users(): User[]{
    return this.repository.getUsers();

}  ngOnInit() {
  }

}
