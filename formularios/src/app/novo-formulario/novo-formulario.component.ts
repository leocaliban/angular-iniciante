import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-novo-formulario',
  templateUrl: './novo-formulario.component.html',
  styleUrls: ['./novo-formulario.component.css']
})
export class NovoFormularioComponent implements OnInit {

  profissaoPadrao = 'Empresário';

  profissoes = ['Empresário', 'Médico', 'Vendedor', 'Policial'];

  constructor() { }

  ngOnInit() {
  }

  salvar(form: NgForm) {
    console.log(this.profissaoPadrao);
  }

}
