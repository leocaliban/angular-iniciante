import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-cards',
  templateUrl: './adicionar-cards.component.html',
  styleUrls: ['./adicionar-cards.component.css']
})
export class AdicionarCardsComponent implements OnInit {

  funcionarios = [];

  constructor() { }

  aoAdicionar(funcionario) {
    this.funcionarios.push(funcionario);
  }

  ngOnInit() {
  }
}
