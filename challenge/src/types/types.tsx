interface User {
  email?: string;
  password?: string;
  rol: "admin" | "user";
  isAuth: Companies[];
}

type Companies = "company1" | "company2" | "company3";
