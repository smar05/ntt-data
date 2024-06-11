import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnumRutas } from 'src/app/enums/enums-rutas';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public newVehiculo(): void {
    this.router.navigate([
      `/${EnumRutas.VEHICULOS}/${EnumRutas.ADD_VEHICULOS}`,
    ]);
  }
}
