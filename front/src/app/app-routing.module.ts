import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnumRutas } from 'src/app/enums/enums-rutas';

const routes: Routes = [
  {
    path: EnumRutas.HOME,
    redirectTo: `/${EnumRutas.VEHICULOS}`,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
