import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { AdicionarCardsComponent } from './adicionar-cards/adicionar-cards.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { CampoColoridoHbDirective } from './campo-colorido-hb.directive';


@NgModule({
  declarations: [
    AppComponent,
    NovoComponenteComponent,
    EventBindingComponent,
    AdicionarCardsComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    CampoColoridoHbDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
