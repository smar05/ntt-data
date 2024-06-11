import { Request, Response } from "express";
import pool from "../database/pool";

class UsuariosController {
  public async list(req: Request, res: Response): Promise<any> {
    await pool.query("SELECT * FROM usuarios", (err, result, fields) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.json(result);
    });
  }

  public async getOne(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    await pool.query(
      "SELECT * FROM usuarios WHERE id = ?",
      [id],
      (err, result, fields) => {
        if (result.length > 0) {
          return res.json(result[0]);
        }
        res.status(404).json({ text: "No se encontro el usuario" });
      }
    );
  }

  public async getOneByUsername(req: Request, res: Response): Promise<any> {
    const { username } = req.params;
    await pool.query(
      "SELECT * FROM usuarios WHERE username like ?",
      [username],
      (err, result, fields) => {
        if (result.length > 0) {
          return res.json(result[0]);
        }
        res.status(404).json({ text: "No se encontro el usuario" });
      }
    );
  }

  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO usuarios set ?", [req.body], (err) => {
      if (err) {
        res.status(500).json(err);
        return;
      }
      res.json({ message: "usuario guardado" });
    });
  }

  public async delete(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    await pool.query(
      "DELETE FROM usuarios WHERE id = ?",
      [id],
      (err, result, fields) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.json({ message: "usuario eliminado" });
      }
    );
  }

  public async update(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    await pool.query(
      "UPDATE usuarios SET ? WHERE id = ?",
      [req.body, id],
      (err, result, fields) => {
        if (err) {
          res.status(500).json(err);
          return;
        }
        res.json({ message: "El proveedor fue actualizado" });
      }
    );
  }
}

export const usuariosController = new UsuariosController();
