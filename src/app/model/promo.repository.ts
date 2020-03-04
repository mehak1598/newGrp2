import { Observable } from 'rxjs';
import { Promo } from './promo.model';
import { RestDataSource } from './rest.datasource';
import { Injectable } from '@angular/core';

@Injectable()
export class PromoRepository{
   
    private promos: Promo[] = [];

    constructor(private dataSource: RestDataSource){
    dataSource.getPromos().subscribe(data => {
        this.promos=data;
    })
    }

    getPromos():Promo[]{
        return this.promos;
    }

    getPromo(id: number):Promo{
        return this.promos.find(p=> p.id==id);
    }

    savePromo(promo:Promo):Observable<Promo>{
        return this.dataSource.savePromo(promo);
    }

}