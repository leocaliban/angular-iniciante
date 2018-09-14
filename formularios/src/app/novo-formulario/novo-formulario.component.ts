import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao: string;
}

@Component({
  selector: 'app-novo-formulario',
  templateUrl: './novo-formulario.component.html',
  styleUrls: ['./novo-formulario.component.css']
})
export class NovoFormularioComponent implements OnInit {

  cliente = new Cliente();

  profissaoPadrao = 'Empresário';

  profissoes = ['Empresário', 'Médico', 'Vendedor', 'Policial'];

  constructor() { }

  ngOnInit() {
  }

  salvar(form: NgForm) {
    // Substituido pelo two-way binding
    // this.cliente.nome = form.value.nome;
    // this.cliente.email = form.value.email;
    // this.cliente.profissao = form.value.profissao;

    console.log(this.cliente);
  }

}
