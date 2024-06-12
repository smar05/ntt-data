import { Request, Response } from "express";
import axios from "axios";
import { IUsuario } from "../interface/i-usuario";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

class LoginController {
  constructor() {}

  /**
   * Login
   *
   * @param {Request} req
   * @param {Response} res
   * @return {*}  {Promise<void>}
   * @memberof LoginController
   */
  public async login(req: Request, res: Response): Promise<void> {
    const SECRET_KEY: string = "SECRET_KEY";
    const { username, password }: { username: string; password: string } =
      req.body;
    let user: IUsuario = null as any;

    try {
      user = (
        await axios.get(`http://localhost:3000/usuarios/username/${username}`)
      ).data;
    } catch (error) {
      res.status(401).send("Usuario no encontrado");
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ username: user.username }, SECRET_KEY, {
        expiresIn: "1h",
      });
      res.json({ token });
    } else {
      res.status(401).send("Credenciales invalidas");
    }
  }

  /**
   * Registro de un usuario
   *
   * @param {Request} req
   * @param {Response} res
   * @return {*}  {Promise<void>}
   * @memberof LoginController
   */
  public async register(req: Request, res: Response): Promise<any> {
    const { username, password }: IUsuario = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    let user: IUsuario = null as any;

    try {
      user = (
        await axios.get(`http://localhost:3000/usuarios/username/${username}`)
      ).data;
    } catch (error) {
      user = null as any;
    }

    if (user) return res.status(401).json({ message: "El usuario ya existe" });

    await axios.post(`http://localhost:3000/usuarios`, {
      username,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered" });
  }
}

export const loginController = new LoginController();
