import { Router } from "express";
import { usuariosController } from "../controllers/usuarios.controller";

class UsuariosRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    /**
     * @swagger
     * /usuarios:
     *   get:
     *     summary: Obtener detalles de los usuarios
     *     responses:
     *       200:
     *         description: Detalles del usuario obtenidos exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: number
     *                 placa:
     *                   type: string
     *                 modelo:
     *                   type: string
     *                 estado:
     *                    type: string
     *                 fecha:
     *                   type: string
     *                 marca:
     *                    type: string
     *                 descripcion:
     *                    type: string
     *                 id_categoria:
     *                    type: number
     *       500:
     *         description: Error interno del servidor
     */
    this.router.get("/", usuariosController.list);
    /**
     * @swagger
     * /usuarios/{id}:
     *   get:
     *     summary: Obtener detalles del usuario
     *     description: Obtiene los detalles de un usuario por ID
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: number
     *         required: true
     *         description: ID del usuario
     *     responses:
     *       200:
     *         description: Detalles del usuario obtenidos exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: number
     *                 username:
     *                   type: string
     *                 password:
     *                   type: string
     *       500:
     *         description: Error interno del servidor
     */
    this.router.get("/:id", usuariosController.getOne);
    /**
     * @swagger
     * /usuarios:
     *   post:
     *     summary: Crear un nuevo usuario
     *     description: Crea un nuevo usuario con los datos proporcionados
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
    this.router.post("/", usuariosController.create);
    /**
     * @swagger
     * /usuarios/{id}:
     *   delete:
     *     summary: Eliminar un usuario
     *     description: Elimina un usuario por su ID
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: number
     *         required: true
     *         description: ID del usuario a eliminar
     *     responses:
     *       200:
     *         description: usuario eliminado exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: usuario eliminado exitosamente
     *       404:
     *         description: usuario no encontrado
     *       500:
     *         description: Error interno del servidor
     */
    this.router.delete("/:id", usuariosController.delete);
    /**
     * @swagger
     * /usuarios/{id}:
     *   put:
     *     summary: Actualizar un usuario
     *     description: Actualiza los detalles de un usuario por su ID
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: number
     *         required: true
     *         description: ID del usuario a actualizar
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
     *       200:
     *         description: usuario actualizado exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       400:
     *         description: Solicitud incorrecta
     *       404:
     *         description: Vehiculo no encontrado
     *       500:
     *         description: Error interno del servidor
     */
    this.router.put("/:id", usuariosController.update);
  }
}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;
