import { Routes, RouterModule } from '@angular/router';
import { ModulosComponent } from '../modulos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { 
		path: '',
		component: ModulosComponent,
		// canActivate: [AuthGuard],
		children: [
		  {path:'', component: HomeComponent}
		]
	},
];

export const HomeRoutes = RouterModule.forChild(routes);
