import { Request, Response } from "express";
import pool from "../database/pool";

class CategoriasController {
  public async list(req: Request, res: Response): Promise<any> {
    await pool.query("SELECT * FROM categoria", (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  }

  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    await pool.query(
      "SELECT * FROM categoria WHERE id = ?",
      [id],
      (err, result, fields) => {
        if (result.length > 0) {
          return res.json(result[0]);
        }
        res.status(404).json({ text: "No se encontro la categoria" });
      }
    );
  }

  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO categoria set ?", [req.body], (err) => {
      if (err) {
        throw err;
      }
      res.json({ message: "Categoria guardada" });
    });
  }

  public async delete(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    await pool.query(
      "DELETE FROM categoria WHERE id = ?",
      [id],
      (err, result, fields) => {
        if (err) {
          throw err;
        }
        res.json({ message: "Categoria eliminada" });
      }
    );
  }

  public async update(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    await pool.query(
      "UPDATE categoria SET ? WHERE id = ?",
      [req.body, id],
      (err, result, fields) => {
        if (err) {
          throw err;
        }
        res.json({ message: "La categoria fue actualizada" });
      }
    );
  }
}

export const categoriaController = new CategoriasController();
