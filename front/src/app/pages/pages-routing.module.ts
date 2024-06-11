import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnumRutas } from 'src/app/enums/enums-rutas';
import { VehiculosListComponent } from './vehiculos-list/vehiculos-list.component';

const routes: Routes = [
  {
    path: EnumRutas.LISTADO_VEHICULOS,
    component: VehiculosListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
