import { Router } from "express";
import { proveedoresControler } from "../controllers/proveedores.controler";

class ProveedoresRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", proveedoresControler.list);
    this.router.get("/:id", proveedoresControler.getOne);
    this.router.post("/", proveedoresControler.create);
    this.router.delete("/:id", proveedoresControler.delete);
    this.router.put("/:id", proveedoresControler.update);
  }
}

const proveedoresRoutes = new ProveedoresRoutes();
export default proveedoresRoutes.router;
