import { Component, OnInit } from '@angular/core';
import { CidadeService } from './cidade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cidades = [];

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    this.cidadeService.consultar().then(cidadesApi => { this.cidades = cidadesApi; });
  }

  adicionar(nome: string) {
    this.cidadeService.adicionar({ nome }).then( cidade => {
      this.buscar();
    });
  }

  excluir(id: number) {
    this.cidadeService.excluir(id).then(() => {
      this.buscar();
    });
  }

  atualizar(cidade: any) {
    alert(JSON.stringify(cidade));
  }
}
