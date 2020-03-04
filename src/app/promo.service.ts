import { Promo } from './model/promo.model';
import { PromoRepository } from './model/promo.repository';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromoService {
 
  constructor( private repository: PromoRepository) { }
 
  getPromos(): Promo[]{
    return this.repository.getPromos();
  }
}
