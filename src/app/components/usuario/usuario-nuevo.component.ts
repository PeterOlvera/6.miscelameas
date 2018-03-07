import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <div>
      usuario-nuevo Works!
    </div>
    <p>ID: {{ id }}</p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  id:string="";

  constructor( private router:ActivatedRoute ) {

    this.router.parent.params.subscribe( parameto => {

      this.id = parameto.id;

    } )

   }
  ngOnInit() {
  }

}
