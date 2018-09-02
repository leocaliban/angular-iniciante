import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  descricao = '';
  valor = 0;

  constructor() { }

  cadastrarDespesa(valor: number) {
    this.valor = valor;
  }

  ngOnInit() {
  }

}
