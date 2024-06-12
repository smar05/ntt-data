import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import vehiculosRoutes from "./routes/vehiculos.routes";
import categoriasRouter from "./routes/categorias.routes";
import { swaggerSpec, swaggerUi } from "./swagger";
import usuariosRoutes from "./routes/usuarios.routes";
import loginRoutes from "./routes/login.routes";
import { Helpers } from "./helpers/helpers";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set("port", process.env.PORT || 3000);
    this.app.use(morgan("dev"));
    this.app.use(
      cors({
        origin: ["http://localhost:4200"],
        methods: ["GET", "POST", "PUT", "DELETE"],
      })
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    // Documentacion Swagger
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  routes(): void {
    this.app.use("/auth", loginRoutes);
    this.app.use("/usuarios", usuariosRoutes);
    this.app.use("/vehiculos", Helpers.authenticateToken, vehiculosRoutes);
    this.app.use("/categorias", Helpers.authenticateToken, categoriasRouter);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port: " + this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();
