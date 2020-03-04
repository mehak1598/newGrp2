import { Observable } from 'rxjs';

import { User } from './user.model';
import { RestDataSource } from './rest.datasource';
import { Injectable } from '@angular/core';

@Injectable()
export class UserRepository{
    private users: User[] = [];

    constructor(private dataSource: RestDataSource){
    dataSource.getUsers().subscribe(data => {
        this.users=data;
    })
    }

    getUsers (): User[]{
        return this.users;
    }

    getUser (id: number):User{
        return this.users.find(p=> p.id==id);
    }

    saveUser(user:User):Observable<User>{
        return this.dataSource.saveUser(user);
    }

}