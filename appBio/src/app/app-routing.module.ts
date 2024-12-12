import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ForoComponent } from './foro/foro.component'; // Importa el ForoComponent correctamente

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'foro', component: ForoComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

