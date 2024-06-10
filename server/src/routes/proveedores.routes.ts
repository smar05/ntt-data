import { Router } from "express";

class ProveedoresRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {}
}

const proveedoresRoutes = new ProveedoresRoutes();
export default proveedoresRoutes.router;
