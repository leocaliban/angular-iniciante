import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef, // manipula o elemento DOM
    private renderer: Renderer2 // abstrai a manipulação do elemento
  ) { }

  @HostListener('focus') // evento que será escutado pelo método
  aoGanharFoco() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('blur')
  aoPerderFoco() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
