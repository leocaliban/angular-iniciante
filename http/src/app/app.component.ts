import { Component, OnInit } from '@angular/core';
import { CidadeService } from './cidade.service';
import swal from 'sweetalert2';

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
    this.cidadeService.adicionar({ nome }).then(cidade => {
      this.buscar();
    });
  }

  excluir(id: number) {
    this.cidadeService.excluir(id).then(() => {
      this.alertaSucesso('Excluído com sucesso!');
      this.buscar();
    });
  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade).then(() => {
      this.alertaSucesso('Atualizado com sucesso!');
      this.buscar();
    });
  }

  alertaSucesso(mensagem: string) {
    toast({
      type: 'success',
      title: mensagem
    });
  }
}
const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
