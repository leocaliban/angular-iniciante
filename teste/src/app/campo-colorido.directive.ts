import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef, // manipula o elemento DOM
    private renderer: Renderer2 // abstrai a manipulação do elemento
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }
}
