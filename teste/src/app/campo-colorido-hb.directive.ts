import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColoridoHb]'
})
export class CampoColoridoHbDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') aoGanharFoco() {
    this.corDeFundo = 'pink';
  }

  @HostListener('blur') aoPerderFoco() {
    this.corDeFundo = 'transparent';
  }
}
