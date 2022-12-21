import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculoComponent } from './calculo/calculo.component';

const routes: Routes = [
  {
    path: 'caida-curvatura',
    component: CalculoComponent
  },
  {
    path:'**',
    redirectTo: 'caida-curvatura'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
