import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <p [style.fontSize.px]="tamano">Hola mundo</p>
  <button class="btn btn-primary" (click)="tamano = tamano + 5">
  <i class="fa fa-plus-square"></i>
  </button>
  <button class="btn btn-primary" (click)="tamano = tamano - 5">
  <i class="fa fa-minus-square"></i>
  </button>
  `
  ,
  styles: [`
    color:blue;
    `]
})
export class NgStyleComponent implements OnInit {

  tamano:number = 20;

  constructor() { }

  ngOnInit() {
  }

}
