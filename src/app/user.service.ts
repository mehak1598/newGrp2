import { UserRepository } from './model/user.repository';
import { Injectable } from '@angular/core';
import { User } from './model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private repository: UserRepository) { }

  getUsers(): User[]{
    return this.repository.getUsers();
  }
}
