import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnumRutas } from 'src/app/enums/enums-rutas';
import { VehiculosListComponent } from './vehiculos-list/vehiculos-list.component';
import { VehiculosFormComponent } from './vehiculos-form/vehiculos-form.component';

const routes: Routes = [
  {
    path: EnumRutas.VEHICULOS,
    component: VehiculosListComponent,
  },
  {
    path: `${EnumRutas.VEHICULOS}/${EnumRutas.ADD_VEHICULOS}`,
    component: VehiculosFormComponent,
  },
  {
    path: `${EnumRutas.VEHICULOS}/${EnumRutas.EDIT_VEHICULOS}/:id`,
    component: VehiculosFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
