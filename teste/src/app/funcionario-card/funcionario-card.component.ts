import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent implements OnInit {

  @Input() funcionario: any;

  constructor() { }

  ngOnInit() {
  }

  getEstiloCard() {
    return {
      backgroundColor: this.funcionario.id % 2 === 0 ? 'rgb(169, 252, 169)' : 'rgb(95, 183, 224)'
    };
  }

  // outra forma de aplicar classes
  getClassesCss() {
    return ['badge', 'badge-light'];
  }

  isOk() {
    return this.funcionario.nome.startsWith('A');
  }

}
