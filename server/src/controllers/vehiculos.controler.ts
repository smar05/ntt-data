import { Request, Response } from "express";
import pool from "../database/pool";

class VehiculosController {
  public async list(req: Request, res: Response): Promise<any> {
    await pool.query("SELECT * FROM vehiculo", (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  }

  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    await pool.query(
      "SELECT * FROM vehiculo WHERE id = ?",
      [id],
      (err, result, fields) => {
        if (result.length > 0) {
          return res.json(result[0]);
        }
        res.status(404).json({ text: "No se encontro el proveedor" });
      }
    );
  }

  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO vehiculo set ?", [req.body]);
    res.json({ message: "Proveedor guardado" });
  }

  public async delete(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    await pool.query(
      "DELETE FROM vehiculo WHERE id = ?",
      [id],
      (err, result, fields) => {
        if (err) {
          throw err;
        }
        res.json({ message: "Proveedor eliminado" });
      }
    );
  }

  public async update(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    await pool.query(
      "UPDATE vehiculo SET ? WHERE id = ?",
      [req.body, id],
      (err, result, fields) => {
        if (err) {
          throw err;
        }
        res.json({ message: "El proveedor fue actualizado" });
      }
    );
  }
}

export const vehiculosController = new VehiculosController();
