import { Component } from '@angular/core';
import { IVehiculo } from 'src/app/interface/i-vehiculo';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css'],
})
export class VehiculosListComponent {
  public vehiculos: IVehiculo[] = [];

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit(): void {
    this.getVehiculos();
  }

  private getVehiculos(): void {
    this.vehiculosService.getVehiculos().subscribe(
      (res: IVehiculo[]) => {
        this.vehiculos = res;
      },
      (err) => console.error(err)
    );
  }

  deleteVehiculo(id: number) {
    this.vehiculosService.deleteVehiculo(id).subscribe(
      (res) => {
        this.getVehiculos();
      },
      (err) => console.error(err)
    );
  }
}
