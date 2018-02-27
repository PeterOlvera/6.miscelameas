import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: []
})
export class NgClassComponent implements OnInit {


  tipoAlerta:string = "alert-info"
  loading:boolean = false;


  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.loading=true;
    setTimeout( ()=> this.loading = false, 3000 );

  }

}
