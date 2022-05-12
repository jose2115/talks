
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ModulosRoutes } from './modulos/modulos.routing';
import { FooterComponent } from './shared/footer/footer.component';
import { ListaComponent } from './tareas/components/lista/lista.component';
import { TareasRoutes } from './tareas/tareas.routing';





const routes: Routes = [
  {path:'**', component:ListaComponent},
  {path:'', redirectTo:'/', pathMatch:'full'},
];

@NgModule({
	imports: [
    RouterModule.forRoot(routes),
    ModulosRoutes,
    TareasRoutes
	],
	exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }