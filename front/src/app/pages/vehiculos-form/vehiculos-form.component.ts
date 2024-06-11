import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IVehiculo } from 'src/app/interface/i-vehiculo';

@Component({
  selector: 'app-vehiculos-form',
  templateUrl: './vehiculos-form.component.html',
  styleUrls: ['./vehiculos-form.component.css'],
})
export class VehiculosFormComponent {
  public vehiculo: IVehiculo = {
    id: 0,
    placa: '',
    marca: '',
    modelo: '',
    estado: 'Nuevo',
    fecha: null as any,
    descripcion: '',
  };

  edit: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const params: Params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      /*this.proveedoresService.getProveedor(params.id).subscribe(
        (res) => {
          this.proveedor = res;
          this.edit = true;
        },
        (err) => console.error(err)
      );*/
    }
  }

  saveNewVehiculo() {
    /*delete this.proveedor.id;
    delete this.proveedor.fecha;
    this.proveedoresService.saveProveedor(this.proveedor).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/proveedores']);
      },
      (err) => console.error(err)
    );
    this.proveedor = {
      nombre: '',
      direccion: '',
      correo: '',
      vehiculos: 0,
    };*/
  }

  updateVehiculo() {
    /*this.proveedoresService
      .updateProveedor(this.proveedor.id, this.proveedor)
      .subscribe(
        (res) => {
          this.router.navigate(['/proveedores']);
        },
        (err) => console.error(err)
      );*/
  }
}
