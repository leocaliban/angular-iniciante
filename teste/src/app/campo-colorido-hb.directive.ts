import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColoridoHb]',
  exportAs: 'colorirCampo'
})
export class CampoColoridoHbDirective {

  @Input() corSecundaria = 'transparent';

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') aoGanharFoco() {
    this.corDeFundo = 'pink';
  }

  @HostListener('blur') aoPerderFoco() {
    this.corDeFundo = this.corSecundaria;
  }
}
