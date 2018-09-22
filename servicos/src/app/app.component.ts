import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './services/funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  funcionarios = [];

  funcionarioService: FuncionarioService;

  constructor() {
    this.funcionarioService = new FuncionarioService();

  }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.consultar();
  }
}
