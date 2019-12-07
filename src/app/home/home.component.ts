import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usuario: string;

  constructor(
    private ruta: ActivatedRoute
  ) { }

  ngOnInit() {
    this.ruta.params.subscribe((datos) => {
      console.log(datos.usuario);
      this.usuario = datos.usuario;
    });
  }

}
