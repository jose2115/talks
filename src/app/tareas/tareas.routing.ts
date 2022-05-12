import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  {path:'tareas', component: ListaComponent},
  {path:'', redirectTo:'/', pathMatch:'full'}

];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
	],
	exports: [RouterModule]
})


export class TareasRoutes {}

