import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.css']
})
export class NovoComponenteComponent implements OnInit {

  constructor() { }

  nome = 'Jack Bauer';
  idade = 35;

  getIdade() {
    return this.idade;
  }

  ngOnInit() {
  }

}
