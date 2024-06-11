import { Router } from "express";
import { categoriaController } from "../controllers/categorias.controller";

class CategoriasRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get("/", categoriaController.list);
    this.router.get("/:id", categoriaController.getOne);
    this.router.post("/", categoriaController.create);
    this.router.delete("/:id", categoriaController.delete);
    this.router.put("/:id", categoriaController.update);
  }
}

const categoriasRoutes = new CategoriasRoutes();
export default categoriasRoutes.router;
