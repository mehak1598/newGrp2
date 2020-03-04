import { Injectable } from '@angular/core';

@Injectable()
export class User {

    public id?:number;
    public username?:string;
    public password:string;
    public email:string;
    public isadmin:string='0';



    clear(){
        this.id=null;
        this.username=this.password=null;
        this.email=this.isadmin=null;
    }
    
    //constructor(public id?: number, public username?: string, public password?: string, public email?: string, public isadmin?: string){}
     }
    