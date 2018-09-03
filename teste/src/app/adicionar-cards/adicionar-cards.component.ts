import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar-cards',
  templateUrl: './adicionar-cards.component.html',
  styleUrls: ['./adicionar-cards.component.css']
})
export class AdicionarCardsComponent implements OnInit {

  funcionario: {
    id: number,
    nome: string,
    profissao: string
  };

  nome = '';
  profissao = '';
  cadastrado = false;
  ultimoId = 78;

  funcionarios = [];

  constructor() { }

  cadastrar(nome: string, profissao: string) {
    this.funcionario = {
      id: ++this.ultimoId,
      nome: nome,
      profissao: profissao
    };

    this.cadastrado = true;

    this.funcionarios.push(this.funcionario);
  }

  ocultarBotao() {
    if (this.nome.length === 0 || this.profissao.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

}
