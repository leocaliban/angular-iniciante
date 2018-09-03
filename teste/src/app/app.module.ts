import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { AdicionarCardsComponent } from './adicionar-cards/adicionar-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    NovoComponenteComponent,
    EventBindingComponent,
    AdicionarCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
