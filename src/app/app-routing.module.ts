import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperasBasComponent } from './calculos/operas-bas/operas-bas.component';
import { TablaComponent } from './calculos/tabla/tabla.component';
import { CineComponent } from './cinepolis/cine/cine.component';
import { ProductListComponent } from './productos/product-list/product-list.component';

const routes: Routes = [
  {path:'',component: ProductListComponent},
  {path:'OperaBas',component: OperasBasComponent},
  {path:'Tabla', component: TablaComponent},
  {path:'Cinepolis', component: CineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

