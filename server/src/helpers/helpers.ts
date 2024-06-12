import jwt from "jsonwebtoken";

export class Helpers {
  /**
   * Middleware para verificar el token JWT
   *
   * @static
   * @param {(Request | any)} req
   * @param {(Response | any)} res
   * @param {*} next
   * @return {*}
   * @memberof Helpers
   */
  static authenticateToken(
    req: Request | any,
    res: Response | any,
    next: any
  ): void {
    const token: string = req.query.token;
    const SECRET_KEY: string = "SECRET_KEY";

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }
}
