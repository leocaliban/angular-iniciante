import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  descricao = '*';
  valor = 0;

  constructor() { }

  cadastrarDespesa() {
    console.log(`Cadastrando ${this.descricao}`);
    this.descricao = 'Almoço';
    this.valor = 18;
  }

  alterarDescricao(event: any) {
    this.descricao = event.target.value;
  }

  alterarValor(event: any) {
    this.valor = event.target.value;
  }

  ngOnInit() {
  }

}
