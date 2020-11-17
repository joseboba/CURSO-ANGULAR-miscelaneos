import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
 
  this.activatedRoute.parent.params.subscribe( params =>  {
    console.log(params)
    console.log('Ruta Hija')
  })
  
 }


  ngOnInit(): void {
  }

}
