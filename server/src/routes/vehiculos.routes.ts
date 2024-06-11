import { Router } from "express";
import { vehiculosController } from "../controllers/vehiculos.controler";

class VehiculosRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    /**
     * @swagger
     * /vehiculos:
     *   get:
     *     summary: Obtener detalles de los vehiculos
     *     responses:
     *       200:
     *         description: Detalles del vehiculo obtenidos exitosamente
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
    this.router.get("/", vehiculosController.list);
    /**
     * @swagger
     * /vehiculos/{vehiculoId}:
     *   get:
     *     summary: Obtener detalles del vehiculo
     *     description: Obtiene los detalles de un vehiculo por ID
     *     parameters:
     *       - in: path
     *         name: vehiculoId
     *         schema:
     *           type: number
     *         required: true
     *         description: ID del vehiculo
     *     responses:
     *       200:
     *         description: Detalles del vehiculo obtenidos exitosamente
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
    this.router.get("/:id", vehiculosController.getOne);
    /**
     * @swagger
     * /vehiculos:
     *   post:
     *     summary: Crear un nuevo vehiculo
     *     description: Crea un nuevo vehiculo con los datos proporcionados
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - all
     *             properties:
     *               placa:
     *                 type: string
     *               modelo:
     *                 type: number
     *               estado:
     *                 type: string
     *               fecha:
     *                 type: string
     *               marca:
     *                 type: string
     *               descripcion:
     *                 type: string
     *               id_categoria:
     *                 type: number
     *     responses:
     *       201:
     *         description: Vehiculo creado exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       400:
     *         description: Solicitud incorrecta
     *       500:
     *         description: Error interno del servidor
     */
    this.router.post("/", vehiculosController.create);
    /**
     * @swagger
     * /vehiculos/{vehiculoId}:
     *   delete:
     *     summary: Eliminar un vehiculo
     *     description: Elimina un vehiculo por su ID
     *     parameters:
     *       - in: path
     *         name: vehiculoId
     *         schema:
     *           type: number
     *         required: true
     *         description: ID del vehiculo a eliminar
     *     responses:
     *       200:
     *         description: Vehiculo eliminado exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: Vehiculo eliminado exitosamente
     *       404:
     *         description: Vehiculo no encontrado
     *       500:
     *         description: Error interno del servidor
     */
    this.router.delete("/:id", vehiculosController.delete);
    /**
     * @swagger
     * /vehiculos/{vehiculoId}:
     *   put:
     *     summary: Actualizar un vehiculo
     *     description: Actualiza los detalles de un vehiculo por su ID
     *     parameters:
     *       - in: path
     *         name: vehiculoId
     *         schema:
     *           type: number
     *         required: true
     *         description: ID del vehiculo a actualizar
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - all
     *             properties:
     *               placa:
     *                 type: string
     *               modelo:
     *                 type: number
     *               estado:
     *                 type: string
     *               fecha:
     *                 type: string
     *               marca:
     *                 type: string
     *               descripcion:
     *                 type: string
     *               id_categoria:
     *                 type: number
     *     responses:
     *       200:
     *         description: Vehiculo actualizado exitosamente
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
    this.router.put("/:id", vehiculosController.update);
  }
}

const vehiculosRoutes = new VehiculosRoutes();
export default vehiculosRoutes.router;
