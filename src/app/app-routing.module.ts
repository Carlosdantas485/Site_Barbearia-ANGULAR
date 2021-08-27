import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { HomeRoutes } from './home/home-routing.module';
import { ContactRoutes } from './contact/contact-routing.module';
import { ProductsRoutes } from './products/product.routing.module';


export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/home', 
		pathMatch: 'full' 
	},
	...HomeRoutes,
	...ContactRoutes,
	...ProductsRoutes

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}