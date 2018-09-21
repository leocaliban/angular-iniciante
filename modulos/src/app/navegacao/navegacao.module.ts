import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BotoesModule } from '../botoes/botoes.module';

@NgModule({
  imports: [
    CommonModule,
    BotoesModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class NavegacaoModule { }
