import { FuncionarioService } from './../services/funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  funcionarioService: FuncionarioService;

  constructor() {
    this.funcionarioService = new FuncionarioService();
   }

  ngOnInit() {
  }

  adicionar(nome: string) {
    this.funcionarioService.adicionar(nome);

  }

}
