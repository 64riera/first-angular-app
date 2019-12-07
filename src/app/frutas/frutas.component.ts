import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit {

  public frutas: any[] = [];
  public nombre: string = null;
  public cantidad: number = null;

  constructor() { }

  ngOnInit() {
  }

  agregarFruta(){
    console.log(typeof(this.nombre));
    console.log(typeof(this.cantidad));

    if(!this.nombre || !this.cantidad){
      alert("Ingrese valores válidos para continuar");
    } else {
      this.frutas.push(
        { nombre: this.nombre, cantidad: this.cantidad }
      );
      this.nombre = '';
      this.cantidad = null;
    }
  }

  eliminarFruta(i: number){
    this.frutas.splice(i, 1);
  }

}
