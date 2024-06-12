import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnumRutas } from 'src/app/enums/enums-rutas';
import { VehiculosListComponent } from './vehiculos-list/vehiculos-list.component';
import { VehiculosFormComponent } from './vehiculos-form/vehiculos-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: EnumRutas.VEHICULOS,
    canActivate: [AuthGuard],
    component: VehiculosListComponent,
  },
  {
    path: `${EnumRutas.VEHICULOS}/${EnumRutas.ADD_VEHICULOS}`,
    canActivate: [AuthGuard],
    component: VehiculosFormComponent,
  },
  {
    path: `${EnumRutas.VEHICULOS}/${EnumRutas.EDIT_VEHICULOS}/:id`,
    canActivate: [AuthGuard],
    component: VehiculosFormComponent,
  },
  {
    path: `${EnumRutas.LOGIN}`,
    component: LoginComponent,
  },
  {
    path: `${EnumRutas.REGISTER}`,
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
