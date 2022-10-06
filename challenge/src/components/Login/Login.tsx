import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../context/actions/auth.action";
import useAuthContext from "../../context/store/auth/useAuth";
import { loginUser } from "../../services/validation.service";
import { db } from "../../utils/db";

export default function Login() {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string>();
  const [isNew, setIsNew] = useState(false);
  const title = isNew ? "registrate" : "loggeate";

  const { authState, dispatchAuthState } = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e: any, key: number) => {
    e.preventDefault();

    if (key == 1) {
      setTimeout(() => {
        const data: any = loginUser(email!!, password!!);
        const user: User = {
          email,
          password,
          rol: data.rol,
          isAuth: data.isAuth,
        };
        if (data.response) {
          setUser(user, dispatchAuthState);
          navigate("/Home");
        } else {
          console.log("false");
        }
      }, 500);
    } else if (key == 2) {
      setIsNew(!isNew);
      const newUser: User = {
        email,
        password,
        rol: "user",
        isAuth: ["company1"],
      };
      setTimeout(() => {
        db.push(newUser);
        alert("Usuario creado");
        setIsNew(!isNew);
      }, 500);
    }
    if (isNew) {
    }
  };

  const handleChange = (e: { target: HTMLInputElement }, key: number) => {
    if (key == 1) {
      setEmail(e.target.value);
    } else if (key == 2) {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="App">
      <div className="login">
        <h2 id="main-title">Bienvenido, {`${title}`}</h2>
        <form className="form-schema">
          <input
            placeholder="Email"
            className="input-login"
            onChange={(e) => handleChange(e, 1)}
          />
          <input
            placeholder="Contraseña"
            className="input-login"
            onChange={(e) => handleChange(e, 2)}
          />
          {!isNew ? (
            <>
              <button
                className="submit-btn"
                onClick={(e) => handleSubmit(e, 1)}
              >
                Sign in
              </button>
              <button id="create-acc" onClick={(e) => handleSubmit(e, 2)}>
                ¿Deseas crear una cuenta?
              </button>
            </>
          ) : (
            <button className="submit-btn">¡Crea tu cuenta!</button>
          )}
        </form>
      </div>
    </div>
  );
}
