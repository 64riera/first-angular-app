import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos: any[] = [];
  public nombre: string = null;
  public anio: number = null;
  public cantidad: number = null;
  public precio: number = null;

  constructor() { }

  ngOnInit() {
  }

  agregarProducto(){
    if(!this.nombre || !this.anio || !this.cantidad || !this.precio){
      alert("Ingrese valores válidos para continuar");
      return;
    } else {
      this.productos.push(
        {
          nombre: this.nombre,
          anio: this.anio,
          cantidad: this.cantidad,
          precio: this.precio
        }
      );
      
      this.nombre = null;
      this.anio = null;
      this.cantidad = null;
      this.precio = null;
    }
  }

  eliminarProducto(i: number){
    this.productos.splice(i, 1);
  }

}
