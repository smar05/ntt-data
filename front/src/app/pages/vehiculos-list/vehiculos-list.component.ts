import { Component } from '@angular/core';
import { IVehiculo } from 'src/app/interface/i-vehiculo';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css'],
})
export class VehiculosListComponent {
  public vehiculos: IVehiculo[] = [
    {
      id: '1',
      placa: 'placa',
      modelo: 'modelo',
      marca: 'marca',
      estado: true,
      fecha: new Date(),
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.getVehiculos();
  }

  getVehiculos() {
    /*this.proveedoresService.getProveedores().subscribe(
      (res) => {
        this.proveedores = res;
      },
      (err) => console.error(err)
    );*/
  }

  deleteVehiculo(id: string) {
    /*this.proveedoresService.deleteProveedor(id).subscribe(
      (res) => {
        console.log(res);
        this.getProveedores();
      },
      (err) => console.error(err)
    );*/
  }
}
