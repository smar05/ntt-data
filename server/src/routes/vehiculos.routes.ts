import { Router } from "express";

class VehiculosRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {}
}

const vehiculosRoutes = new VehiculosRoutes();
export default vehiculosRoutes.router;
