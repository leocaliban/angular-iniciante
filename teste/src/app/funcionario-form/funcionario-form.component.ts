import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  funcionario: {
    id: number,
    nome: string,
    profissao: string
  };

  nome = '';
  profissao = '';
  cadastrado = false;
  ultimoId = 78;

  @Output() funcionarioAdicionado = new EventEmitter();

  constructor() { }

  cadastrar(nome: string, profissao: string) {
    this.cadastrado = true;

    this.funcionario = {
      id: ++this.ultimoId,
      nome: nome,
      profissao: profissao
    };

    this.funcionarioAdicionado.emit(this.funcionario);
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
