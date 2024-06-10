import { Router } from "express";
import { vehiculosController } from "../controllers/vehiculos.controler";

class VehiculosRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", vehiculosController.list);
    this.router.get("/:id", vehiculosController.getOne);
    this.router.post("/", vehiculosController.create);
    this.router.delete("/:id", vehiculosController.delete);
    this.router.put("/:id", vehiculosController.update);
  }
}

const vehiculosRoutes = new VehiculosRoutes();
export default vehiculosRoutes.router;
