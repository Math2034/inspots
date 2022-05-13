import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private rota: Router) {}
 
 OpenLogin(){
    this.rota.navigateByUrl(`/teste/$`);
  }

  OpenCadastro(){
    this.rota.navigateByUrl(`/cadastro/$`);
  }
}