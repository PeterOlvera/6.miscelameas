import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  backgroundType:string='Info';
  opcion:number=0;

  constructor() {  }

  ngOnInit() {}

  cambiarEstilo(){

    this.opcion = Math.floor(Math.random() * (5-0));
    switch( this.opcion ){
      case 0:
          this.backgroundType = 'Primary';
          break;
      case 1:
          this.backgroundType = 'Success';
          break;
      case 2:
          this.backgroundType = 'Danger';
          break;
      case 3:
          this.backgroundType = 'Warning';
          break;
      case 4:
          this.backgroundType = null;
          break;
      default:
    }
  }

}
