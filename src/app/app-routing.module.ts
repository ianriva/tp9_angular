import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { DondeEstamosComponent } from './components/donde-estamos/donde-estamos.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dondeEstamos', component: DondeEstamosComponent},
  {path: 'productos', component: ProductoComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'buscar/:filtro', component: BuscadorComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
