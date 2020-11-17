import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: []
})
export class UsuarioComponent implements OnInit {

  constructor(
      private activatedRoute: ActivatedRoute,
  ) {
   
    this.activatedRoute.params.subscribe( params =>  {
      console.log(params)
      console.log('Ruta Padre')
    })
    
   }

  

  ngOnInit(): void {
  }

}


