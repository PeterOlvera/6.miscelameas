import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') nuevoColor:string;

  constructor( private el:ElementRef ) { }

  @HostListener('mouseenter') mouseover(){
    this.resaltar( this.nuevoColor );
  }

  @HostListener('mouseleave') mouseleave(){
    this.resaltar( null );
  }

  private resaltar( color:string=null ){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
