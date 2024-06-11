import { Router } from "express";
import { categoriaController } from "../controllers/categorias.controller";

class CategoriasRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    /**
     * @swagger
     * /categorias:
     *   get:
     *     summary: Obtener detalles de las categorias
     *     responses:
     *       200:
     *         description: Detalles de la categoria obtenidos exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: number
     *                 nombre:
     *                   type: string
     *       500:
     *         description: Error interno del servidor
     */
    this.router.get("/", categoriaController.list);
    /**
     * @swagger
     * /categorias/{categoriaId}:
     *   get:
     *     summary: Obtener detalles de la categoria
     *     description: Obtiene los detalles de una categoria por ID
     *     parameters:
     *       - in: path
     *         name: categoriaId
     *         schema:
     *           type: number
     *         required: true
     *         description: ID de la categoria
     *     responses:
     *       200:
     *         description: Detalles de la categoria obtenidos exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 id:
     *                   type: number
     *                 nombre:
     *                   type: string
     *       500:
     *         description: Error interno del servidor
     */
    this.router.get("/:id", categoriaController.getOne);
    /**
     * @swagger
     * /categorias:
     *   post:
     *     summary: Crear una nueva categoria
     *     description: Crea un nueva categoria con los datos proporcionados
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - all
     *             properties:
     *               nombre:
     *                 type: string
     *     responses:
     *       201:
     *         description: Categoria creado exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       400:
     *         description: Solicitud incorrecta
     *       500:
     *         description: Error interno del servidor
     */
    this.router.post("/", categoriaController.create);
    /**
     * @swagger
     * /categorias/{cateogiraId}:
     *   delete:
     *     summary: Eliminar una categoria
     *     description: Elimina una categoria por su ID
     *     parameters:
     *       - in: path
     *         name: categoriaId
     *         schema:
     *           type: number
     *         required: true
     *         description: ID de la categoria a eliminar
     *     responses:
     *       200:
     *         description: Categoria eliminado exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                   example: Categoria eliminado exitosamente
     *       404:
     *         description: Categoria no encontrado
     *       500:
     *         description: Error interno del servidor
     */
    this.router.delete("/:id", categoriaController.delete);
    /**
     * @swagger
     * /categorias/{categoriaId}:
     *   put:
     *     summary: Actualizar una categoria
     *     description: Actualiza los detalles de una categoria por su ID
     *     parameters:
     *       - in: path
     *         name: categoriaId
     *         schema:
     *           type: number
     *         required: true
     *         description: ID de la categoria a actualizar
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - all
     *             properties:
     *               nombre:
     *                 type: string
     *     responses:
     *       200:
     *         description: Categoria actualizado exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *       400:
     *         description: Solicitud incorrecta
     *       404:
     *         description: Categoria no encontrado
     *       500:
     *         description: Error interno del servidor
     */
    this.router.put("/:id", categoriaController.update);
  }
}

const categoriasRoutes = new CategoriasRoutes();
export default categoriasRoutes.router;
