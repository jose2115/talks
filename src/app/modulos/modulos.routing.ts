import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/home.routing';

const routes: Routes = [];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		HomeRoutes
	],
	exports: [RouterModule]
})


export class ModulosRoutes {}