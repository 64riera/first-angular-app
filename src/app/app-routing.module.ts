import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FrutasComponent } from './frutas/frutas.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:usuario', component: HomeComponent },
  { path: 'frutas', component: FrutasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
