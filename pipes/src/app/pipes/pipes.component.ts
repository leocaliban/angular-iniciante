import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nome = 'Jack Bauer';
  dataAniversario = new Date(1985, 3, 20);
  preco = 1299.90;
  troco = 0.57392;

  constructor() { }

  ngOnInit() {
  }

}
