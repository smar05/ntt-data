import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VehiculosListComponent } from './vehiculos-list/vehiculos-list.component';
import { PagesRoutingModule } from './pages-routing.module';
import { VehiculosFormComponent } from './vehiculos-form/vehiculos-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [VehiculosListComponent, VehiculosFormComponent, LoginComponent],
  imports: [PagesRoutingModule, ReactiveFormsModule, CommonModule],
  providers: [],
})
export class PagesModule {}
