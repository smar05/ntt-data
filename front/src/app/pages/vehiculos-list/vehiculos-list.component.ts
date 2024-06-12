import { Component } from '@angular/core';
import { Alerts } from 'src/app/helpers/alerts';
import { ICategoria } from 'src/app/interface/i-categoria';
import { IVehiculo } from 'src/app/interface/i-vehiculo';
import { CategoriasService } from 'src/app/services/categorias.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css'],
})
export class VehiculosListComponent {
  public vehiculos: IVehiculo[] = [];
  public categorias: ICategoria[] = [];

  constructor(
    private vehiculosService: VehiculosService,
    private categoriasService: CategoriasService
  ) {}

  ngOnInit(): void {
    this.getCategorias();
    this.getVehiculos();
  }

  private getVehiculos(): void {
    this.vehiculosService.getVehiculos().subscribe(
      (res: IVehiculo[]) => {
        this.vehiculos = res;
      },
      (err) => {
        Alerts.basicAlert(
          'Error',
          'Ha ocurrido un error consultando la informacion',
          'error'
        );
      }
    );
  }

  deleteVehiculo(id: number) {
    this.vehiculosService.deleteVehiculo(id).subscribe(
      (res) => {
        this.getVehiculos();
      },
      (err) => {
        Alerts.basicAlert(
          'Error',
          'Ha ocurrido un error eliminando el item',
          'error'
        );
      }
    );
  }

  private getCategorias(): void {
    this.categoriasService.getCategorias().subscribe(
      (res: ICategoria[]) => {
        this.categorias = res;
      },
      (err) => {
        Alerts.basicAlert(
          'Error',
          'Ha ocurrido un error consultado las categorias',
          'error'
        );
      }
    );
  }

  public getCategoriaName(id: number): string {
    return (
      this.categorias.find((categoria: ICategoria) => categoria.id === id)
        ?.nombre || ''
    );
  }
}
