import { PromoRepository } from './../model/promo.repository';
import { Promo } from './../model/promo.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  
  promoSent:boolean=false;
  submitted: boolean=false;
  
  constructor(public promo: Promo, public repository: PromoRepository) { }

  ngOnInit() {
  }

  onClick(form: NgForm) {
    alert("Promo added successfully");
    this.submitted=true;
    if(form.valid) {
      this.repository.savePromo(this.promo).subscribe(promo => {
        this.promo.clear();
            this.promoSent=true;
            this.submitted=false;
      });
      setTimeout(()=>{
        window.location.href="/admin";
      },500);
    }
    

}}
