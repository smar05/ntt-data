import { Router } from "express";
import { loginController } from "../controllers/login.controller";
class LoginRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    /**
     * @swagger
     * /auth/login:
     *   post:
     *     summary: Login del usuario
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - all
     *             properties:
     *               username:
     *                 type: string
     *               password:
     *                 type: number
     *     responses:
     *       201:
     *         description: usuario logueado exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       400:
     *         description: Solicitud incorrecta
     *       500:
     *         description: Error interno del servidor
     */
    this.router.post("/login", loginController.login);
    /**
     * @swagger
     * /auth/register:
     *   post:
     *     summary: Crear un nuevo usuario
     *     description: Crea un nuevo usuario
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - all
     *             properties:
     *               username:
     *                 type: string
     *               password:
     *                 type: number
     *     responses:
     *       201:
     *         description: usuario creado exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       400:
     *         description: Solicitud incorrecta
     *       500:
     *         description: Error interno del servidor
     */
    this.router.post("/register", loginController.register);
  }
}

const loginRoutes = new LoginRoutes();
export default loginRoutes.router;
