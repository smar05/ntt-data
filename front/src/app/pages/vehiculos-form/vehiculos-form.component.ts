import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { IVehiculo } from 'src/app/interface/i-vehiculo';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculos-form',
  templateUrl: './vehiculos-form.component.html',
  styleUrls: ['./vehiculos-form.component.css'],
})
export class VehiculosFormComponent {
  private vehiculo: IVehiculo = {
    id: 0,
    placa: '',
    marca: '',
    modelo: '',
    estado: 'Nuevo',
    fecha: null as any,
    descripcion: '',
  };

  //Grupo de controles
  public f: UntypedFormGroup = this.form.group({
    placa: [
      '',
      {
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6),
        ],
      },
    ],
    modelo: [
      '',
      { validators: [Validators.required, Validators.maxLength(50)] },
    ],
    marca: [
      '',
      { validators: [Validators.required, Validators.maxLength(50)] },
    ],
    estado: ['', { validators: [Validators.required] }],
    descripcion: ['', { validators: [Validators.maxLength(200)] }],
  });

  get placa() {
    return this.f.controls['placa'];
  }

  get modelo() {
    return this.f.controls['modelo'];
  }

  get marca() {
    return this.f.controls['marca'];
  }

  get estado() {
    return this.f.controls['estado'];
  }

  get descripcion() {
    return this.f.controls['descripcion'];
  }

  edit: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private form: UntypedFormBuilder,
    private vehiculoService: VehiculosService
  ) {}

  ngOnInit(): void {
    const params: Params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.vehiculoService.getVehiculo(params['id']).subscribe(
        (res: IVehiculo | any) => {
          this.vehiculo = res;
          this.f.controls['placa'].setValue(res.placa);
          this.f.controls['marca'].setValue(res.marca);
          this.f.controls['modelo'].setValue(res.modelo);
          this.f.controls['estado'].setValue(res.estado);
          this.f.controls['descripcion'].setValue(res.descripcion);
          this.edit = true;
        },
        (err) => console.error(err)
      );
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
