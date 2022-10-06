import { db } from "../utils/db";

export const loginUser = (user: string, password: string) => {
  const validation = db.filter((e) => {
    return e.email === user;
  });
  if (validation.length > 0) {
    if (validation[0].password === password) {
      const response: Object = {
        response: true,
        rol: validation[0].rol,
        isAuth: validation[0].isAuth,
      };
      return response;
    } else {
      alert("Contraseña incorrecta");
      return false;
    }
  } else {
    alert("Usuario no encontrado");
    return false;
  }
};
