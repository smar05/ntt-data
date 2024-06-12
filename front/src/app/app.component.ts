import { Component, OnInit } from '@angular/core';
import { EnumRutas } from './enums/enums-rutas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ntt-data';
  public showNavbar: boolean = false;

  ngOnInit(): void {
    this.showNavbar = !(
      document.location.pathname.includes(`/${EnumRutas.LOGIN}`) ||
      document.location.pathname.includes(`/${EnumRutas.REGISTER}`)
    );
  }
}
